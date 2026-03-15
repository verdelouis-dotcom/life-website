import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";

export const runtime = "nodejs";

const FRIENDLY_FAILURE_MESSAGE =
  "We couldn’t connect to The Shared Table newsletter. Please try again soon or email info@longevityinitiativeforfoodandeducation.com.";

const INVALID_CREDENTIAL_HINTS = ["invalid api key", "unauthorized", "missing api key", "forbidden", "not allowed"];
const DUPLICATE_HINTS = ["already", "exists", "duplicate"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.longevityinitiativeforfoodandeducation.com";

type AssessmentReportPayload = {
  metrics: AssessmentResultsPayload["metrics"];
  pillarScores: AssessmentResultsPayload["pillarScores"];
  strengths: AssessmentResultsPayload["strengths"];
  opportunities: AssessmentResultsPayload["opportunities"];
  recommendations: AssessmentResultsPayload["recommendations"];
};

function resolveEnv(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return undefined;
}

function collectMessages(payload: unknown): string[] {
  if (typeof payload === "string") {
    return [payload];
  }

  if (Array.isArray(payload)) {
    return payload.flatMap((item) => collectMessages(item));
  }

  if (typeof payload === "object" && payload !== null) {
    return Object.values(payload).flatMap((value) => collectMessages(value));
  }

  return [];
}

export async function POST(request: Request) {
  console.info("NEWSLETTER_ROUTE_HIT", { method: request.method, url: request.url });

  try {
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch (error) {
      console.error("NEWSLETTER_ROUTE_ERROR", { stage: "parse", error });
      return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
    }

    if (!rawBody || typeof rawBody !== "object") {
      console.error("NEWSLETTER_ROUTE_ERROR", { stage: "shape", detail: "Payload must be an object." });
      return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
    }

    const body = rawBody as Record<string, unknown>;
    const payloadKeys = Object.keys(body);
    const contextKeys =
      typeof body.context === "object" && body.context !== null ? Object.keys(body.context as Record<string, unknown>) : undefined;
    console.info("NEWSLETTER_ROUTE_PAYLOAD", {
      keys: payloadKeys,
      hasReport: Boolean(body.report),
      contextKeys,
    });

    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!email) {
      console.error("NEWSLETTER_ROUTE_ERROR", { stage: "validation", detail: "Missing email" });
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const firstName =
      typeof body.firstName === "string" && body.firstName.trim() ? body.firstName.trim() : undefined;
    const report = normalizeReport((body as { report?: unknown }).report);

    const apiKey = resolveEnv("BEEHIIV_API_KEY", "NEXT_PUBLIC_BEEHIIV_API_KEY");
    const publicationId = resolveEnv("BEEHIIV_PUBLICATION_ID", "NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID");
    console.info("NEWSLETTER_ROUTE_CONFIG", {
      hasBeehiivKey: Boolean(apiKey),
      hasPublicationId: Boolean(publicationId),
      hasGmailUser: Boolean(process.env.GMAIL_USER),
      hasGmailAppPassword: Boolean(process.env.GMAIL_APP_PASSWORD),
      hasToEmail: Boolean(process.env.LIFE_TO_EMAIL),
    });

    if (!apiKey || !publicationId) {
      console.error("NEWSLETTER_ROUTE_ERROR", {
        stage: "config",
        detail: "Missing Beehiiv credentials",
        hasApiKey: Boolean(apiKey),
        hasPublicationId: Boolean(publicationId),
      });
      return NextResponse.json(
        {
          ok: false,
          error: "Newsletter configuration is missing. Please alert info@longevityinitiativeforfoodandeducation.com.",
        },
        { status: 503 },
      );
    }

    let response: Response;
    try {
      response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      });
    } catch (error) {
      console.error("NEWSLETTER_ROUTE_BEEHIIV_ERROR", { stage: "network", error });
      return NextResponse.json({ ok: false, error: FRIENDLY_FAILURE_MESSAGE }, { status: 502 });
    }

    if (!response.ok) {
      const raw = await response.text();
      console.error("NEWSLETTER_ROUTE_BEEHIIV_ERROR", { stage: "response", status: response.status, body: raw });
      let normalized = raw.toLowerCase();

      try {
        const parsed = JSON.parse(raw);
        const flattened = collectMessages(parsed).join(" ");
        normalized += ` ${flattened.toLowerCase()}`;
      } catch {
        // ignore parse errors
      }

      const duplicateSubscription = DUPLICATE_HINTS.some((hint) => normalized.includes(hint));
      const credentialIssue =
        response.status === 401 || INVALID_CREDENTIAL_HINTS.some((hint) => normalized.includes(hint));

      const status = duplicateSubscription ? 409 : credentialIssue ? 502 : 500;
      const errorMessage = duplicateSubscription
        ? "You’re already on the LIFE newsletter."
        : credentialIssue
          ? FRIENDLY_FAILURE_MESSAGE
          : "Subscription failed. Please try again soon.";

      if (duplicateSubscription && report) {
        try {
          await sendAssessmentReportEmail({ email, firstName, report });
        } catch (reportError) {
          console.error("NEWSLETTER_ROUTE_REPORT_ERROR", { stage: "duplicate-email", reportError });
        }
      }

      return NextResponse.json({ ok: false, error: errorMessage, alreadySubscribed: duplicateSubscription }, { status });
    }

    if (report) {
      try {
        await sendAssessmentReportEmail({
          email,
          firstName,
          report,
        });
      } catch (error) {
        console.error("NEWSLETTER_ROUTE_REPORT_ERROR", { stage: "send", error });
        return NextResponse.json(
          { ok: false, error: "We subscribed you, but couldn’t send the report. Please try again soon." },
          { status: 502 },
        );
      }
    }

    console.info("NEWSLETTER_ROUTE_SUCCESS", { email, sentReport: Boolean(report) });
    return NextResponse.json({
      ok: true,
      message: report ? "Report on the way—check your inbox soon." : "You’re now part of The Shared Table.",
    });
  } catch (error) {
    console.error("NEWSLETTER_ROUTE_ERROR", { stage: "unhandled", error });
    return NextResponse.json({ ok: false, error: FRIENDLY_FAILURE_MESSAGE }, { status: 500 });
  }
}

function normalizeReport(raw: unknown): AssessmentReportPayload | null {
  if (!raw || typeof raw !== "object" || raw === null) {
    return null;
  }

  const payload = raw as Partial<AssessmentResultsPayload>;
  if (!payload.metrics) {
    return null;
  }

  return {
    metrics: payload.metrics,
    pillarScores: Array.isArray(payload.pillarScores) ? payload.pillarScores : [],
    strengths: Array.isArray(payload.strengths) ? payload.strengths : [],
    opportunities: Array.isArray(payload.opportunities) ? payload.opportunities : [],
    recommendations: Array.isArray(payload.recommendations) ? payload.recommendations : [],
  };
}

function getGmailTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing Gmail credentials");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

async function sendAssessmentReportEmail({
  email,
  firstName,
  report,
}: {
  email: string;
  firstName?: string;
  report: AssessmentReportPayload;
}) {
  const transporter = getGmailTransport();
  const from = `"LIFE" <${process.env.GMAIL_USER}>`;
  const adminCopy = process.env.LIFE_TO_EMAIL;
  const bcc = adminCopy ? [adminCopy] : undefined;
  const subject = "Your LIFE Longevity Assessment report";
  const html = buildReportHtml(firstName, report);
  const text = buildReportText(firstName, report);

  await transporter.sendMail({
    from,
    to: email,
    bcc,
    subject,
    html,
    text,
  });

  console.info("ASSESSMENT_REPORT_EMAIL_SENT", { to: email, from, bcc: adminCopy });
}

function buildReportHtml(firstName: string | undefined, report: AssessmentReportPayload) {
  const greetingName = firstName || "there";
  const metricsRows = [
    { label: "LIFE Habits Score", value: formatScore(report.metrics?.lifeHabitsScore) },
    { label: "Health Context Score", value: formatScore(report.metrics?.healthContextScore) },
    { label: "Current Longevity Baseline", value: formatScore(report.metrics?.currentLongevityBaseline) },
    { label: "Longevity Potential", value: formatScore(report.metrics?.longevityPotential) },
  ]
    .map(
      (item) => `
        <tr>
          <td style="padding:6px 12px;border-bottom:1px solid #e1d9ce;font-weight:600;">${item.label}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #e1d9ce;color:#2f402c;">${item.value}</td>
        </tr>
      `,
    )
    .join("");

  const pillarRows = (report.pillarScores ?? [])
    .map(
      (pillar) => `
        <tr>
          <td style="padding:6px 12px;border-bottom:1px solid #f0ebe2;">${pillar.label}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #f0ebe2;text-align:right;font-weight:600;">${formatScore(
            pillar.score,
          )}</td>
        </tr>
      `,
    )
    .join("");

  const strengthsBlock = renderListSection(
    report.strengths,
    "Keep reinforcing the daily habits that already feel sustainable.",
  );
  const opportunitiesBlock = renderListSection(
    report.opportunities,
    "Great work—keep scanning for small experiments to stack on top of what’s working.",
  );
  const recommendationsBlock = renderListSection(
    report.recommendations,
    "Keep stacking consistent meals, movement, and rest.",
  );

  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;color:#0e1511;line-height:1.6;">
      <p style="font-size:16px;">Hi ${greetingName},</p>
      <p style="font-size:16px;">
        Here is your LIFE Longevity Assessment snapshot. These educational estimates translate your survey responses into a lifestyle-informed profile.
      </p>

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">Key Metrics</h2>
      <table style="width:100%;border-collapse:collapse;background:#fffdf9;border:1px solid #e1d9ce;border-radius:12px;overflow:hidden;">
        <tbody>${metricsRows}</tbody>
      </table>

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">Pillar Snapshot</h2>
      ${
        pillarRows
          ? `<table style="width:100%;border-collapse:collapse;background:#fbf7ef;border:1px solid #f0ebe2;border-radius:12px;overflow:hidden;">
              <tbody>${pillarRows}</tbody>
            </table>`
          : `<p style="font-size:15px;color:#5c574d;">Your pillar scores will appear after you complete the assessment.</p>`
      }

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">Strengths to Celebrate</h2>
      ${strengthsBlock}

      <h2 style="margin-top:24px;font-size:18px;color:#723f2a;">Biggest Opportunities</h2>
      ${opportunitiesBlock}

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">General Recommendations</h2>
      ${recommendationsBlock}

      <p style="margin-top:24px;font-size:15px;">
        <a href="${SITE_URL}/assessment" style="color:#2f402c;text-decoration:underline;">Retake the LIFE Longevity Assessment</a>
        &nbsp;|&nbsp;
        <a href="${SITE_URL}/assessment/methodology" style="color:#2f402c;text-decoration:underline;">Review the methodology</a>
      </p>

      <p style="margin-top:16px;font-size:12px;color:#71695d;">
        This assessment provides an educational estimate based on lifestyle and health factors associated with healthy aging. It is not a medical diagnosis and should not replace professional medical advice.
      </p>
    </div>
  `;
}

function buildReportText(firstName: string | undefined, report: AssessmentReportPayload) {
  const greetingName = firstName || "there";
  const metricsBlock = [
    `- LIFE Habits Score: ${formatScore(report.metrics?.lifeHabitsScore)}`,
    `- Health Context Score: ${formatScore(report.metrics?.healthContextScore)}`,
    `- Current Longevity Baseline: ${formatScore(report.metrics?.currentLongevityBaseline)}`,
    `- Longevity Potential: ${formatScore(report.metrics?.longevityPotential)}`,
  ].join("\n");

  const pillarBlock = (report.pillarScores ?? [])
    .map((pillar) => `- ${pillar.label}: ${formatScore(pillar.score)}`)
    .join("\n");

  const strengthsBlock = renderPlainList(
    report.strengths,
    "Keep reinforcing the daily habits that already feel sustainable.",
  );
  const opportunitiesBlock = renderPlainList(
    report.opportunities,
    "Great work—keep scanning for small experiments to stack on top of what’s working.",
  );
  const recommendationsBlock = renderPlainList(
    report.recommendations,
    "Keep stacking consistent meals, movement, and rest.",
  );

  return [
    `Hi ${greetingName},`,
    "",
    "Here is your LIFE Longevity Assessment snapshot.",
    "",
    "Key metrics:",
    metricsBlock,
    "",
    "Pillar snapshot:",
    pillarBlock || "Pillar scores will appear after you complete the assessment.",
    "",
    "Strengths:",
    strengthsBlock,
    "",
    "Opportunities:",
    opportunitiesBlock,
    "",
    "General recommendations:",
    recommendationsBlock,
    "",
    `Retake the assessment: ${SITE_URL}/assessment`,
    `Review the methodology: ${SITE_URL}/assessment/methodology`,
    "",
    "This assessment provides an educational estimate based on lifestyle and health factors associated with healthy aging. It is not a medical diagnosis and should not replace professional medical advice.",
  ]
    .filter(Boolean)
    .join("\n");
}

function renderListSection(
  items: { title: string; description?: string; detail?: string }[] | undefined,
  fallback: string,
) {
  if (!items || !items.length) {
    return `<p style="font-size:15px;color:#5c574d;">${fallback}</p>`;
  }

  return `<ul style="padding-left:20px;font-size:15px;color:#3a372f;">
    ${items
      .map(
        (item) => {
          const detail = item.description ?? item.detail ?? "";
          return `<li style="margin-bottom:6px;"><strong>${item.title}:</strong> <span style="color:#5c574d;">${detail}</span></li>`;
        },
      )
      .join("")}
  </ul>`;
}

function renderPlainList(
  items: { title: string; description?: string; detail?: string }[] | undefined,
  fallback: string,
) {
  if (!items || !items.length) {
    return fallback;
  }
  return items.map((item) => `- ${item.title}: ${item.description ?? item.detail ?? ""}`).join("\n");
}

function formatScore(value: number | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "—";
  }
  return `${Math.round(value)}%`;
}

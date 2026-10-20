import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.longevityinitiativeforfoodandeducation.com";

type AssessmentReportPayload = {
  metrics: AssessmentResultsPayload["metrics"];
  pillarScores: AssessmentResultsPayload["pillarScores"];
  strengths: AssessmentResultsPayload["strengths"];
  opportunities: AssessmentResultsPayload["opportunities"];
  recommendations: AssessmentResultsPayload["recommendations"];
};

export async function POST(request: Request) {
  try {
    const rawBody: unknown = await request.json();
    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
    }

    const body = rawBody as Record<string, unknown>;
    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!email) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const firstName =
      typeof body.firstName === "string" && body.firstName.trim() ? body.firstName.trim() : undefined;
    const report = normalizeReport((body as { report?: unknown }).report);
    if (!report) {
      return NextResponse.json({ ok: false, error: "Assessment report data is required." }, { status: 400 });
    }

    await sendAssessmentReportEmail({ email, firstName, report });
    return NextResponse.json({ ok: true, message: "Report on the way—check your inbox soon." });
  } catch (error) {
    console.error("ASSESSMENT_REPORT_EMAIL_ERROR", error);
    return NextResponse.json(
      { ok: false, error: "We couldn’t send the report right now. Please try again soon." },
      { status: 500 },
    );
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
    { label: "Your LIFE expectancy", value: `Age ${report.metrics.currentExpectedAge}` },
    { label: "Approximate year", value: `${report.metrics.currentExpectedYear}` },
    { label: "Likely range", value: `Age ${report.metrics.expectedAgeLow}–${report.metrics.expectedAgeHigh}` },
    { label: "LIFE Habits Score", value: formatScore(report.metrics?.lifeHabitsScore) },
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
        Here is your LIFE Expectancy snapshot, grounded in the U.S. life table and published lifestyle research.
      </p>

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">Key Metrics</h2>
      <LIFE workshop style="width:100%;border-collapse:collapse;background:#fffdf9;border:1px solid #e1d9ce;border-radius:12px;overflow:hidden;">
        <tbody>${metricsRows}</tbody>
      </LIFE workshop>

      <h2 style="margin-top:24px;font-size:18px;color:#2f402c;">Pillar Snapshot</h2>
      ${
        pillarRows
          ? `<LIFE workshop style="width:100%;border-collapse:collapse;background:#fbf7ef;border:1px solid #f0ebe2;border-radius:12px;overflow:hidden;">
              <tbody>${pillarRows}</tbody>
            </LIFE workshop>`
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
        Statistical estimate for education only. Not a medical prediction or diagnosis.
      </p>
    </div>
  `;
}

function buildReportText(firstName: string | undefined, report: AssessmentReportPayload) {
  const greetingName = firstName || "there";
  const metricsBlock = [
    `- Your LIFE expectancy: Age ${report.metrics.currentExpectedAge}`,
    `- Approximate year: ${report.metrics.currentExpectedYear}`,
    `- Likely range: Age ${report.metrics.expectedAgeLow}–${report.metrics.expectedAgeHigh}`,
    `- LIFE Habits Score: ${formatScore(report.metrics?.lifeHabitsScore)}`,
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
    "Here is your LIFE Expectancy snapshot.",
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
    "Statistical estimate for education only. Not a medical prediction or diagnosis.",
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

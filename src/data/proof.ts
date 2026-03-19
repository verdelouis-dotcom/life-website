export interface ProofQuote {
  quote: string;
  attribution: string;
  context?: string;
}

export interface ProofHighlight {
  title: string;
  detail: string;
  tag?: string;
}

export const PILOT_QUOTES: ProofQuote[] = [
  {
    quote: "Hosting a LIFE workshop in our apartment building reminded neighbors that cooking together is still possible, even on busy weeks.",
    attribution: "Atlanta host",
    context: "Pilot year gathering",
  },
  {
    quote: "Registering each LIFE workshop keeps us accountable. It turns a nice dinner into a measurable commitment we can report back to donors.",
    attribution: "Board member",
    context: "Quarterly review",
  },
  {
    quote: "The assessment opened up honest conversations about sleep, stress, and what’s really happening at home.",
    attribution: "LIFE Workshop participant",
    context: "Community kitchen cohort",
  },
];

export const PARTNER_READY_HIGHLIGHTS: ProofHighlight[] = [
  {
    title: "Rooted in Georgia",
    detail: "Built with neighborhoods, congregations, and clinics that want to restore shared meals close to home.",
    tag: "Pilot Stage",
  },
  {
    title: "Board-Governed Nonprofit",
    detail: "Quarterly reviews, expense approvals, and donor reporting keep LIFE transparent for partners.",
    tag: "Accountability",
  },
  {
    title: "Partnership-Ready Programming",
    detail: "LIFE Workshops, keynotes, and hosted LIFE workshops can be adapted for schools, employers, and community health teams.",
    tag: "Collaboration",
  },
];

export const ABOUT_PROOF: ProofHighlight[] = [
  {
    title: "Georgia Beginnings",
    detail: "Launching locally allowed LIFE to gather stories, refine the curriculum, and publish honest pilot learnings before traveling.",
  },
  {
    title: "Community + Board Leadership",
    detail: "Volunteer board members oversee finances, ingredients, and research partnerships.",
  },
  {
    title: "Designed for Replication",
    detail: "Host guides, registration, and assessments make the model ready for neighborhoods, faith communities, and clinics.",
  },
];

export const WORKSHOP_PROOF: ProofHighlight[] = [
  {
    title: "Ready for Community Groups",
    detail: "Neighborhood associations, wellness teams, and nonprofits use the LIFE workshop to prepare hosts and measure follow-up LIFE workshops.",
  },
  {
    title: "Hands-On Practice",
    detail: "Participants cook with fresh ingredients, complete the assessment, and leave with a hosting checklist.",
  },
  {
    title: "Easy to Request",
    detail: "Partners in Atlanta, Rochester, and Austin can book directly through the contact form; other cities may request virtual cohorts.",
  },
];

export const IMPACT_PROOF: ProofHighlight[] = [
  {
    title: "Quarterly Pilot Reviews",
    detail: "All registered LIFE workshops, attendance, and donations are reviewed by the board before publishing updates.",
  },
  {
    title: "Story + Data",
    detail: "Hosts submit both qualitative notes and impact metrics so context is never lost in spreadsheets.",
  },
  {
    title: "Expansion Criteria",
    detail: "Early expansion (Atlanta, Rochester, Austin) depends on consistent host retention, assessment completion, and documented outcomes.",
  },
];

export const CONTACT_PROOF: ProofHighlight[] = [
  {
    title: "Partnership Responses",
    detail: "Community partners receive a response within two business days from the board member overseeing the pilot.",
  },
  {
    title: "LIFE Workshop + Keynote Requests",
    detail: "Organizations receive a prep checklist so they know what ingredients, equipment, and follow-up are expected.",
  },
  {
    title: "Media + Research",
    detail: "Press, academic, and philanthropic requests go directly to the founder and board chair for coordinated replies.",
  },
];

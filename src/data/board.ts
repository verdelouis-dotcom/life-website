export type BoardMember = {
  name: string;
  role: string;
  bio: string;
};

export const BOARD: BoardMember[] = [
  {
    name: "Lou Verde",
    role: "Founder & President",
    bio: "Community nutrition advocate and creator of the LIFE Table model, Lou guides the strategic vision and oversees pilot operations across Metro Atlanta.",
  },
  {
    name: "Dr. Miles Medina",
    role: "Treasurer",
    bio: "Emergency medicine physician and Associate Director at Piedmont Henry Hospital, Dr. Medina stewards clinical rigor, fiscal accountability, and medical partnerships.",
  },
  {
    name: "Bob Fabbio",
    role: "Vice President",
    bio: "Entrepreneur and founder of Norrio Capital Partners, Bob brings decades of venture-building experience to accelerate LIFE's replication and funding strategy.",
  },
  {
    name: "Kara Verde",
    role: "Secretary",
    bio: "Accounting graduate of Rochester Institute of Technology, Kara manages governance records and ensures LIFE's compliance documentation stays audit-ready.",
  },
];

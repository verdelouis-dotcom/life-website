const DEFAULTS = {
  50: "https://donorbox.org/life-initiative?amount=50",
  100: "https://donorbox.org/life-initiative?amount=100",
  500: "https://donorbox.org/life-initiative?amount=500",
};

export const DONATION_LINKS = {
  50: process.env.NEXT_PUBLIC_DONATION_50?.trim() || DEFAULTS[50],
  100: process.env.NEXT_PUBLIC_DONATION_100?.trim() || DEFAULTS[100],
  500: process.env.NEXT_PUBLIC_DONATION_500?.trim() || DEFAULTS[500],
};

const DEFAULT_LINK = "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-9282";

const normalize = (value?: string | null) => {
  const link = value?.trim();
  if (!link) {
    return DEFAULT_LINK;
  }
  return link.startsWith("http") ? link : DEFAULT_LINK;
};

export const PRIMARY_DONATION_LINK = normalize(process.env.NEXT_PUBLIC_DONATION_LINK);

export const DONATION_LINKS = {
  50: normalize(process.env.NEXT_PUBLIC_DONATION_50),
  100: normalize(process.env.NEXT_PUBLIC_DONATION_100),
  500: normalize(process.env.NEXT_PUBLIC_DONATION_500),
};

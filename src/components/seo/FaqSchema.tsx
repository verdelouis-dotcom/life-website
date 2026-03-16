interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  items: FAQItem[];
}

export default function FaqSchema({ items }: FaqSchemaProps) {
  if (!items.length) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

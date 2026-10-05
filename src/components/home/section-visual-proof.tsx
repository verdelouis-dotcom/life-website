import PhotoHighlight from "@/components/proof/PhotoHighlight";

export default function SectionVisualProof() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">
      <PhotoHighlight
        imageSrc="/images/table/table4.jpeg"
        alt="Neighbors sharing a LIFE cooking experience meal"
        eyebrow="COMMUNITY PROOF"
        title="Shared LIFE cooking experiences are already happening"
        body="People in the Washington, DC metro area and Austin, TX are gathering friends, family, and neighbors to cook with fresh ingredients, connect over a shared meal, and explore LIFE's free longevity resources."
        caption="Photo: LIFE cooking experience hosted in Atlanta"
      />
    </section>
  );
}

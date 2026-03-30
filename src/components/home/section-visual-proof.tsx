import PhotoHighlight from "@/components/proof/PhotoHighlight";

export default function SectionVisualProof() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">
      <PhotoHighlight
        imageSrc="/images/table/table4.jpeg"
        alt="Neighbors sharing a LIFE cooking experience meal"
        eyebrow="COMMUNITY PROOF"
        title="Shared LIFE cooking experiences are already happening"
        body="Hosts in Atlanta, GA and Austin, TX are cooking experience friends, family, and neighbors to cook with fresh ingredients, complete the LIFE Longevity Assessment, and register each LIFE cooking experience so progress stays measurable."
        caption="Photo: LIFE cooking experience hosted in Atlanta"
      />
    </section>
  );
}

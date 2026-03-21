import PhotoHighlight from "@/components/proof/PhotoHighlight";

export default function SectionVisualProof() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">
      <PhotoHighlight
        imageSrc="/images/table/table4.jpeg"
        alt="Neighbors sharing a LIFE workshop meal"
        eyebrow="COMMUNITY PROOF"
        title="Shared LIFE workshops are already happening"
        body="Hosts in Atlanta, GA and Austin, TX are gathering friends, family, and neighbors to cook with fresh ingredients, complete the LIFE Longevity Assessment, and register each LIFE workshop so progress stays measurable."
        caption="Photo: LIFE gathering hosted in Atlanta"
      />
    </section>
  );
}

import PhotoHighlight from "@/components/proof/PhotoHighlight";

export default function SectionVisualProof() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">
      <PhotoHighlight
        imageSrc="/images/table/table4.jpeg"
        alt="Neighbors sharing a LIFE table meal"
        eyebrow="COMMUNITY PROOF"
        title="Shared tables are already happening"
        body="Hosts in Atlanta, Rochester, and Austin are gathering friends, family, and neighbors to cook with fresh ingredients, complete the LIFE Longevity Assessment, and register each table so progress stays measurable."
        caption="Photo: LIFE dinner hosted in Rochester"
      />
    </section>
  );
}

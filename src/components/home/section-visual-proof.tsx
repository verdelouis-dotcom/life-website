import PhotoHighlight from "@/components/proof/PhotoHighlight";

export default function SectionVisualProof() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">
      <PhotoHighlight
        imageSrc="/images/table/table4.jpeg"
        alt="Neighbors sharing a LIFE table meal"
        eyebrow="Community proof"
        title="Shared tables are already happening"
        body="Metro Atlanta hosts are gathering friends, family, and neighbors to cook with fresh ingredients, complete the LIFE Longevity Assessment, and register each table so the movement stays measurable."
        caption="Photo: LIFE pilot gathering in Atlanta"
      />
    </section>
  );
}

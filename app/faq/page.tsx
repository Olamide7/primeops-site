import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeader } from "@/components/Cards";

export const metadata = {
  title: "FAQs",
  description: "Frequently asked questions about PrimeOps services, audits, pricing, and technical growth systems."
};

export default function FAQPage() {
  return (
    <section className="page-section">
      <SectionHeader label="FAQs" title="Clear answers before we engineer the system." />
      <div className="mt-12">
        <FAQAccordion />
      </div>
    </section>
  );
}

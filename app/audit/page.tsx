import { AuditFunnel } from "@/components/AuditFunnel";
import { SectionHeader } from "@/components/Cards";

export const metadata = {
  title: "Free Operational Audit",
  description: "Start the PrimeOps free operational audit funnel to identify growth bottlenecks before implementation."
};

export default function AuditPage() {
  return (
    <section className="page-section">
      <SectionHeader label="Free Operational Audit" title="Map the bottleneck before the build." copy="A high-intent intake path for companies ready to scale, automate, or repair their growth infrastructure." />
      <div className="mt-12">
        <AuditFunnel />
      </div>
    </section>
  );
}

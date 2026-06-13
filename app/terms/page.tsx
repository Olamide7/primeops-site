import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Terms and Conditions",
  description: "PrimeOps terms and conditions."
};

export default function TermsPage() {
  return (
    <section className="page-section">
      <Reveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Legal</p>
        <h1 className="mt-5 text-5xl font-black text-white">Terms and Conditions</h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-mist">
          <p>PrimeOps provides strategy, design, engineering, automation, and implementation services for business clients. Website content is provided for general information and does not create a service agreement by itself.</p>
          <p>Project scope, timelines, deliverables, payment terms, ownership, and support obligations are defined in written proposals or statements of work agreed with each client.</p>
          <p>Audit recommendations are based on information provided by the user and PrimeOps&apos; review. Results are not guaranteed unless explicitly stated in a signed agreement.</p>
          <p>Users must not misuse this website, submit unlawful content, or attempt to disrupt the availability or security of PrimeOps systems.</p>
        </div>
      </Reveal>
    </section>
  );
}

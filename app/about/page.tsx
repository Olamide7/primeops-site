import { SectionHeader, ServiceCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/content";

export const metadata = {
  title: "About Us",
  description: "Learn how PrimeOps engineers business growth through intelligent technology and operational systems."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-section">
        <Reveal className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">About PrimeOps</p>
          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">We engineer the operating layer behind modern B2B growth.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
            PrimeOps exists for companies that have demand, ambition, and messy systems in the way. We combine web engineering, AI intake, automation, and commercial strategy so growth becomes easier to capture and easier to manage.
          </p>
        </Reveal>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="page-section">
          <SectionHeader label="Mission" title="Turn operational friction into technical leverage." copy="We do not ship isolated assets. We build the connective infrastructure that helps teams respond faster, qualify better, and make cleaner decisions." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => <ServiceCard key={step.title} title={step.title} description={step.description} outcomes={["Systems thinking", "Commercial clarity", "Technical delivery"]} icon={step.icon} delay={index * 0.06} />)}
          </div>
        </div>
      </section>
    </>
  );
}

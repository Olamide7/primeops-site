import { SectionHeader, ServiceCard } from "@/components/Cards";
import { GeoPricing } from "@/components/GeoPricing";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Explore PrimeOps services including technical growth systems, AI reception, workflow automation, and infrastructure advisory."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-section">
        <SectionHeader label="Services" title="Modular systems for growth, automation, and operational control." copy="Choose a focused build or combine modules into a full technical growth system." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.06} />)}
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="page-section">
          <SectionHeader label="Geo Pricing" title="Packages for local operators and international growth teams." copy="Toggle smoothly between Nigerian SME pricing and premium enterprise infrastructure pricing." />
          <div className="mt-12">
            <GeoPricing />
          </div>
        </div>
      </section>
    </>
  );
}

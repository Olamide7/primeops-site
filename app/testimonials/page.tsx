import { SectionHeader, TestimonialCard } from "@/components/Cards";
import { testimonials } from "@/lib/content";

export const metadata = {
  title: "Testimonials",
  description: "Client proof and success metrics from PrimeOps technical growth systems."
};

export default function TestimonialsPage() {
  return (
    <section className="page-section">
      <SectionHeader label="Testimonials" title="Client success metrics with operational context." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => <TestimonialCard key={item.name} {...item} delay={index * 0.06} />)}
      </div>
    </section>
  );
}

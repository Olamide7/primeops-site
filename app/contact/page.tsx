import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contactRoutes } from "@/lib/content";
import { MessagesSquare, Zap } from "lucide-react";

const icons = {
  messages: MessagesSquare,
  zap: Zap
};

export const metadata = {
  title: "Contact Us",
  description: "Contact PrimeOps for technical growth systems, AI reception, automation, and infrastructure audits."
};

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Contact Us</p>
          <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">Route the right conversation.</h1>
          <p className="mt-6 text-lg leading-8 text-mist">Tell us what you are trying to scale, automate, or repair. We will route your enquiry to the right next step.</p>
          <div className="mt-8 grid gap-3">
            {contactRoutes.map((route) => (
              <a key={route.label} href={route.href} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4 text-white hover:border-cyan/70">
                {(() => {
                  const Icon = icons[route.icon as keyof typeof icons] ?? Zap;
                  return <Icon className="text-cyan" size={20} />;
                })()}
                {route.label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

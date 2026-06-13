import { BlogCard, ProjectCard, SectionHeader, ServiceCard, TestimonialCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { AnimatedButton } from "@/components/AnimatedButton";
import { blogPosts, processSteps, projects, services, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="page-section">
        <SectionHeader label="What we engineer" title="One growth system, not another disconnected tool." copy="PrimeOps aligns your website, AI intake, automations, CRM handoffs, and reporting into infrastructure your team can actually operate." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.06} />)}
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="page-section">
          <SectionHeader label="Operating model" title="From bottleneck to engineered advantage." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <ServiceCard key={step.title} title={step.title} description={step.description} outcomes={["Clear scope", "Measured delivery", "Team-ready handoff"]} icon={step.icon} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>
      <section className="page-section">
        <SectionHeader label="Proof" title="Operational bottlenecks solved by better systems." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.title} {...project} delay={index * 0.06} />)}
        </div>
      </section>
      <section className="page-section pt-0">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => <TestimonialCard key={item.name} {...item} delay={index * 0.06} />)}
        </div>
      </section>
      <section className="border-y border-white/10 bg-cyan/10">
        <div className="page-section text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Lead Magnet</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl">Find the growth leak before you buy another tool.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-mist">Answer a few questions and PrimeOps will map the highest-friction bottleneck in your current operating system.</p>
            <div className="mt-8 flex justify-center">
              <AnimatedButton href="/audit">Start Free Operational Audit</AnimatedButton>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="page-section">
        <SectionHeader label="News" title="Technical growth insights for operators." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} delay={index * 0.06} />)}
        </div>
      </section>
    </>
  );
}

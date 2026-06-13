import { ProjectCard, SectionHeader } from "@/components/Cards";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "PrimeOps project case studies showcasing operational bottlenecks solved by technical systems."
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <SectionHeader label="Projects" title="Case studies in engineered operational growth." copy="Representative examples of how PrimeOps turns leakage into measurable system performance." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.title} {...project} delay={index * 0.06} />)}
      </div>
    </section>
  );
}

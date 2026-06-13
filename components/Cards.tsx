"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Building2, Cpu, LineChart, Network, ShieldCheck, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

const icons = {
  bot: Bot,
  building: Building2,
  chart: LineChart,
  cpu: Cpu,
  network: Network,
  shield: ShieldCheck,
  workflow: Workflow
};

export function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{label}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-mist">{copy}</p>}
    </Reveal>
  );
}

export function ServiceCard({
  title,
  description,
  outcomes,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  outcomes: string[];
  icon: keyof typeof icons | string;
  delay?: number;
}) {
  const Icon = icons[icon as keyof typeof icons] ?? Network;

  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(34,211,238,0.75)" }}
        whileTap={{ scale: 0.99 }}
        className="h-full rounded-md border border-white/10 bg-white/[0.035] p-6 transition-shadow hover:shadow-glow"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan/10 text-cyan">
          <Icon size={22} />
        </div>
        <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
        <div className="mt-6 grid gap-2">
          {outcomes.map((outcome) => (
            <span key={outcome} className="text-sm text-white/85">+ {outcome}</span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export function ProjectCard({ title, metric, description, tags, delay = 0 }: { title: string; metric: string; description: string; tags: string[]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        className="h-full rounded-md border border-white/10 bg-panel p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{metric}</p>
        <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">{tag}</span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export function BlogCard({ post, delay = 0 }: { post: { slug: string; title: string; excerpt: string; date: string; category: string }; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article whileHover={{ y: -5 }} whileTap={{ scale: 0.99 }} className="h-full rounded-md border border-white/10 bg-white/[0.035] p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan">{post.category}</p>
        <h3 className="mt-4 text-xl font-bold leading-7 text-white">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
          Read insight <ArrowUpRight size={16} />
        </Link>
      </motion.article>
    </Reveal>
  );
}

export function TestimonialCard({ quote, name, role, metric, delay = 0 }: { quote: string; name: string; role: string; metric: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.6)" }} className="h-full rounded-md border border-white/10 bg-panel p-6">
        <p className="text-3xl font-black text-cyan">{metric}</p>
        <p className="mt-5 text-base leading-7 text-white">&ldquo;{quote}&rdquo;</p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-semibold text-white">{name}</p>
          <p className="mt-1 text-sm text-mist">{role}</p>
        </div>
      </motion.article>
    </Reveal>
  );
}

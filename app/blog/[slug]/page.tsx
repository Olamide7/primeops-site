import { notFound } from "next/navigation";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post?.title ?? "Insight",
    description: post?.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="page-section">
      <Reveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{post.category} · {post.date}</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-mist">{post.excerpt}</p>
        <div className="prose prose-invert mt-10 max-w-none text-mist">
          <p>
            The companies that scale cleanly do not treat websites, AI, automations, CRM, and reporting as separate islands. They define the operating path first, then engineer each touchpoint to move prospects and internal teams toward the next correct action.
          </p>
          <p>
            PrimeOps recommends starting with a bottleneck audit: where demand enters, where it waits, where context is lost, and where leadership lacks visibility. Once those points are visible, technical implementation becomes sharper and easier to measure.
          </p>
        </div>
        <div className="mt-10">
          <AnimatedButton href="/audit">Audit My Growth System</AnimatedButton>
        </div>
      </Reveal>
    </article>
  );
}

import { BlogCard, SectionHeader } from "@/components/Cards";
import { blogPosts } from "@/lib/content";

export const metadata = {
  title: "News and Blog",
  description: "PrimeOps insights on technical growth, AI automation, infrastructure, and B2B operations."
};

export default function BlogPage() {
  return (
    <section className="page-section">
      <SectionHeader label="News / Blog" title="SEO-ready insights for technical growth operators." copy="A lightweight CMS-style content structure ready for expansion into a real CMS when publishing volume increases." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} delay={index * 0.06} />)}
      </div>
    </section>
  );
}

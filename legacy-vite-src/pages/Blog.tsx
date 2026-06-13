import React, { useState } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { BlogCard } from '../components/shared/BlogCard';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const POSTS: BlogPost[] = [
  {
    slug: 'why-your-business-needs-an-ai-receptionist',
    title: 'Why Your Business Needs an AI Receptionist in 2026',
    excerpt: 'Explore how 24/7 AI-driven voice systems are transforming customer service, capturing lost leads, and reducing operating costs.',
    category: 'Artificial Intelligence',
    date: 'June 10, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'eliminating-manual-friction-with-workflow-automation',
    title: 'Eliminating Manual Friction: A Guide to Workflow Automation',
    excerpt: 'Learn how connecting your CRM, communication tools, and databases with automated flows can save your team 15+ hours a week.',
    category: 'Automation',
    date: 'June 05, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'building-high-performance-websites-for-b2b-lead-generation',
    title: 'Building High-Performance Websites for B2B Lead Gen',
    excerpt: 'Speed and user flows are the silent killers of conversion. Here is how we design websites that turn traffic into pipeline.',
    category: 'Web Development',
    date: 'May 28, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'leveraging-geo-pricing-for-international-markets',
    title: 'How to Leverage Geo-Pricing for International Markets',
    excerpt: 'A deep dive into purchasing power parity and how localizing pricing packages can drive higher adoption and client trust.',
    category: 'Growth Strategy',
    date: 'May 15, 2026',
    readTime: '4 min read',
  },
];

const CATEGORIES = ['All', 'Artificial Intelligence', 'Automation', 'Web Development', 'Growth Strategy'];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? POSTS
    : POSTS.filter(post => post.category === selectedCategory);

  return (
    <>
      <PageHero
        label="Blog & Insights"
        title={<>Technical strategies for <em className="teal">modern growth.</em></>}
        subtitle="Insights, guides, and engineering case studies from our team on AI, automation, and high-performance web development."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="blog-filters">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`blog-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.slug} {...post} index={i} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No articles found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

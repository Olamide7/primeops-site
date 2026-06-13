import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  index?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug, title, excerpt, category, date, readTime, index = 0
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="blog-card"
    >
      <Link to={`/blog/${slug}`} className="blog-card-link">
        <div className="blog-card-image">
          <div className="blog-card-category">{category}</div>
        </div>
        <div className="blog-card-body">
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-excerpt">{excerpt}</p>
          <div className="blog-card-meta">
            <span>{date}</span>
            <span className="blog-card-dot">·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

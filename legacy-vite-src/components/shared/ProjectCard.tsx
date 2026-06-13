import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title, client, industry, challenge, solution, metrics, tags, index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card"
    >
      <div className="project-card-header">
        <div className="project-card-industry">{industry}</div>
        <div className="project-card-client">{client}</div>
      </div>
      <h3 className="project-card-title">{title}</h3>
      <div className="project-card-body">
        <div className="project-card-section">
          <div className="project-card-label">Challenge</div>
          <p>{challenge}</p>
        </div>
        <div className="project-card-section">
          <div className="project-card-label">Solution</div>
          <p>{solution}</p>
        </div>
      </div>
      <div className="project-card-metrics">
        {metrics.map((m, i) => (
          <div key={i} className="project-metric">
            <div className="project-metric-value">{m.value}</div>
            <div className="project-metric-label">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="project-card-tags">
        {tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

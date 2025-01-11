import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}) {
  return (
    <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-700/50 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-purple-300 mb-2">{title}</h3>
      <p className="text-purple-100 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-purple-300 border border-purple-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
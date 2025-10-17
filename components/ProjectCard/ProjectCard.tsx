import React from 'react';

interface ProjectCardProps {
  title: string;
  technologies: string;
  description: string;
  url: string;
}

export default function ProjectCard({ title, technologies, description, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      className="group relative w-2/3 sm:w-1/2 ml-16 lg:ml-96 block border"
    >
      <div className="mt-10 mx-10">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>
        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
          {technologies}
        </p>
      </div>
      <div className="mt-3 mx-10 mb-10">
        <p className="text-gray-700 text-sm">
          {description}
        </p>
      </div>
    </a>
  );
}


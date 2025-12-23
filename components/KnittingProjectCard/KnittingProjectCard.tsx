import React from 'react';
import { KnittingProject } from '../../types';
import Image from 'next/image';

interface KnittingProjectCardProps {
  project: KnittingProject;
}

export default function KnittingProjectCard({ project }: KnittingProjectCardProps) {
  const statusColors = {
    'in progress': 'bg-blue-100 text-blue-800',
    'completed': 'bg-green-100 text-green-800',
    'planned': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {project.image && (
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        
        <div className="space-y-2 text-sm text-gray-600">
          <div>
            {' '}
            <span className="font-medium">{project.startDate} • </span>

            {project.patternUrl ? (
              <a 
                href={project.patternUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic hover:underline"
              >
                {project.pattern}
              </a>
            ) : (
              project.pattern
            )}
          </div>
          
          <div className='flex items-center gap-2'>
            <img src='https://i.imgur.com/C5dKhKT.png' alt='yarn' className='w-8 h-8' />
            {project.yarnUrl ? (
              <a 
                href={project.yarnUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic hover:underline"
              >
                {project.yarn}
              </a>
            ) : (
              <span className="italic">{project.yarn}</span>
            )}
          </div>
          
          {project.completedDate && (
            <div>
              <span className="font-medium">Completed:</span> {new Date(project.completedDate).toLocaleDateString()}
            </div>
          )}
          
          {project.notes && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-gray-400 text-xs italic">note: {project.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


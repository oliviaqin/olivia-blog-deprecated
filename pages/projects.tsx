import ProjectCard from '../components/ProjectCard/ProjectCard';

const projects = [
  {
    title: 'Covista',
    technologies: 'figma, html, css',
    description: 'A website constructed to track vaccination efforts in the UC Berkeley campus.',
    url: 'https://github.com/covista/safecampus'
  },
  {
    title: 'Datastory',
    technologies: 'html, css',
    description: 'A website constructed for a brand new website for a club on campus.',
    url: 'https://github.com/karendlam/datastorywebsite'
  }
];

export default function Projects() {
  return (
    <div className="flex-col space-y-4 lg:space-y-16 items-center mt-16 sm:mt-0">
      {projects.map((project, index) => (
        <div key={index} className="block lg:flex-1">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}


import Head from 'next/head';
import KnittingProjectCard from '../components/KnittingProjectCard/KnittingProjectCard';
import { knittingProjects } from '../data/constants';

export default function Yarn() {
  // Group projects by status
  const inProgress = knittingProjects.filter(p => p.status === 'in progress');
  const completed = knittingProjects.filter(p => p.status === 'completed');
  const planned = knittingProjects.filter(p => p.status === 'planned');

  return (
    <>
      <Head>
        <title>Yarn - Olivia Qin</title>
        <meta name="description" content="My knitting projects and fiber crafts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* In Progress Section */}
          {inProgress.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgress.map((project) => (
                  <KnittingProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Completed Section */}
          {completed.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completed.map((project) => (
                  <KnittingProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Planned Section */}
          {planned.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {planned.map((project) => (
                  <KnittingProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {knittingProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">No knitting projects yet!</p>
              <p className="text-gray-400 text-sm">
                Add your projects in <code className="bg-gray-100 px-2 py-1 rounded">data/constants.ts</code>
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}


import Navigation from '../../components/Navigation';
import { projects } from '../../data/projects';

export default function Portall() {
  const project = projects.find(p => p.slug === 'portall');

  if (!project) return null;

  return (
    <main>
      <Navigation />

      {/* Project Content */}
      <div className="container mx-auto px-4 pt-32">
        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">{project.title}</h1>

          {/* Project Hero Image */}
          <div className="bg-gray-200 aspect-video w-full mb-12">
            {/* Add hero image when available */}
          </div>

          {/* Project Description */}
          <div className="prose max-w-none">
            <p className="text-xl mb-8">{project.description}</p>

            {/* Add more content sections as needed */}
            <section className="my-12">
              <h2 className="text-2xl font-light mb-4">About the Project</h2>
              <p>
                Detailed description of the Portall project goes here. This can include
                the concept, technology used, and the experience it creates.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl font-light mb-4">Technical Details</h2>
              <p>
                Information about the technical implementation, tools, and technologies
                used in creating Portall.
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

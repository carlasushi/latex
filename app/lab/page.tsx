'use client';

import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useMouse } from '../hooks/useMouse';
import { useEffect, useState } from 'react';

export default function Lab() {
  const mouse = useMouse();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative">
      <Navigation />

      {/* Mouse Follow Effect */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.35), transparent 80%)`
          }}
        />
      )}

      {/* Project Content */}
      <div className="container mx-auto px-4">
        {/* Hero Title */}
        <div className="pt-32 pb-16 text-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[40%] object-cover filter grayscale"
          >
            <source src="/video/lab.mp4" type="video/mp4" />
          </video>
          <h1 className="text-6xl font-light mb-8">LAB</h1>
          <h2 className="text-xl font-mono max-w-3xl mx-auto leading-relaxed">
            LatexLAB is an incubator for artists, technologists, historians, and communities to experiment with decentralized digital technology.
          </h2>
        </div>

        {/* About Section */}
        <section id="about" className="space-y-8">
          <div className="space-y-6 max-w-2xl text-lg leading-relaxed font-light font-mono">
            <p>
              LatexLAB fosters collaboration in re-imagining archiving, media dissemination, and materiality for the future. As an open invitation and ongoing project, it brings together artists, technologists, historians, and communities to engage in experimentation and innovation. Embracing the new possibilities offered by decentralized digital technology and advancements in craftsmanship, LatexLAB seeks to honor artistic traditions through a radical fusion of art and technology.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

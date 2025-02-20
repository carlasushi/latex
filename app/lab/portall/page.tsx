'use client';

import Navigation from '../../components/Navigation';
import Image from 'next/image';
import { projects } from '../../data/projects';
import ImageGallery from '../../components/ImageGallery';
import { useMouse } from '../../hooks/useMouse';
import { useEffect, useState } from 'react';

export default function Portall() {
  const project = projects.find(p => p.slug === 'portall');
  const mouse = useMouse();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) return null;

  return (
    <main className="relative">
      <Navigation />

      {/* Mouse Follow Effect */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-30 mix-blend-color-dodge animate-flicker"
          style={{
            background: `
              radial-gradient(600px at ${mouse.x}px ${mouse.y}px,
                rgba(255, 147, 15, 0.15),
                transparent 70%
              ),
              radial-gradient(500px at ${mouse.x}px ${mouse.y}px,
                rgba(255, 85, 15, 0.25),
                transparent 60%
              ),
              radial-gradient(400px at ${mouse.x}px ${mouse.y}px,
                rgba(255, 15, 15, 0.35),
                transparent 50%
              )
            `
          }}
        />
      )}

      {/* Project Content */}
      <div className="container mx-auto px-4 pt-32">
        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">{project.title}</h1>

          {/* Project Hero Image */}
          <div className="w-full aspect-video relative mb-12">
            <Image
              src="/images/portall/postcard.webp"
              alt="Port+all Project"
              fill
              className="object-cover"
            />
          </div>

          {/* Project Description */}
          <div className="font-mono prose max-w-none">
            <p className="text-xl mb-8">{project.description}</p>

            {/* Gallery Section */}
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Gallery</h2>
              <ImageGallery
                images={[1, 2, 3, 4, 5]}
                basePath="/images/portall"
                extension="jpeg"
              />
            </section>

            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">About the Project</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>Port = a haven, a sanctuary.</p>
                <p>Portal = a door, a gate.</p>
                <p>All = together, a collective, from the German &ldquo;allez.&rdquo;</p>
                <p className="mt-8">Port(ALL) is a proposal by LatexLAB to integrate 7artscafe into a global arts network using distributed technology and archival innovation. Just as ports historically connected distant cultures, cafés serve as modern meeting points for exchanging ideas, skills, and stories. Port(ALL) envisions 7artscafe as a gateway between physical and digital realms, preserving its creative ecosystem for future generations.</p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Technical Details</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>
                  Information about the technical implementation, tools, and technologies
                  used in creating Portall.
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Process</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>
                  Documentation of the design and development process, including research,
                  prototyping, and iteration phases.
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Impact</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>
                  Overview of the project&apos;s impact on the community and its contribution
                  to the global arts network.
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Future Development</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>
                  Roadmap and vision for future developments, including planned features
                  and potential expansions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

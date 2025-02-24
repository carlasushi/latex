'use client';

import Navigation from '../components/Navigation';
import { projects } from '../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import FloatingTitle from '../components/FloatingTitle';

export default function Lab() {
  return (
    <main className="relative">
      <Navigation />
      <FloatingTitle pageName="LAB" />
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
          <h1 className="text-6xl font-light my-8">LAB</h1>
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-light mb-8">Current Projects</h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/lab/${project.slug}`}
                  className="block group"
                >
                  <div className="aspect-video relative mb-4 overflow-hidden">
                    {project.slug === 'portall' ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      >
                        <source src="/images/portall/videos/portall_video_1.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                  </div>
                  <h2 className="text-2xl font-light">{project.title}</h2>
                  <p className="text-gray-600 mt-2 font-mono">{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

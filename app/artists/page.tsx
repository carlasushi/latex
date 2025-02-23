'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Artists() {
  const [openArtist, setOpenArtist] = useState<string[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const toggleArtist = (artist: string) => {
    setOpenArtist(current =>
      current.includes(artist)
        ? current.filter(a => a !== artist)
        : [...current, artist]
    );
  };

  return (
    <main className="relative">
      <Navigation />
      {/* Artists Content */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">Artists</h1>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full font-mono">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-medium">Bambi</th>
                  <th className="py-4 px-6 text-left font-medium">Palomix</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {/* 0. Background Row */}
                <tr className="align-top">
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Background</h3>
                      <p className="text-gray-600 font-light">
                        BAMBI is a creative technologist and illustrator based between Sydney and Berlin,
                        with an interdisciplinary practice that spans blockchain experimentation, textile
                        design, videography, and publication design. She founded Toy Frens, a blockchain-native
                        NFT community on Ethereum, exploring the intersection of digital and physical realms
                        through photography. Her work engages with the archive as a living, participatory
                        experience, questioning how information is shared and reimagined. As a digital nomad,
                        Bambi shapes creative dialogues between technology, memory, and collective agency.
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Background</h3>
                      <div className="space-y-4">
                        <div
                          className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer"
                          onClick={() => setSelectedMedia('/images/artists/palomix/palomix_wakes_up.png')}
                        >
                          <Image
                            src="/images/artists/palomix/palomix_wakes_up.png"
                            alt="Palomix"
                            fill
                            className="object-cover transition-all duration-1000 group-hover:animate-[glitch_2s_ease-in-out_infinite] animate-[organic-pulse_6s_ease-in-out_infinite]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                          <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-70"
                            style={{
                              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                              animation: 'organic-pulse 6s ease-in-out infinite'
                            }}
                          />
                        </div>
                        <p className="text-gray-600 font-light">
                          PALOMIX is a ceramicist and creative technologist focusing on 3D renderings,
                          3D printing, casting and digital preservation of artifacts. With a background in
                          molecular biology, applied linguistics, psychology and neuroscience. She studied
                          ceramics in California, Barcelona and Hiroshima, combining traditional craft with
                          modern technology.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* 1. Artistic Discipline Row */}
                <tr className="align-top">
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Artistic Discipline</h3>
                      <p className="text-gray-600 font-light">
                        Creative Technology, Illustration, Blockchain Development,
                        Textile Design, Videography, Publication Design
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Artistic Discipline</h3>
                      <p className="text-gray-600 font-light">
                        Ceramics, Creative Technology, 3D Rendering, 3D Printing
                      </p>
                    </div>
                  </td>
                </tr>

                {/* 2. Personal Statement Row */}
                <tr className="align-top">
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Personal Statement</h3>
                      <p className="text-gray-600 font-light">
                        As a digital nomad and creative technologist, I explore the intersection of
                        traditional crafts and emerging technologies. My work focuses on creating
                        participatory experiences that bridge physical and digital realms, questioning
                        how we share and preserve cultural narratives in the age of blockchain and
                        decentralized networks.
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium mb-2">Personal Statement</h3>
                      <p className="text-gray-600 font-light">
                        As PALOMIX, my artistic practice combines traditional ceramics with creative technology,
                        inspired by the wisdom of older generations and the curiosity of children.
                      </p>
                      <p className="text-gray-600 font-light mt-4">
                        I explore spirituality, ancestral knowledge, telepathy, and emotional connection,
                        considering how thoughts and emotions can be visualized through creative expression.
                        My curiosity also extends to non-human animals and their unique forms of communication.
                        Through 3D renderings and modern techniques like 3D printing, I bridge traditional craft
                        with contemporary digital practices.
                      </p>
                      <p className="text-gray-600 font-light mt-4">
                        My goal is to create work that sparks joy.
                      </p>
                    </div>
                  </td>
                </tr>

                {/* 3. Project Proposal (Merged Row) */}
                <tr>
                  <td colSpan={2} className="py-4 px-6">
                    <h3 className="font-medium mb-2">Project Proposal: Port+all</h3>
                    <p className="text-gray-600 mb-4 font-light">
                      A collaborative residency project at 7artscafe that combines digital archiving,
                      community engagement, and traditional crafts. Through Port+all, we aim to create
                      a living digital archive that preserves and celebrates the cultural ecosystem of 7artscafe.
                    </p>
                    <div className="space-y-4">
                      <p className="text-gray-600 font-medium">Key Activities:</p>
                      <ul className="list-disc ml-6 text-gray-600 space-y-2 font-light">
                        <li>Community interviews and storytelling sessions</li>
                        <li>3D scanning and digital preservation of artifacts</li>
                        <li>Creation of physical artworks through various mediums</li>
                        <li>Development of blockchain-based archive</li>
                        <li>Weekly skill-sharing workshops</li>
                        <li>Final exhibition combining physical and digital elements</li>
                      </ul>
                      <Link
                        href="/lab/portall"
                        className="text-blue-600 hover:text-blue-800 underline block mt-6 font-light"
                      >
                        View Full Project Details →
                      </Link>
                    </div>
                  </td>
                </tr>

                {/* 4. Work Samples Row */}
                <tr className="align-top">
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Work Samples</h3>
                    <div className="space-y-4">
                      <a
                        href="https://www.figma.com/board/2U4qXABNAnDjjYVn0ePqRj/Bambi-Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Portfolio Board →
                      </a>
                      <div
                        className="relative aspect-[16/9] w-full overflow-hidden rounded cursor-pointer"
                        onClick={() => setSelectedMedia('/video/bambi_video.mp4')}
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/video/bambi_video.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Work Samples</h3>
                    <div className="space-y-4">
                      <a
                        href="https://www.figma.com/board/Y30Y1u3Ud4WTQ5KGrKGvN2/Palomix-work"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Portfolio Board →
                      </a>
                      <div
                        className="relative aspect-[16/9] w-full overflow-hidden rounded cursor-pointer"
                        onClick={() => setSelectedMedia('/video/tamago.mp4')}
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/video/tamago.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* 5. Residency Period Row */}
                <tr className="align-top">
                  <td colSpan={2} className="py-4 px-6">
                    <h3 className="font-medium mb-2">Residency Period</h3>
                    <p className="text-gray-600 font-light mb-4">
                      Proposed residency timeframe for the Port+all project at 7artscafe, listed in order of preference:
                    </p>
                    <div className="space-y-4 font-light">
                      <div className="flex items-start gap-4">
                        <span className="text-gray-400">Primary</span>
                        <p className="text-gray-600">April 1 - May 1, 2025</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-gray-400">Secondary</span>
                        <p className="text-gray-600">May 1 - June 1, 2025</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-gray-400">Tertiary</span>
                        <p className="text-gray-600">September 1 - October 1, 2025</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 font-mono">
            {/* Bambi Accordion */}
            <div className="border-2 border-gray-200 border-dotted">
              <button
                onClick={() => toggleArtist('bambi')}
                className="w-full p-4 text-left bg-gray-50 flex justify-between items-center border-b-2 border-gray-200 border-dotted"
              >
                <h2 className="text-2xl font-medium">Bambi</h2>
                <span className="transform transition-transform duration-200">
                  {openArtist.includes('bambi') ? '−' : '+'}
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${openArtist.includes('bambi') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="divide-y divide-gray-200">
                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Background</h3>
                    <p className="text-gray-600 font-light">
                      BAMBI is a creative technologist and illustrator based between Sydney and Berlin,
                      with an interdisciplinary practice that spans blockchain experimentation, textile
                      design, videography, and publication design. She founded Toy Frens, a blockchain-native
                      NFT community on Ethereum, exploring the intersection of digital and physical realms
                      through photography. Her work engages with the archive as a living, participatory
                      experience, questioning how information is shared and reimagined. As a digital nomad,
                      Bambi shapes creative dialogues between technology, memory, and collective agency.
                    </p>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Artistic Discipline</h3>
                    <p className="text-gray-600 font-light">
                      Creative Technology, Illustration, Blockchain Development,
                      Textile Design, Videography, Publication Design
                    </p>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Personal Statement</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600 font-light">
                        As a digital nomad and creative technologist, I explore the intersection of
                        traditional crafts and emerging technologies. My work focuses on creating
                        participatory experiences that bridge physical and digital realms, questioning
                        how we share and preserve cultural narratives in the age of blockchain and
                        decentralized networks.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Work Samples</h3>
                    <div className="space-y-4">
                      <a
                        href="https://www.figma.com/board/2U4qXABNAnDjjYVn0ePqRj/Bambi-Portfolio"
                        className="text-blue-600 hover:text-blue-800 underline font-light block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Portfolio Board →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Palomix Accordion */}
            <div className="border-2 border-gray-200 border-dotted">
              <button
                onClick={() => toggleArtist('palomix')}
                className="w-full p-4 text-left bg-gray-50 flex justify-between items-center border-b-2 border-gray-200 border-dotted"
              >
                <h2 className="text-2xl font-medium">Palomix</h2>
                <span className="transform transition-transform duration-200">
                  {openArtist.includes('palomix') ? '−' : '+'}
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${openArtist.includes('palomix') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="divide-y divide-gray-200 divide-dashed">
                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Background</h3>
                    <div className="space-y-4">
                      <div
                        className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedMedia('/images/artists/palomix/palomix_wakes_up.png')}
                      >
                        <Image
                          src="/images/artists/palomix/palomix_wakes_up.png"
                          alt="Palomix"
                          fill
                          className="object-cover transition-all duration-1000 group-hover:animate-[glitch_2s_ease-in-out_infinite] animate-[organic-pulse_6s_ease-in-out_infinite]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div
                          className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-70"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                            animation: 'organic-pulse 6s ease-in-out infinite'
                          }}
                        />
                      </div>
                      <p className="text-gray-600 font-light">
                        PALOMIX is a ceramicist and creative technologist focusing on 3D renderings,
                        3D printing, casting and digital preservation of artifacts. With a background in
                        molecular biology, applied linguistics, psychology and neuroscience. She studied
                        ceramics in California, Barcelona and Hiroshima, combining traditional craft with
                        modern technology.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Artistic Discipline</h3>
                    <p className="text-gray-600 font-light">
                      Ceramics, Creative Technology, 3D Rendering, 3D Printing
                    </p>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Personal Statement</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600 font-light">
                        As PALOMIX, my artistic practice combines traditional ceramics with creative technology,
                        inspired by the wisdom of older generations and the curiosity of children.
                      </p>
                      <p className="text-gray-600 font-light">
                        I explore spirituality, ancestral knowledge, telepathy, and emotional connection,
                        considering how thoughts and emotions can be visualized through creative expression.
                        My curiosity also extends to non-human animals and their unique forms of communication.
                        Through 3D renderings and modern techniques like 3D printing, I bridge traditional craft
                        with contemporary digital practices.
                      </p>
                      <p className="text-gray-600 font-light">
                        My goal is to create work that sparks joy and wonder while honoring ancient wisdom
                        and fostering meaningful connections.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Work Samples</h3>
                    <div className="space-y-4">
                      <a
                        href="https://www.figma.com/board/Y30Y1u3Ud4WTQ5KGrKGvN2/Palomix-work"
                        className="text-blue-600 hover:text-blue-800 underline font-light block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Portfolio Board →
                      </a>
                      <div
                        className="relative aspect-[16/9] w-full overflow-hidden rounded cursor-pointer"
                        onClick={() => setSelectedMedia('/video/tamago.mp4')}
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/video/tamago.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Proposal Accordion */}
            <div className="border-2 border-gray-200 border-dotted">
              <button
                onClick={() => toggleArtist('project')}
                className="w-full p-4 text-left bg-gray-50 flex justify-between items-center border-b-2 border-gray-200 border-dotted"
              >
                <h2 className="text-2xl font-medium">Current Project: Port+all</h2>
                <span className="transform transition-transform duration-200">
                  {openArtist.includes('project') ? '−' : '+'}
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${openArtist.includes('project') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-4 space-y-4">
                  <p className="text-gray-600 font-light">
                    A collaborative residency project at 7artscafe that combines digital archiving,
                    community engagement, and traditional crafts. Through Port+all, we aim to create
                    a living digital archive that preserves and celebrates the cultural ecosystem of 7artscafe.
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-medium">Key Activities</h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-2 font-light">
                      <li>Community interviews and storytelling sessions</li>
                      <li>3D scanning and digital preservation of artifacts</li>
                      <li>Creation of physical artworks through various mediums</li>
                      <li>Development of blockchain-based archive</li>
                      <li>Weekly skill-sharing workshops</li>
                      <li>Final exhibition combining physical and digital elements</li>
                    </ul>
                    <Link
                      href="/lab/portall"
                      className="text-blue-600 hover:text-blue-800 underline block mt-6 font-light"
                    >
                      View Full Project Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>

      {/* Add the modal at the bottom of the component, before closing main */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative w-full h-full md:w-4/5 md:h-4/5 m-4">
            {selectedMedia.endsWith('.mp4') ? (
              <video
                autoPlay
                controls
                className="w-full h-full object-contain"
              >
                <source src={selectedMedia} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={selectedMedia}
                  alt="Selected media"
                  fill
                  className="object-contain animate-[ripple_4s_ease-in-out_infinite]"
                  sizes="80vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none animate-[ripple_4s_ease-in-out_infinite]"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    animationDelay: '0.5s'
                  }}
                />
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function Artists() {
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
                      <p className="text-gray-600 font-light">
                        PALOMIX is a ceramicist and creative technologist focusing on 3D renderings,
                        3D printing, casting and digital preservation of artifacts. With a background in
                        molecular biology, applied linguistics, psychology and neuroscience. She studied
                        ceramics in California, Barcelona and Hiroshima, combining traditional craft with
                        modern technology.
                      </p>
                    </div>
                  </td>
                </tr>

                {/* 1. Artistic Discipline Row */}
                <tr>
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Artistic Discipline</h3>
                    <p className="text-gray-600 font-light">
                      Creative Technology, Illustration, Blockchain Development,
                      Textile Design, Videography, Publication Design
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Artistic Discipline</h3>
                    <p className="text-gray-600 font-light">
                      Ceramics, Creative Technology, 3D Rendering, 3D Printing
                    </p>
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
                        My practice combines traditional ceramics with digital innovation, informed by
                        my background in science and linguistics. I&apos;m interested in how technology can
                        preserve and transform cultural artifacts, creating new dialogues between
                        traditional craft and contemporary digital practices.
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
                <tr>
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Work Samples</h3>
                    <div className="space-y-2">
                      <a
                        href="https://toyfrens.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Toy Frens NFT Community →
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Digital Archives Portfolio →
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <h3 className="font-medium mb-2">Work Samples</h3>
                    <div className="space-y-2">
                      <a
                        href="https://cosmicorder.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Portfolio →
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 underline"
                      >
                        Ceramics Collection →
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-8 font-mono">
            {/* Bambi Card */}
            <div className="rounded-none overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-50 p-4 border-b-2 border-gray-200 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 to-white">
                <h2 className="text-2xl font-medium">Bambi</h2>
              </div>

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
                  <p className="text-gray-600 font-light">
                    As a digital nomad and creative technologist, I explore the intersection of
                    traditional crafts and emerging technologies. My work focuses on creating
                    participatory experiences that bridge physical and digital realms, questioning
                    how we share and preserve cultural narratives in the age of blockchain and
                    decentralized networks.
                  </p>
                </div>

                <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium">Work Samples</h3>
                  <div className="space-y-2">
                    <a href="https://toyfrens.xyz" className="text-blue-600 hover:text-blue-800 underline font-light block">
                      Toy Frens NFT Community →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Palomix Card */}
            <div className="rounded-none overflow-hidden border border-gray-200 border-dashed">
              <div className="bg-gray-50 p-4 border-b border-gray-200 border-dashed bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-gray-50 to-white">
                <h2 className="text-2xl font-medium">Palomix</h2>
              </div>

              <div className="divide-y divide-gray-200 divide-dashed">
                <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium">Background</h3>
                  <p className="text-gray-600 font-light">
                    PALOMIX is a ceramicist and creative technologist focusing on 3D renderings,
                    3D printing, casting and digital preservation of artifacts. With a background in
                    molecular biology, applied linguistics, psychology and neuroscience. She studied
                    ceramics in California, Barcelona and Hiroshima, combining traditional craft with
                    modern technology.
                  </p>
                </div>

                <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium">Artistic Discipline</h3>
                  <p className="text-gray-600 font-light">
                    Ceramics, Creative Technology, 3D Rendering, 3D Printing
                  </p>
                </div>

                <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium">Personal Statement</h3>
                  <p className="text-gray-600 font-light">
                    My practice combines traditional ceramics with digital innovation, informed by
                    my background in science and linguistics. I&apos;m interested in how technology can
                    preserve and transform cultural artifacts, creating new dialogues between
                    traditional craft and contemporary digital practices.
                  </p>
                </div>

                <div className="p-4 space-y-2 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium">Work Samples</h3>
                  <div className="space-y-2">
                    <a href="https://cosmicorder.net/" className="text-purple-600 hover:text-purple-800 underline font-light block">
                      Portfolio →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Proposal Card */}
            <div className="rounded-none overflow-hidden border-2 border-gray-200 border-dotted">
              <div className="p-4 bg-gray-50 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-50">
                <h2 className="text-2xl font-medium">Project Proposal: Port+all</h2>
                <p className="text-gray-600 font-light mt-2">
                  A collaborative residency project at 7artscafe that combines digital archiving,
                  community engagement, and traditional crafts. Through Port+all, we aim to create
                  a living digital archive that preserves and celebrates the cultural ecosystem of 7artscafe.
                </p>
                <div className="mt-4 space-y-4">
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

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

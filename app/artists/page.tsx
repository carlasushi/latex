'use client';

import Navigation from '../components/Navigation';

export default function Artists() {
  return (
    <main className="relative">
      <Navigation />

      {/* Artists Content */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">Artists</h1>

          {/* Bambi + Palomix Section */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">Bambi + Palomix</h2>
            <div className="font-mono prose font-light space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Bambi</h3>
                  <p className="text-gray-600">
                    A creative technologist and illustrator based between Sydney and Berlin, with an
                    interdisciplinary practice that spans blockchain experimentation, textile design,
                    videography, and publication design. She founded <em>Toy Frens</em>, a blockchain-native
                    NFT community on Ethereum, exploring the intersection of digital and physical realms
                    through photography. Her work engages with the archive as a living, participatory
                    experience, questioning how information is shared and reimagined. As a digital nomad,
                    Bambi shapes creative dialogues between technology, memory, and collective agency.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Palomix</h3>
                  <p className="text-gray-600">
                    A ceramicist and creative technologist focusing on 3D renderings, 3D printing,
                    casting and digital preservation of artifacts.
                  </p>
                  <p> Palomix has a background in molecular biology, applied linguistics, psychology and neuroscience.</p>
                  <p> She studied ceramics in California, Barcelona and Hiroshima.</p>
                  <a href="https://cosmicorder.net/" target="_blank" rel="noopener noreferrer">
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

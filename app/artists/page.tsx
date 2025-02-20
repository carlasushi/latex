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

          <div className="font-mono prose max-w-none">
            {/* Bambi Section */}
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Bambi</h2>
              <div className="font-mono py-3 prose font-light space-y-8">
                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Artistic Discipline</h3>
                    <p className="text-gray-600">
                      Creative Technology, Illustration, Blockchain Development, Textile Design, Videography, Publication Design
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personal Statement</h3>
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
                </div>

                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Work Samples</h3>
                    <p className="text-gray-600">
                      <a href="https://toyfrens.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        Toy Frens NFT Community →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Palomix Section */}
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Palomix</h2>
              <div className="font-mono py-3 prose font-light space-y-8">
                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Artistic Discipline</h3>
                    <p className="text-gray-600">
                      Ceramics, Creative Technology, 3D Rendering, 3D Printing, Digital Preservation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personal Statement</h3>
                    <p className="text-gray-600">
                      A ceramicist and creative technologist focusing on 3D renderings, 3D printing,
                      casting and digital preservation of artifacts. With a background in molecular biology,
                      applied linguistics, psychology and neuroscience, her interdisciplinary approach
                      brings unique perspectives to digital art preservation. She studied ceramics in
                      California, Barcelona and Hiroshima, combining traditional craft with modern technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Work Samples</h3>
                    <p>
                      <a
                        href="https://cosmicorder.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        View Portfolio →
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://cosmicorder.net/animal-spirits/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Animal Spirits Project →
                      </a>
                    </p>
                  </div>
                </div>
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

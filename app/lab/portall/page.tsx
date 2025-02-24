'use client';

import Navigation from '../../components/Navigation';
import { projects } from '../../data/projects';
import ImageGallery from '../../components/ImageGallery';
import FloatingTitle from '../../components/FloatingTitle';

export default function Portall() {
  const project = projects.find(p => p.slug === 'portall');

  if (!project) return null;

  return (
    <main className="relative">
      <Navigation />
      <FloatingTitle pageName="LAB / PORT+ALL" />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">{project.title}</h1>

          {/* Hero Video */}
          <div className="relative h-[400px] w-full overflow-hidden mb-12">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/portall/videos/portall_video_1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* About the Project */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">About the Project</h2>
            <div className="font-mono py-3 prose font-light space-y-4">
              <p>Port+all = An Open Archive for community stories.</p>
              <p>Portal = a door, a gate.</p>
              <p>All = together, a collective, from the German &ldquo;allez.&rdquo;</p>
              <p className="mt-8">Port+all is a proposal by LatexLAB to integrate local communities into a global arts network using distributed technology and archival innovation. Just as ports historically connected distant cultures, cafés serve as modern meeting points for exchanging ideas, skills, and stories. Port+all envisions local communities as a gateway between physical and digital realms, preserving its creative ecosystem for future generations.</p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">Inspiration Gallery</h2>
            <ImageGallery
              images={[1, 2]}
              basePath="/images/portall/images/portall"
              extension="jpeg"
            />
          </section>

          {/* Port+all Project Overview */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">Port+all Project Overview</h2>
            <div className="font-mono py-3 prose font-light space-y-8">
              {/* Project Overview with Interview Gallery */}
              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-blue-600 opacity-50">01</span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Interviews</h3>
                  <p className="text-gray-600">
                    The duo conducts 5-10 interviews with community personalities (people, pets, or both) before arriving at the location.
                  </p>
                </div>
              </div>

              {/* 3D Printing Section with Image */}
              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-blue-600 opacity-50">03</span>
                <div>
                  <h3 className="text-lg font-medium mb-2">3D Printing</h3>
                  <p className="text-gray-600">
                    Selected items are 3D printed.
                  </p>
                  <p>
                    <a
                      href="https://www.perplexity.ai/search/places-to-3d-print-in-yokohama-qtyAmqNjQAecKtRk.DqPfw#0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      Where to 3D print in the area →
                    </a>
                  </p>
                </div>
              </div>

              {/* Digital Archive Section with Image */}
              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-blue-600 opacity-50">05</span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Digital Archive</h3>
                  <p className="text-gray-600">
                    3D scans and descriptions are stored in a publicly accessible digital archive.
                  </p>
                  <p>
                    <a
                      href="https://opensea.io/collection/uae-nft-x-alexis-christodoulou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      View example scans on OpenSea →
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-blue-600 opacity-50">06</span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Exhibition</h3>
                  <p className="text-gray-600">
                    The final week features an exhibition, showcasing 3D printed items in Gacha Gacha balls and the digital archive.
                  </p>
                  <p>
                    Other items are displayed in the cafe as small paintings, ceramics, or textiles.
                  </p>
                  <p>
                    <a
                      href="https://www.aliexpress.us/item/3256805797995803.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      Gacha Gacha can be purchased online and shipped to the location →
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-blue-600 opacity-50">07</span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Fundraising</h3>
                  <p className="text-gray-600">
                    Profits from the Gacha Gacha are donated to future artists-in-residence for creating new artworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Overview Video */}
            <div className="relative h-[400px] w-full overflow-hidden mt-8">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/portall/videos/portall_video_2.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* Vision Box */}
          <div className="my-8 font-mono border border-gray-200 shadow-lg p-8 rounded-lg bg-white/50 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-center mb-6">PORT+ALL VISION</h3>
            <p className="text-gray-700 leading-relaxed">
              Discovering Local Communities Through Encapsulated Stories. This exhibition offers a unique window into the creative fabric of a local community. Through a series of Gacha Gacha capsules, visitors can explore curated snapshots of the individuals, pets, and narratives that shape this vibrant community. Scanning the QR code affixed to each capsule provides a direct portal for community bonding, inviting visitors to forge connections with the people and stories that define identities. In parallel with the physical exhibition, PORT+ALL ensures the enduring accessibility of these stories by employing blockchain technology for permanent archival and celebration of a given local community&apos;s legacy.
            </p>
          </div>

          {/* Workshop Section */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">Residency Community Workshops</h2>
            <div className="font-mono py-3 prose font-light space-y-8">
              <div className="flex items-start gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Weekly Workshops</h3>
                  <p className="text-gray-600">
                    Every week, LatexLAB hosts <strong>open roundtable workshops</strong>, where locals can observe or actively participate in the <strong>crafting of their stories</strong>, to encourage building knowledge of craft in an inclusive and collaborative archival process.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Workshop 1</h3>
                  <p className="text-gray-600">
                    How to turn create a photograph into a 3D object
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Workshop 2</h3>
                  <p className="text-gray-600">
                    Creative surface decoration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Workshop 3</h3>
                  <p className="text-gray-600">
                    Uploading media into the blockchain, accessing the Port+all media online
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* impact section */}
          <section className="my-12">
            <h2 className="text-2xl mb-4 font-mono">Impact</h2>
            <div className="font-mono py-3 prose font-light space-y-8">
              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Cultural Exchange</h3>
                  <p className="text-gray-600">
                    Facilitates a unique interaction between international artists and the local community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Digital Preservation</h3>
                  <p className="text-gray-600">
                    Creates a lasting digital archive of local stories and significant objects, preserving cultural heritage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Artistic Innovation</h3>
                  <p className="text-gray-600">
                    Combines traditional storytelling with cutting-edge 3D scanning and printing technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Community Engagement</h3>
                  <p className="text-gray-600">
                    Encourages local participation and creates a sense of shared ownership in the art project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Economic Support</h3>
                  <p className="text-gray-600">
                    Generates funds for future artists-in-residence, fostering ongoing creativity and cultural exchange.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="w-2 h-2 mt-3 rounded-full border border-blue-600 opacity-50"></span>
                <div>
                  <h3 className="text-lg font-medium mb-2">Educational Value</h3>
                  <p className="text-gray-600">
                    Provides learning opportunities in digital archiving, 3D technologies, and collaborative art practices.
                  </p>
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

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
      {/* Project Content */}
      <div className="container mx-auto px-4 pt-32">
        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8">{project.title}</h1>
        </div>

        {/* Project Hero Video - moved outside max-width container */}
        <div className="hero-section mb-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="/video/port-all.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Project Description - back inside max-width container */}
        <div className="max-w-4xl mx-auto">
          <div className="font-mono prose max-w-none">
            <p className="text-xl mb-8">{project.description}</p>
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">About the Project</h2>
              <div className="font-mono py-3 prose font-light space-y-4">
                <p>Port+all = An Open Archive for 7artscafe.</p>
                <p>Portal = a door, a gate.</p>
                <p>All = together, a collective, from the German &ldquo;allez.&rdquo;</p>
                <p className="mt-8">Port+all is a proposal by LatexLAB to integrate 7artscafe into a global arts network using distributed technology and archival innovation. Just as ports historically connected distant cultures, cafés serve as modern meeting points for exchanging ideas, skills, and stories. Port+all envisions 7artscafe as a gateway between physical and digital realms, preserving its creative ecosystem for future generations.</p>
              </div>
            </section>

            {/* Gallery Section */}
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Inspiration Gallery</h2>
              <ImageGallery
                images={[1, 2]}
                basePath="/images/portall/portall"
                extension="jpeg"
              />
            </section>

            {/* project overview section */}
            <section className="my-12">
              <h2 className="text-2xl mb-4 font-mono">Port+all Project Overview</h2>
              <div className="font-mono py-3 prose font-light space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-light text-blue-600 opacity-50">01</span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Interviews</h3>
                    <p className="text-gray-600">
                      The duo conducts 5-10 interviews with 7artscafe personalities (people, pets, or both) before arriving in Japan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl font-light text-blue-600 opacity-50">02</span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Artifact Collection</h3>
                    <p className="text-gray-600">
                      Upon arrival to Japan significant items from these interviews are photographed and 3D scanned.
                      Note that some items are not physical, but rather a concept or idea. These can be made into a rendering before arriving to Japan.
                    </p>
                    <p>
                      <a
                        href="https://poly.cam/explore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                      >
                        View example scans on Polycam →
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://cosmicorder.net/animal-spirits/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                      >
                        View previous 3D scans by Palomix →
                      </a>
                    </p>
                  </div>
                </div>

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
                        Where to 3D print in Yokohama →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl font-light text-blue-600 opacity-50">04</span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Documentation</h3>
                    <p className="text-gray-600">
                      Each 3D printed item is accompanied by a short description of its history and associated personality.
                    </p>
                    <p>
                      Depending on the opportunity, items can be then casted into ceramics, a  small painting or transformed into a pattern to be used on textiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl font-light text-blue-600 opacity-50">05</span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Digital Archive</h3>
                    <p className="text-gray-600">
                      3D scans and descriptions are stored in a publicly accessible digital archive.
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
                      The final week features an exhibition at 7artscafe, showcasing 3D printed items in Gacha Gacha balls and the digital archive.
                    </p>
                    <p>
                      Other items are displayed in the cafe as small paintings, ceramics, or textiles.
                    </p>
                    <p>
                      <a
                        href="https://www.aliexpress.us/item/3256805797995803.html?src=google&pdp_npi=4%40dis%21USD%2191.20%2191.20%21%21%21%21%21%40%2112000035181992702%21ppc%21%21%21&src=google&albch=shopping&acnt=708-803-3821&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&gclsrc=aw.ds&albagn=888888&ds_e_adid=&ds_e_matchtype=&ds_e_device=c&ds_e_network=x&ds_e_product_group_id=&ds_e_product_id=en3256805797995803&ds_e_product_merchant_id=5520179106&ds_e_product_country=ZZ&ds_e_product_language=en&ds_e_product_channel=online&ds_e_product_store_id=&ds_url_v=2&albcp=19108228023&albag=&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=CjwKCAiAn9a9BhBtEiwAbKg6flAWZ5tIgnQk573FGY1WvrpPWj6DyGFOiZOcfnSQSVCDB1RT_ivUXRoCrP4QAvD_BwE&gatewayAdapt=glo2usa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-600 hover:text-blue-800 underline"
                      >
                        Gacha Gacha can be purchased online and shipped to Japan →
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
            </section>

            {/* Vision Box */}
            <div className="my-8 font-mono border border-gray-200 shadow-lg p-8 rounded-lg bg-white/50 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-center mb-6">PORT+ALL VISION</h3>
              <p className="text-gray-700 leading-relaxed">
                Discovering the 7artscafe Community Through Encapsulated Stories. This exhibition offers a unique window into the creative fabric of 7artscafe. Through a series of Gacha Gacha capsules, visitors can explore curated snapshots of the individuals, pets, and narratives that shape this vibrant community. Scanning the QR code affixed to each capsule provides a direct portal for community bonding, inviting visitors to forge connections with the people and stories that define 7artscafe. In parallel with the physical exhibition, PORT+ALL ensures the enduring accessibility of these stories by employing blockchain technology for permanent archival and celebration of 7artscafe&apos;s legacy.
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
                      Facilitates a unique interaction between international artists and the local community of 7artscafe.
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
      </div>
      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </main>
  );
}

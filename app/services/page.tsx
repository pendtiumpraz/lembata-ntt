export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          Skill Sets to Offer
        </h1>
        <div className="border-b-2 border-gray-300 w-32 mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Cutting-edge marine research and environmental monitoring services combining field expertise with advanced technology.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-16">
          
          {/* Service 1: Biodiversity Sampling & Mapping */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  1) Biodiversity Sampling & Mapping
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The skill of collecting biological data from the ocean—such as species observations, 
                  water samples, and habitat characteristics—and translating it into spatial maps.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  It includes using tools like transects, underwater surveys, drones, and sonar to 
                  document what lives where, how populations change over time, and which areas are 
                  ecologically sensitive or under threat.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Details</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  The systematic acquisition of biological and ecological data from marine environments 
                  using standardized field methodologies.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Techniques include belt and line transects, quadrats, ROV/AUV-based video surveys, 
                  benthic grabs, and hydroacoustic profiling to quantify species presence, abundance, 
                  and community structure.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Collected data are georeferenced and integrated into GIS-based spatial models, 
                  enabling analysis of species distribution patterns, habitat suitability, alpha/beta 
                  diversity indices, and temporal shifts driven by environmental variables such as SST, 
                  salinity, chlorophyll, and substrate composition.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2: Digital Twin */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  2) Creation of a Digital Twin
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Building a virtual, data-driven replica of a marine ecosystem that updates as new 
                  information comes in.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A digital twin can simulate ocean conditions, species movement, human impact (e.g., 
                  fishing, pollution), and conservation scenarios—allowing stakeholders to test decisions 
                  before acting in the real environment.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Details</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  The development of a dynamic, computationally coupled virtual model of a marine 
                  ecosystem that assimilates real-time and historical observational datasets.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  A digital twin integrates physical oceanographic models (e.g., ROMS, HYCOM), 
                  biogeochemical cycles, habitat layers, and biological population models, with continuous 
                  updates from sensors, remote sensing, and field surveys.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  It enables predictive simulations of ecosystem responses to perturbations—such as fishing 
                  pressure, nutrient loading, climate-driven variability, or habitat restoration—supporting 
                  scenario testing, forecasting, and adaptive management based on feedback loops between the 
                  model and in situ measurements.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3: eDNA Analysis */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  3) eDNA (Environmental DNA) Analysis
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A method of detecting species by analyzing tiny genetic traces they leave behind in 
                  seawater—such as skin cells, waste, or mucus.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  It enables non-invasive identification of marine species, including rare or hard-to-observe 
                  organisms. It helps track biodiversity changes quickly across large areas without the need 
                  for traditional capture or visual surveys.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Details</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  A molecular approach that detects species by extracting and sequencing extracellular and 
                  cellular DNA fragments shed into the water column.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Workflows involve water filtration, DNA extraction, and PCR-based amplification (qPCR, 
                  digital droplet PCR) or metabarcoding using universal markers (e.g., COI, 12S, 16S rRNA), 
                  followed by high-throughput sequencing and bioinformatic taxonomic assignment against 
                  curated reference databases.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  eDNA enables high-sensitivity detection of cryptic, rare, or low-density taxa, supports 
                  community composition profiling, and can quantify relative abundance signals—while 
                  minimizing spatial disturbance and bypassing traditional capture-based sampling constraints.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to explore marine biodiversity?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our services can support your marine research and conservation projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

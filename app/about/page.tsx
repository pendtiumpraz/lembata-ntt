export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          About Lembata Ocean Research
        </h1>
        <div className="border-b-2 border-gray-300 w-32 mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Advanced marine biodiversity research and ecosystem monitoring in the Coral Triangle.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To advance marine conservation through cutting-edge research methodologies, combining traditional 
              field surveys with innovative technologies like environmental DNA analysis and digital twin ecosystems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Located in Lembata, East Nusa Tenggara, Indonesia—in the heart of the Coral Triangle—we work to 
              document, understand, and protect one of Earth&apos;s most biodiverse marine regions through 
              systematic data collection and spatial analysis.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Why Lembata?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lembata Island sits within the Coral Triangle, home to 76% of the world&apos;s coral species 
              and over 3,000 fish species—the highest marine biodiversity on the planet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The waters surrounding Lembata remain relatively pristine and understudied, offering unique 
              opportunities for baseline biodiversity assessment, long-term monitoring, and testing of 
              conservation strategies before implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Field-Based Research</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Systematic underwater surveys using standardized transects, ROV/AUV deployments, 
                and hydroacoustic profiling to quantify species presence, abundance, and community structure.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Molecular Methods</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Environmental DNA (eDNA) metabarcoding for non-invasive species detection, enabling 
                high-sensitivity identification of cryptic and rare taxa without physical capture.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Computational Modeling</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Digital twin ecosystems that assimilate real-time data to simulate ocean conditions, 
                species dynamics, and conservation scenarios for predictive management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Technology & Methods</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Spatial Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              GIS-based mapping integrating georeferenced biological data with environmental variables 
              (SST, salinity, chlorophyll, substrate) to analyze species distribution patterns and 
              habitat suitability.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Molecular Identification</h3>
            <p className="text-gray-700 leading-relaxed">
              PCR-based amplification (qPCR, ddPCR) and metabarcoding using universal markers (COI, 12S, 
              16S rRNA) with high-throughput sequencing for taxonomic assignment.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Ecosystem Modeling</h3>
            <p className="text-gray-700 leading-relaxed">
              Integration of physical oceanographic models (ROMS, HYCOM) with biogeochemical cycles and 
              population dynamics for scenario testing and adaptive management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

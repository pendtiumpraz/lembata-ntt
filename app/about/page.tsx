import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/lembata-sunset-mountain.jpeg"
            alt="About Econexus Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            About Us
          </h1>
          <div className="border-b-2 border-cyan-400 w-24 mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Making biodiversity count in financial decisions. Bridging science and finance to protect what matters most.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Mission</h2>
              <div className="border-b-2 border-cyan-500 w-24 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Econexus Foundation, we believe that protecting nature starts with understanding its true value. 
                Our mission is to turn biodiversity data into actionable insights that drive real-world conservation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From lush forests and seagrass meadows to coral reefs and hidden biodiversity hotspots, 
                we work with NGOs, corporations, and financial institutions to unlock the capital needed 
                to protect our planet&apos;s most vital ecosystems.
              </p>
              <p className="text-xl font-medium text-gray-900 italic border-l-4 border-cyan-500 pl-4">
                &ldquo;Because when nature is valued, it gets protected. When it&apos;s measured, it gets funded.&rdquo;
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/coral-colorful-reef.jpeg"
                alt="Colorful coral reef"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Lembata */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Why Lembata?</h2>
              <div className="border-b-2 border-cyan-500 w-24 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lembata Island sits within the Coral Triangle—home to <strong>76% of the world&apos;s coral species</strong> and 
                over <strong>3,000 fish species</strong>—the highest marine biodiversity on the planet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The waters surrounding Lembata remain relatively pristine and understudied, offering unique 
                opportunities for baseline biodiversity assessment and testing of conservation strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Starting from Lembata, we&apos;re building a global network of research sites to document and 
                protect ecosystems around the world.
              </p>
            </div>
            <div className="md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/lembata-sunset-boat.jpeg"
                alt="Lembata sunset with boat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Understory Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/img/coral-purple-acropora.jpeg"
                alt="Purple Acropora coral"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                The Understory
              </h2>
              <div className="border-b-2 border-cyan-400 w-24 mb-8"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Biodiversity can sound complicated. Science is full of big words—MSA, Functional Diversity, 
                Ecosystem Resilience.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Econexus, we believe you don&apos;t need a biology degree to care about the planet. 
                That&apos;s why we created <strong className="text-cyan-400">The Understory</strong>—a space 
                where complex ideas grow into simple, powerful stories.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We translate scientific data into metrics that matter: biodiversity scores, Mean Species 
                Abundance, carbon equivalence, ecosystem service value—making it accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">Our Approach</h2>
          <div className="border-b-2 border-cyan-500 w-24 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Field-Based Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Systematic underwater surveys using standardized transects, ROV/AUV deployments, 
                and hydroacoustic profiling to quantify species presence and community structure.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Molecular Methods</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental DNA (eDNA) metabarcoding for non-invasive species detection, enabling 
                high-sensitivity identification of cryptic and rare taxa.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computational Modeling</h3>
              <p className="text-gray-600 leading-relaxed">
                Digital twin ecosystems that assimilate real-time data to simulate ocean conditions, 
                species dynamics, and conservation scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">Who We Help</h2>
          <div className="border-b-2 border-cyan-500 w-24 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/img/conservation-coral-planting-1.jpeg"
                  alt="NGOs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">NGOs</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Co-creating community research programs and providing scientific data to support 
                  grassroots-led conservation planning.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/img/underwater-diverse-reef.jpeg"
                  alt="Corporations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">Corporations</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Strengthening ESG and nature-positive strategies with credible biodiversity metrics 
                  and impact assessments.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/img/coral-blue-colonies.jpeg"
                  alt="Financial Institutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">Financial Institutions</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Setting KPIs for sustainability-linked bonds with measurable biodiversity outcomes 
                  and verified impact reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Join Us in Protecting Our Planet
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Whether you&apos;re an NGO, corporation, or financial institution, we can help you make 
            nature count where it matters most.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}

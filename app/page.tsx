"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ServiceModal from "@/components/ServiceModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const slides = [
    {
      image: "/img/coral-colorful-reef.jpeg",
      caption: "Vibrant coral reefs in Lembata waters, East Nusa Tenggara - home to diverse marine ecosystems in the Coral Triangle."
    },
    {
      image: "/img/coral-acropora-fish-school.jpeg",
      caption: "Marine biodiversity sampling in Lembata - documenting species presence and abundance using standardized transect methodologies."
    },
    {
      image: "/img/conservation-coral-planting-1.jpeg",
      caption: "Coral restoration and conservation efforts - planting new coral colonies to rebuild reef ecosystems."
    },
    {
      image: "/img/underwater-coral-panorama.jpeg",
      caption: "Underwater surveys in Lembata document habitat characteristics and coral health across spatial gradients."
    },
    {
      image: "/img/fish-clownfish-anemone.jpeg",
      caption: "Clownfish in their host anemone - symbiotic relationships that define healthy reef ecosystems."
    },
    {
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80",
      caption: "Sea turtles are among the megafauna species monitored in marine protected areas worldwide."
    },
    {
      image: "/img/coral-purple-acropora.jpeg",
      caption: "Purple Acropora corals - keystone species supporting biodiversity in tropical reef systems."
    },
    {
      image: "/img/fish-chromis-school.jpeg",
      caption: "Diverse fish communities thrive in healthy reef systems, tracked through visual surveys and eDNA sampling."
    },
    {
      image: "/img/lembata-sunset-boat.jpeg",
      caption: "Traditional fishing boat at sunset - where marine research meets local community engagement."
    },
    {
      image: "/img/underwater-diverse-reef.jpeg",
      caption: "Healthy coral formations provide critical habitat for marine biodiversity."
    },
    {
      image: "/img/lembata-sunset-mountain.jpeg",
      caption: "Sunset over Lembata Island - the intersection of marine research and natural beauty in East Nusa Tenggara."
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden" suppressHydrationWarning>
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img/underwater-coral-panorama.jpeg)',
            transform: mounted ? `translateY(${scrollY * 0.5}px)` : 'translateY(0)',
            height: '120%',
          }}
          suppressHydrationWarning
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Making Biodiversity<br />
              <span className="text-cyan-400">Count</span> in Financial<br />
              Decisions
            </h1>
            <div className="border-b-2 border-cyan-400 w-24 md:w-32 mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Advanced research services for documenting and understanding ecosystems around the Globe, starting from Lembata, East Nusa Tenggara.
            </p>
            <p className="text-base text-white/70 mb-8 max-w-xl">
              Because when nature is valued, it gets protected. When it&apos;s measured, it gets funded.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#services"
                className="inline-block text-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition shadow-lg hover:shadow-xl"
              >
                Our Services
              </a>
              <a
                href="#explore"
                className="inline-block text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold transition"
              >
                Explore Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                What We Do
              </h2>
              <div className="border-b-2 border-cyan-500 w-24 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From lush forests and seagrass meadows to coral reefs and hidden biodiversity hotspots, 
                we turn biodiversity data into actionable insights for NGOs, corporations, and financial institutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unlocking the capital needed to protect our planet&apos;s most vital ecosystems.
              </p>
              <p className="text-xl font-medium text-gray-900 italic">
                Econexus turns biodiversity into measurable, investable insight. Bridging science and finance to protect what matters most.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/coral-blue-colonies.jpeg"
                alt="Blue coral colonies"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">How It Works</h2>
          <div className="border-b-2 border-cyan-400 w-24 mb-16 mx-auto"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Measure */}
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/img/conservation-reef-restoration-1.jpeg"
                  alt="Biodiversity measurement"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-cyan-400 text-5xl font-bold">01</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Measure</h3>
              <p className="text-gray-300 leading-relaxed">
                From forest to seagrass beds, we assess species richness and carbon lock-in across 
                key habitats using non-invasive eDNA methods.
              </p>
            </div>

            {/* Translate */}
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/img/coral-pink-reef-chromis.jpeg"
                  alt="Data translation"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-cyan-400 text-5xl font-bold">02</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Translate</h3>
              <p className="text-gray-300 leading-relaxed">
                Using bioinformatics and global standards, we turn ecological data into metrics that matter: 
                biodiversity scores, Mean Species Abundance, carbon equivalence, ecosystem service value.
              </p>
            </div>

            {/* Mobilize */}
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/img/conservation-coral-planting-1.jpeg"
                  alt="Conservation mobilization"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-cyan-400 text-5xl font-bold">03</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Mobilize</h3>
              <p className="text-gray-300 leading-relaxed">
                We help you apply these insights for bond KPIs, ESG impact reports, 
                or grassroots-led conservation planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <div className="border-b-2 border-cyan-500 w-24 mb-16 mx-auto"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Biodiversity Sampling */}
            <div 
              onClick={() => setActiveModal('biodiversity')}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="relative h-56">
                <Image
                  src="/img/underwater-seagrass-bed.jpeg"
                  alt="Biodiversity Sampling"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">🗺️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Biodiversity Sampling & Mapping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Collecting biological data from ecosystems and translating it into spatial maps 
                  using transects, underwater surveys, drones, and sonar.
                </p>
                <span className="text-cyan-600 font-medium text-sm group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>

            {/* Service 2 - Digital Twin */}
            <div 
              onClick={() => setActiveModal('digitaltwin')}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="relative h-56">
                <Image
                  src="/img/coral-reef-with-fish-2.jpeg"
                  alt="Digital Twin Coral Reef"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">🌐</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Creation of a Digital Twin
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Building virtual, data-driven replicas of marine ecosystems that update in real-time 
                  to simulate conditions and conservation scenarios.
                </p>
                <span className="text-cyan-600 font-medium text-sm group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>

            {/* Service 3 - eDNA */}
            <div 
              onClick={() => setActiveModal('edna')}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="relative h-56">
                <Image
                  src="/img/coral-plate-coral.jpeg"
                  alt="eDNA Analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">🧬</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  eDNA Analysis
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Detecting species by analyzing genetic traces in water, enabling non-invasive 
                  identification of marine life including rare organisms.
                </p>
                <span className="text-cyan-600 font-medium text-sm group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ServiceModal
        isOpen={activeModal === 'biodiversity'}
        onClose={() => setActiveModal(null)}
        title="Biodiversity Sampling & Mapping"
        icon="🗺️"
        image="/img/underwater-seagrass-bed.jpeg"
        generalDescription={[
          "The skill of collecting biological data from the ocean—such as species observations, water samples, and habitat characteristics—and translating it into spatial maps.",
          "It includes using tools like transects, underwater surveys, drones, and sonar to document what lives where, how populations change over time, and which areas are ecologically sensitive or under threat."
        ]}
        technicalTitle="Technical Methodology"
        technicalDescription={[
          "The systematic acquisition of biological and ecological data from marine environments using standardized field methodologies.",
          "Techniques include belt and line transects, quadrats, ROV/AUV-based video surveys, benthic grabs, and hydroacoustic profiling to quantify species presence, abundance, and community structure.",
          "Collected data are georeferenced and integrated into GIS-based spatial models, enabling analysis of species distribution patterns, habitat suitability, alpha/beta diversity indices, and temporal shifts driven by environmental variables such as SST, salinity, chlorophyll, and substrate composition."
        ]}
      />

      <ServiceModal
        isOpen={activeModal === 'digitaltwin'}
        onClose={() => setActiveModal(null)}
        title="Creation of a Digital Twin"
        icon="🌐"
        image="/img/coral-reef-with-fish-2.jpeg"
        generalDescription={[
          "Building a virtual, data-driven replica of a marine ecosystem that updates as new information comes in.",
          "A digital twin can simulate ocean conditions, species movement, human impact (e.g., fishing, pollution), and conservation scenarios—allowing stakeholders to test decisions before acting in the real environment."
        ]}
        technicalTitle="Technical Implementation"
        technicalDescription={[
          "The development of a dynamic, computationally coupled virtual model of a marine ecosystem that assimilates real-time and historical observational datasets.",
          "A digital twin integrates physical oceanographic models (e.g., ROMS, HYCOM), biogeochemical cycles, habitat layers, and biological population models, with continuous updates from sensors, remote sensing, and field surveys.",
          "It enables predictive simulations of ecosystem responses to perturbations—such as fishing pressure, nutrient loading, climate-driven variability, or habitat restoration—supporting scenario testing, forecasting, and adaptive management based on feedback loops between the model and in situ measurements."
        ]}
      />

      <ServiceModal
        isOpen={activeModal === 'edna'}
        onClose={() => setActiveModal(null)}
        title="eDNA (Environmental DNA) Analysis"
        icon="🧬"
        image="/img/coral-plate-coral.jpeg"
        generalDescription={[
          "A method of detecting species by analyzing tiny genetic traces they leave behind in seawater—such as skin cells, waste, or mucus.",
          "It enables non-invasive identification of marine species, including rare or hard-to-observe organisms. It helps track biodiversity changes quickly across large areas without the need for traditional capture or visual surveys."
        ]}
        technicalTitle="Technical Workflow"
        technicalDescription={[
          "A molecular approach that detects species by extracting and sequencing extracellular and cellular DNA fragments shed into the water column.",
          "Workflows involve water filtration, DNA extraction, and PCR-based amplification (qPCR, digital droplet PCR) or metabarcoding using universal markers (e.g., COI, 12S, 16S rRNA), followed by high-throughput sequencing and bioinformatic taxonomic assignment against curated reference databases.",
          "eDNA enables high-sensitivity detection of cryptic, rare, or low-density taxa, supports community composition profiling, and can quantify relative abundance signals—while minimizing spatial disturbance and bypassing traditional capture-based sampling constraints."
        ]}
      />

      {/* We Help You Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">We Help You</h2>
                <p className="text-lg leading-relaxed mb-6 text-white/90">
                  Measure biodiversity and carbon lock-in across forests, reefs, and seagrass meadows — 
                  turning nature into data that drives action.
                </p>
                <p className="text-base leading-relaxed text-white/80 mb-8">
                  Whether you&apos;re an NGO co-creating community research, a company strengthening ESG 
                  and nature-positive strategies, or a financial institution setting KPIs for 
                  sustainability-linked bonds, Econexus gives you the insight to make nature count 
                  where it matters most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/services"
                    className="inline-block text-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Explore Services
                  </a>
                  <a
                    href="/contact"
                    className="inline-block text-center border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Say Hello!
                  </a>
                </div>
              </div>
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/img/coral-acropora-butterflyfish.jpeg"
                  alt="Marine ecosystem"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View from Lembata - Photo Grid */}
      <section id="explore" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-gray-900 mb-4 text-center">View from Lembata</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Marine biodiversity in Lembata waters, East Nusa Tenggara - our first research site in the Coral Triangle
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/coral-colorful-reef.jpeg"
              alt="Colorful coral reef in Lembata"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/coral-acropora-fish-school.jpeg"
              alt="Fish school among Acropora"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/coral-acropora-butterflyfish.jpeg"
              alt="Butterflyfish among Acropora corals"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/fish-clownfish-anemone.jpeg"
              alt="Clownfish in anemone"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/conservation-artificial-reef-1.jpeg"
              alt="Artificial reef conservation"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/underwater-coral-panorama.jpeg"
              alt="Underwater coral panorama"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/conservation-coral-planting-1.jpeg"
              alt="Coral planting conservation"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/lembata-sunset-boat.jpeg"
              alt="Sunset boat in Lembata"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
            <Image 
              src="/img/lembata-moonlight-sea.jpeg"
              alt="Moonlight sea in Lembata"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/gallery"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition"
          >
            View Full Gallery
          </a>
        </div>
      </section>

      {/* Experience the Journey - Carousel */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Experience the Journey</h2>
          
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-gray-700">{slides[currentSlide].caption}</p>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentSlide ? 'bg-cyan-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - World Map */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-gray-900 mb-4 text-center">
          Our Global Presence
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Starting from Lembata, East Nusa Tenggara - expanding our research to protect ecosystems worldwide
        </p>
        
        <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-xl" style={{ height: '500px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80000000!2d123.4!3d-8.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dab732458fd783b%3A0xef972acd3a055f12!2sLembata%20Dive%20Operator!5e0!3m2!1sen!2sid!4v1732639300000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Current Research Site:</strong> Lembata Island, East Nusa Tenggara, Indonesia
          </p>
          <p className="text-sm text-gray-500">
            Located in the heart of the Coral Triangle - the world&apos;s epicenter of marine biodiversity
          </p>
        </div>
      </section>

      {/* The Understory Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/img/coral-purple-acropora.jpeg"
                alt="The Understory"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Biodiversity Can Sound Complicated.<br />
                <span className="text-cyan-400">We Make It Human.</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Science is full of big words — MSA, Functional Diversity, Ecosystem Resilience.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                At Econexus, we believe you don&apos;t need a biology degree to care about the planet.
                That&apos;s why we created <strong className="text-white">The Understory</strong> — a space 
                where complex ideas grow into simple, powerful stories.
              </p>
              <a
                href="/about"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

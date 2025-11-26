"use client";

import { useState, useEffect } from "react";
import ServiceModal from "@/components/ServiceModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      caption: "Vibrant coral reefs in Lembata waters, East Nusa Tenggara - home to diverse marine ecosystems in the Coral Triangle."
    },
    {
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80",
      caption: "Marine biodiversity sampling in Lembata - documenting species presence and abundance using standardized transect methodologies."
    },
    {
      image: "https://www.google.com/maps/about/images/treks/reef3-carousel.jpg",
      caption: "Deep reef team specialists collecting data in the mesophotic zone (30m-100m) - similar methods used in Lembata research."
    },
    {
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
      caption: "Underwater surveys in Lembata document habitat characteristics and coral health across spatial gradients."
    },
    {
      image: "https://www.google.com/maps/about/images/treks/reef5-carousel.jpg",
      caption: "Field researchers photographing marine life - advanced imaging techniques applied to Lembata biodiversity documentation."
    },
    {
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80",
      caption: "Sea turtles are among the megafauna species monitored in Lembata's marine protected areas."
    },
    {
      image: "https://www.google.com/maps/about/images/treks/reef6-carousel.jpg",
      caption: "Flora and fauna imagery from Coral Triangle ecosystems - representing the biodiversity found in Lembata waters."
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
      caption: "Diverse fish communities thrive in Lembata's reef systems, tracked through visual surveys and eDNA sampling."
    },
    {
      image: "https://www.google.com/maps/about/images/treks/reef9-carousel.jpg",
      caption: "Schooling fish behavior observed in Coral Triangle waters - similar ecosystems to Lembata marine environments."
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      caption: "Healthy coral formations in Lembata provide critical habitat for marine biodiversity."
    },
    {
      image: "https://images.unsplash.com/photo-1682686581556-32f74e235d2e?w=1200&q=80",
      caption: "Sunset over Lembata Island waters - the intersection of marine research and natural beauty in East Nusa Tenggara."
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&q=80)',
            transform: mounted ? `translateY(${scrollY * 0.5}px)` : 'translateY(0)',
            height: '120%',
          }}
          suppressHydrationWarning
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-light text-white mb-6">
            Marine Biodiversity Research in Lembata
          </h1>
          <div className="border-b-2 border-white w-40 mb-8"></div>
          <p className="text-xl text-white max-w-3xl mb-8 leading-relaxed">
            Advanced scientific methodologies for documenting and understanding marine ecosystems 
            in the Coral Triangle. We offer three core services: Biodiversity Sampling & Mapping, 
            Creation of Digital Twin ecosystems, and eDNA (Environmental DNA) Analysis.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-sm font-medium transition shadow-lg"
            >
              Our Services
            </a>
            <a
              href="#explore"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded text-sm font-medium transition shadow-lg"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-4 text-center">
            Skill Sets We Offer
          </h2>
          <div className="border-b-2 border-blue-600 w-32 mb-12 mx-auto"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Biodiversity Sampling & Mapping
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The skill of collecting biological data from the ocean—such as species observations, 
                water samples, and habitat characteristics—and translating it into spatial maps.
              </p>
              <button 
                onClick={() => setActiveModal('biodiversity')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
              >
                Learn more →
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Creation of a Digital Twin
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Building a virtual, data-driven replica of a marine ecosystem that updates as new 
                information comes in to simulate ocean conditions and conservation scenarios.
              </p>
              <button 
                onClick={() => setActiveModal('digitaltwin')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
              >
                Learn more →
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                eDNA Analysis
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A method of detecting species by analyzing tiny genetic traces they leave behind in 
                seawater—such as skin cells, waste, or mucus—enabling non-invasive identification.
              </p>
              <button 
                onClick={() => setActiveModal('edna')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
              >
                Learn more →
              </button>
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
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
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
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
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
        image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80"
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

      {/* View from Lembata - Photo Grid */}
      <section id="explore" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-gray-900 mb-8">View from Lembata</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Vibrant coral reef in Lembata waters"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80"
              alt="Tropical fish in Coral Triangle"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
              alt="Underwater survey in Lembata"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80"
              alt="Sea turtle in Lembata waters"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Marine biodiversity"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Coral ecosystem research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Marine biodiversity in Lembata waters, East Nusa Tenggara</p>
          <a 
            href="https://www.google.com/maps/place/Lembata+Dive+Operator/@-8.3672702,123.4423796,3a,74.7y/data=!3m8!1e2!3m6!1sAF1QipMAfl1JVvnHyToXDJbyYtatCCURliT36u8MBkpA!2e10!3e12" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View Lembata location on Google Maps →
          </a>
        </div>
      </section>

      {/* Experience the Journey - Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Experience the journey</h2>
        
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption}
              className="w-full h-full object-cover"
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
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Street View Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-gray-900 mb-8">
          Trek Lembata Ocean with Street View
        </h2>
        
        <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '600px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1732639200000!6m8!1m7!1sIEWzE8prCABlGRETmL_lBw!2m2!1d-8.367051392936703!2d123.4422506166996!3f230.07!4f-15.64!5f0.7"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Interactive 360° Street View - Lembata Dive Operator</p>
          <a 
            href="https://www.google.com/maps/place/Lembata+Dive+Operator/@-8.3670514,123.4422506,3a,75y,230.07h,74.64t/data=!3m7!1e1!3m5!1sIEWzE8prCABlGRETmL_lBw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D15.363349530520537%26panoid%3DIEWzE8prCABlGRETmL_lBw%26yaw%3D230.0698271363538!7i16384!8i8192!4m13!1m2!2m1!1slembata+ocean" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Google Maps Section - Lembata Dive Operator */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-gray-900 mb-8">
          Location: Lembata Island, East Nusa Tenggara
        </h2>
        
        <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '500px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8885688347577!2d123.43979831477422!3d-8.367270284205804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dab732458fd783b%3A0xef972acd3a055f12!2sLembata%20Dive%20Operator!5e0!3m2!1sen!2sid!4v1732639300000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">
            <strong>Lembata Dive Operator</strong> - Research Base Location
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Coordinates: 8°22&apos;02.2&quot;S 123°26&apos;32.6&quot;E
          </p>
          <p className="text-sm text-gray-500">
            Located in the heart of the Coral Triangle, the world&apos;s epicenter of marine biodiversity
          </p>
        </div>
      </section>
    </div>
  );
}

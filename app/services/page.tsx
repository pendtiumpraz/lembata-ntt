"use client";

import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "biodiversity",
      icon: "🗺️",
      title: "Biodiversity Sampling & Mapping",
      image: "/img/underwater-seagrass-bed.jpeg",
      shortDesc: "Collecting biological data from ecosystems and translating it into spatial maps.",
      description: [
        "The skill of collecting biological data from the ocean—such as species observations, water samples, and habitat characteristics—and translating it into spatial maps.",
        "It includes using tools like transects, underwater surveys, drones, and sonar to document what lives where, how populations change over time, and which areas are ecologically sensitive or under threat."
      ],
      technical: [
        "The systematic acquisition of biological and ecological data from marine environments using standardized field methodologies.",
        "Techniques include belt and line transects, quadrats, ROV/AUV-based video surveys, benthic grabs, and hydroacoustic profiling to quantify species presence, abundance, and community structure.",
        "Collected data are georeferenced and integrated into GIS-based spatial models, enabling analysis of species distribution patterns, habitat suitability, alpha/beta diversity indices, and temporal shifts."
      ],
      tools: ["Transect Surveys", "ROV/AUV Systems", "Hydroacoustic Profiling", "GIS Mapping", "Drone Surveys"]
    },
    {
      id: "digitaltwin",
      icon: "🌐",
      title: "Creation of a Digital Twin",
      image: "/img/coral-reef-with-fish-2.jpeg",
      shortDesc: "Building virtual replicas of marine ecosystems that update in real-time.",
      description: [
        "Building a virtual, data-driven replica of a marine ecosystem that updates as new information comes in.",
        "A digital twin can simulate ocean conditions, species movement, human impact (e.g., fishing, pollution), and conservation scenarios—allowing stakeholders to test decisions before acting in the real environment."
      ],
      technical: [
        "The development of a dynamic, computationally coupled virtual model of a marine ecosystem that assimilates real-time and historical observational datasets.",
        "A digital twin integrates physical oceanographic models (e.g., ROMS, HYCOM), biogeochemical cycles, habitat layers, and biological population models.",
        "It enables predictive simulations of ecosystem responses to perturbations—such as fishing pressure, nutrient loading, climate-driven variability, or habitat restoration."
      ],
      tools: ["ROMS/HYCOM Models", "Real-time Sensors", "Remote Sensing", "Population Dynamics", "Scenario Testing"]
    },
    {
      id: "edna",
      icon: "🧬",
      title: "eDNA (Environmental DNA) Analysis",
      image: "/img/coral-plate-coral.jpeg",
      shortDesc: "Detecting species through genetic traces left in seawater.",
      description: [
        "A method of detecting species by analyzing tiny genetic traces they leave behind in seawater—such as skin cells, waste, or mucus.",
        "It enables non-invasive identification of marine species, including rare or hard-to-observe organisms. It helps track biodiversity changes quickly across large areas."
      ],
      technical: [
        "A molecular approach that detects species by extracting and sequencing extracellular and cellular DNA fragments shed into the water column.",
        "Workflows involve water filtration, DNA extraction, and PCR-based amplification (qPCR, digital droplet PCR) or metabarcoding using universal markers (e.g., COI, 12S, 16S rRNA).",
        "eDNA enables high-sensitivity detection of cryptic, rare, or low-density taxa, supports community composition profiling, and can quantify relative abundance signals."
      ],
      tools: ["Water Filtration", "DNA Extraction", "qPCR/ddPCR", "Metabarcoding", "Bioinformatics"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/conservation-reef-restoration-1.jpeg"
            alt="Marine Research Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Our Services
          </h1>
          <div className="border-b-2 border-cyan-400 w-24 mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Cutting-edge marine research and environmental monitoring services combining field expertise with advanced technology.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">What We Offer</h2>
            <div className="border-b-2 border-cyan-500 w-24 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From biodiversity assessment to predictive ecosystem modeling, we provide comprehensive solutions for understanding and protecting marine environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                  <span className="text-cyan-600 font-medium text-sm group-hover:underline">
                    {activeService === service.id ? "Show less" : "Learn more"} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{service.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900">{service.title}</h2>
                </div>
                <div className="border-b-2 border-cyan-500 w-24 mb-8"></div>
                
                {service.description.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                ))}

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.tools.map((tool) => (
                    <span key={tool} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="mt-12 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Technical Methodology</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {service.technical.map((para, i) => (
                  <div key={i} className="border-l-2 border-cyan-400 pl-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Our Process</h2>
          <div className="border-b-2 border-white/50 w-24 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your research needs and objectives" },
              { step: "02", title: "Planning", desc: "Design methodology and sampling strategy" },
              { step: "03", title: "Execution", desc: "Field work, data collection, and analysis" },
              { step: "04", title: "Delivery", desc: "Reports, visualizations, and actionable insights" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-white/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Ready to Explore Marine Biodiversity?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our services can support your marine research, conservation projects, or ESG initiatives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

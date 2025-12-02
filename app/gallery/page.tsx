"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const categories = [
    { id: "all", name: "All", count: 20 },
    { id: "coral", name: "Coral Reefs", count: 10 },
    { id: "fish", name: "Marine Life", count: 2 },
    { id: "underwater", name: "Underwater Scenes", count: 3 },
    { id: "conservation", name: "Conservation", count: 3 },
    { id: "lembata", name: "Lembata", count: 3 },
  ];

  const galleryItems = [
    { id: 1, category: "conservation", title: "Coral Planting", description: "Diver working on coral restoration project", image: "/img/conservation-coral-planting-1.jpeg" },
    { id: 2, category: "underwater", title: "Seagrass Meadow", description: "Healthy seagrass bed ecosystem", image: "/img/underwater-seagrass-bed.jpeg" },
    { id: 3, category: "coral", title: "Reef & Fish", description: "Vibrant coral reef teeming with marine life", image: "/img/coral-reef-with-fish-1.jpeg" },
    { id: 4, category: "conservation", title: "Artificial Reef", description: "Coral nursery structure for reef restoration", image: "/img/conservation-artificial-reef-1.jpeg" },
    { id: 5, category: "conservation", title: "Reef Restoration", description: "Freediver working on reef rehabilitation", image: "/img/conservation-reef-restoration-1.jpeg" },
    { id: 6, category: "coral", title: "Acropora Garden", description: "School of chromis fish among Acropora corals", image: "/img/coral-acropora-fish-school.jpeg" },
    { id: 7, category: "coral", title: "Butterflyfish Haven", description: "Butterflyfish swimming through branching corals", image: "/img/coral-acropora-butterflyfish.jpeg" },
    { id: 8, category: "coral", title: "Purple Acropora", description: "Stunning purple-tipped Acropora corals", image: "/img/coral-purple-acropora.jpeg" },
    { id: 9, category: "coral", title: "Colorful Reef", description: "Multi-colored coral colonies", image: "/img/coral-colorful-reef.jpeg" },
    { id: 10, category: "fish", title: "Clownfish Family", description: "Clownfish in their host anemone", image: "/img/fish-clownfish-anemone.jpeg" },
    { id: 11, category: "coral", title: "Reef Ecosystem", description: "Diverse coral reef with tropical fish", image: "/img/coral-reef-with-fish-2.jpeg" },
    { id: 12, category: "coral", title: "Pink Reef Paradise", description: "Pink corals with green chromis fish", image: "/img/coral-pink-reef-chromis.jpeg" },
    { id: 13, category: "underwater", title: "Coral Panorama", description: "Wide view of Lembata coral reef", image: "/img/underwater-coral-panorama.jpeg" },
    { id: 14, category: "coral", title: "Plate Coral", description: "Beautiful plate coral formation", image: "/img/coral-plate-coral.jpeg" },
    { id: 15, category: "underwater", title: "Diverse Reef", description: "Various coral species on the reef", image: "/img/underwater-diverse-reef.jpeg" },
    { id: 16, category: "coral", title: "Blue Coral Colonies", description: "Distinctive blue coral formations", image: "/img/coral-blue-colonies.jpeg" },
    { id: 17, category: "fish", title: "Chromis School", description: "Green chromis swimming over corals", image: "/img/fish-chromis-school.jpeg" },
    { id: 18, category: "lembata", title: "Moonlit Sea", description: "Full moon over Lembata waters", image: "/img/lembata-moonlight-sea.jpeg" },
    { id: 19, category: "lembata", title: "Sunset Boat", description: "Traditional boat under golden sunset", image: "/img/lembata-sunset-boat.jpeg" },
    { id: 20, category: "lembata", title: "Mountain Sunset", description: "Sunset view with Lembata mountain", image: "/img/lembata-sunset-mountain.jpeg" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/coral-colorful-reef.jpeg"
            alt="Exploration Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Exploration Gallery
          </h1>
          <div className="border-b-2 border-cyan-400 w-24 mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Immerse yourself in the underwater beauty of Lembata through our collection of marine photography and conservation documentation.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">20+</div>
              <div className="text-white/80 text-sm">Photos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">6</div>
              <div className="text-white/80 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-white/80 text-sm">Species Documented</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">1</div>
              <div className="text-white/80 text-sm">Research Site</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? "bg-white/20"
                    : "bg-gray-200"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
            Underwater Footage
          </h2>
          <div className="border-b-2 border-cyan-500 w-24 mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Watch our marine biodiversity documentation videos from Lembata&apos;s pristine waters
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/img/underwater-coral-panorama.jpeg"
                >
                  <source src="/img/underwater-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-2">Lembata Underwater Documentary</h3>
                <p className="text-gray-400">
                  A glimpse into the vibrant marine ecosystems of Lembata Island, showcasing coral reefs, 
                  marine life, and conservation efforts in the Coral Triangle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Want to See More?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in documenting and protecting marine biodiversity. Contact us to learn about 
            research opportunities or to request specific imagery for your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
              setSelectedImage(galleryItems[prevIndex]);
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
              const nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(galleryItems[nextIndex]);
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
            <div className="text-center mt-6 text-white">
              <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm text-cyan-400 mb-3 capitalize">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "coral", name: "Coral Reefs" },
    { id: "fish", name: "Marine Life" },
    { id: "underwater", name: "Underwater Scenes" },
    { id: "conservation", name: "Conservation Work" },
    { id: "lembata", name: "Lembata Views" },
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
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Exploration Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Immerse yourself in the underwater beauty of Lembata through our collection of marine photography
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-medium">Click to view full size</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 360 View Section */}
          <div className="mt-20 bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                360° Underwater Experience
              </h2>
              <p className="text-lg text-gray-600">
                Explore Lembata&apos;s marine environment in immersive 360-degree panoramic views
              </p>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🔄</div>
                <p className="text-2xl font-semibold mb-2">Interactive 360° View</p>
                <p className="text-lg">Drag to explore • Click to zoom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Underwater Footage
            </h2>
            <p className="text-lg text-gray-600">
              Watch our marine biodiversity documentation videos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-2">▶️</div>
                  <p className="text-xl font-semibold">Coral Reef Survey</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Comprehensive Reef Documentation</h3>
                <p className="text-gray-600">
                  A detailed survey of Lembata&apos;s diverse coral reef ecosystems
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-2">▶️</div>
                  <p className="text-xl font-semibold">Marine Life Encounters</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Biodiversity Showcase</h3>
                <p className="text-gray-600">
                  Highlighting the incredible variety of marine species in our waters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition z-10"
          >
            &times;
          </button>
          <div 
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

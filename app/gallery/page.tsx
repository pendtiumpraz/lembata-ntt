"use client";

import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "coral", name: "Coral Reefs" },
    { id: "fish", name: "Marine Life" },
    { id: "underwater", name: "Underwater Scenes" },
    { id: "conservation", name: "Conservation Work" },
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: "coral", title: "Vibrant Coral Gardens", description: "Healthy coral formations in Lembata waters" },
    { id: 2, category: "fish", title: "Tropical Fish School", description: "Diverse fish species swimming together" },
    { id: 3, category: "underwater", title: "Deep Blue Waters", description: "Crystal clear underwater visibility" },
    { id: 4, category: "conservation", title: "Research in Action", description: "Marine biologists conducting surveys" },
    { id: 5, category: "coral", title: "Soft Coral Colonies", description: "Colorful soft corals swaying with currents" },
    { id: 6, category: "fish", title: "Sea Turtle Encounter", description: "Green sea turtle gliding through the reef" },
    { id: 7, category: "underwater", title: "Reef Wall", description: "Dramatic vertical reef wall formation" },
    { id: 8, category: "conservation", title: "Data Collection", description: "Underwater sampling equipment in use" },
    { id: 9, category: "coral", title: "Hard Coral Diversity", description: "Various hard coral species" },
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-400 to-cyan-300">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold group-hover:opacity-0 transition">
                    {item.title}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm">Click to view full size</p>
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
    </div>
  );
}

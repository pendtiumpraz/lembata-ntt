"use client";

import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: string;
  image: string;
  generalDescription: string[];
  technicalTitle: string;
  technicalDescription: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  icon,
  image,
  generalDescription,
  technicalTitle,
  technicalDescription,
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-black/20 backdrop-blur-sm hover:bg-black/40 rounded-full p-3 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[92vh] scroll-smooth">
          {/* Hero Image Section */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            
            {/* Floating Icon */}
            <div className="absolute top-8 left-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <span className="text-5xl">{icon}</span>
              </div>
            </div>

            {/* Title Section */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-2">
                {title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-12 py-10 md:py-14">
            
            {/* Overview Card */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h3 className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                  Overview
                </h3>
              </div>
              <div className="space-y-5">
                {generalDescription.map((para, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-sm text-gray-400 uppercase tracking-wider">Technical Details</span>
              </div>
            </div>

            {/* Technical Card */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {technicalTitle}
                  </h3>
                </div>
                <div className="space-y-5">
                  {technicalDescription.map((para, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/contact"
                className="flex-1 group relative overflow-hidden text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <button
                onClick={onClose}
                className="sm:w-auto text-center border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

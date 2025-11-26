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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image Header */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-5xl mb-3">{icon}</div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                {title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* General Description */}
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
                Overview
              </h3>
              <div className="space-y-4">
                {generalDescription.map((para, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Description */}
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
                {technicalTitle}
              </h3>
              <div className="space-y-4">
                {technicalDescription.map((para, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Get in Touch
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

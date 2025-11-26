"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          Get in Touch
        </h1>
        <div className="border-b-2 border-gray-300 w-32 mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Interested in our marine research services? Have questions about biodiversity sampling, 
          digital twin ecosystems, or eDNA analysis? Contact us to discuss collaboration opportunities.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="University / Research Institute"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="biodiversity">Biodiversity Sampling</option>
                  <option value="digitaltwin">Digital Twin Ecosystem</option>
                  <option value="edna">eDNA Analysis</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-sm">
                    Lembata Island<br />
                    East Nusa Tenggara<br />
                    Indonesia
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">
                    research@lembataocean.id
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Coordinates</h3>
                  <p className="text-gray-600 text-sm">
                    8°23&apos;S, 123°30&apos;E
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Location Map</h3>
              <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
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
              <p className="text-xs text-gray-500 mt-2 text-center">Lembata Dive Operator - Research Base</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

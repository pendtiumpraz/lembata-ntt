# Lembata Ocean - Marine Biodiversity Research

A professional website showcasing marine biodiversity research services in Lembata, East Nusa Tenggara, Indonesia. Built with Next.js and inspired by Google Street View Oceans design.

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)

## 🌊 Overview

This website presents cutting-edge marine research services in the Coral Triangle, combining field-based sampling, computational modeling, and molecular analysis to document and understand marine biodiversity in one of the world's most biodiverse marine ecosystems.

**Location:** Lembata Island, East Nusa Tenggara, Indonesia  
**Coordinates:** 8°22'02.2"S 123°26'32.6"E

## ✨ Features

### 🎨 Design
- **Parallax Hero Section** - Full-screen underwater background with smooth scroll effect
- **Google Maps Style UI** - Clean, minimalist interface inspired by Google Street View Oceans
- **Responsive Layout** - Mobile-first design that works on all devices
- **Icon Navigation** - iOS (Apple), Android, and Web icons in navbar

### 📄 Pages
1. **Homepage**
   - Parallax hero with underwater imagery
   - Services preview cards with 3 core offerings
   - Photo grid showcasing Lembata marine life (6 images)
   - Image carousel with 11 curated photos
   - Interactive Google Street View embed (Lembata Dive Operator)
   - Google Maps location section

2. **Services Page**
   - Detailed descriptions of 3 skill sets
   - Dual presentation: General audience + Technical details
   - Professional copywriting from research documentation

3. **About Page**
   - Mission statement and research approach
   - Why Lembata (Coral Triangle significance)
   - Technology & methodology overview

4. **Contact Page**
   - Contact form (Name, Email, Organization, Subject, Message)
   - Contact information display
   - Embedded Google Maps

## 🔬 Core Services

### 1. Biodiversity Sampling & Mapping 🗺️
Collecting biological data from the ocean—such as species observations, water samples, and habitat characteristics—and translating it into spatial maps using transects, underwater surveys, drones, and sonar.

**Technical:** Systematic acquisition using belt and line transects, quadrats, ROV/AUV-based video surveys, benthic grabs, and hydroacoustic profiling. Data integrated into GIS-based spatial models for species distribution analysis.

### 2. Creation of a Digital Twin 🌐
Building a virtual, data-driven replica of a marine ecosystem that updates as new information comes in, simulating ocean conditions, species movement, and conservation scenarios.

**Technical:** Dynamic virtual model integrating ROMS/HYCOM oceanographic models, biogeochemical cycles, habitat layers, and biological population models with real-time sensor data.

### 3. eDNA (Environmental DNA) Analysis 🧬
Detecting species by analyzing tiny genetic traces (skin cells, waste, mucus) left behind in seawater, enabling non-invasive identification of marine species.

**Technical:** Molecular approach using water filtration, DNA extraction, PCR amplification (qPCR, ddPCR), metabarcoding with universal markers (COI, 12S, 16S rRNA), and high-throughput sequencing.

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.3 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** React 19
- **Image Sources:** Unsplash, Google Maps Street View
- **Maps Integration:** Google Maps Embed API

## 📁 Project Structure

```
lembata-ocean/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Homepage with hero, services, gallery
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page (detailed)
│   ├── contact/
│   │   └── page.tsx            # Contact form & map
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation with iOS/Android/Web icons
│   └── Footer.tsx              # Simple footer
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── Econexus.ai.txt             # Source copywriting (services descriptions)
├── start-dan-buka.bat          # Windows: Auto-start dev server + open browser
├── start-server.bat            # Windows: Start dev server only
└── open-browser.bat            # Windows: Open browser only
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   cd D:\AI\ocean\lembata-ocean
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Start (Windows)

Double-click **`start-dan-buka.bat`** to automatically:
- Start the development server
- Wait 8 seconds
- Open browser to localhost:3000

## 🖼️ Image Sources

- **Hero Background:** Unsplash underwater photography
- **Photo Grid:** Unsplash marine life collection
- **Carousel:** Mix of Unsplash images and Google Street View Oceans
- **Street View:** Google Maps embed (Lembata Dive Operator)

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Type Checking
npx tsc --noEmit     # Check TypeScript errors

# Linting
npm run lint         # Run ESLint
```

## 🌐 Google Maps Integration

**Embedded Locations:**
- **Street View:** Lembata Dive Operator (Interactive 360°)
- **Map:** Lembata Island, East Nusa Tenggara
- **Coordinates:** 8°22'02.2"S 123°26'32.6"E

## 📝 Content Source

Service descriptions and technical details sourced from **Econexus.ai.txt**, providing professional scientific copywriting for marine research methodologies.

## 🎯 Key Features Implementation

### Parallax Effect
- Uses `useEffect` hook to track scroll position
- Background image moves at 0.5x scroll speed
- Smooth parallax with `translateY` transform

### Hydration Safety
- `suppressHydrationWarning` on dynamic elements
- `mounted` state to prevent server/client mismatch
- Proper handling of scroll-based transforms

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layouts: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Touch-friendly navigation and buttons

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO

- Semantic HTML structure
- Meta descriptions on all pages
- Descriptive alt text for images
- Clean URL structure
- Fast page load times

## 🤝 Contributing

This is a professional research presentation website. For improvements or suggestions:
1. Review current implementation
2. Test thoroughly (TypeScript + visual)
3. Ensure mobile responsiveness
4. Maintain copywriting accuracy

## 📄 License

All rights reserved. Marine research content and methodology descriptions are proprietary.

## 👏 Credits

- **Design Inspiration:** Google Street View Oceans
- **Location:** Lembata Dive Operator, East Nusa Tenggara
- **Images:** Unsplash (marine photography), Google Maps Street View
- **Copywriting:** Econexus.ai research documentation
- **Framework:** Next.js by Vercel
- **Styling:** Tailwind CSS

## 📧 Contact

**Research Base:** Lembata Island, East Nusa Tenggara, Indonesia  
**Email:** research@lembataocean.id  
**Coordinates:** 8°23'S, 123°30'E

---

Built with ❤️ for marine biodiversity conservation in the Coral Triangle 🌊🐠🪸

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const locations = [
  { id: 'in-hq', name: "Dehradun, India (HQ)", coords: { top: '55%', left: '72%' }, address: "11-A Rajpur Road, Dehradun", description: "Flagship manufacturing & global headquarters." },
  { id: 'us-atl', name: "Atlanta, USA", coords: { top: '40%', left: '25%' }, address: "Atlanta Cutlery Corp.", description: "North American logistics & distribution hub." },
  { id: 'uk-lon', name: "Borehamwood, UK", coords: { top: '30%', left: '48%' }, address: "Windlass Sword Company Ltd.", description: "Film studio presence & European headquarters." },
  { id: 'in-noida', name: "Noida, India", coords: { top: '58%', left: '74%' }, address: "RS Windlass & Sons", description: "Textile & Army-grade fabric manufacturing." }
]

export default function WorldMap() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="windlass-group" className="py-24 bg-forge-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-4">GLOBAL PRESENCE</h2>
          <div className="h-1 w-24 bg-aged-gold" />
        </div>

        <div className="relative aspect-[16/9] w-full bg-iron-dark/50 border border-aged-gold/10 overflow-hidden rounded-sm">
          {/* SVG Map Approximation */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-parchment">
            <path d="M150,150 Q200,100 250,150 T350,150 Q450,200 550,150 T750,150 Q850,100 900,200 T800,400 Q700,450 600,400 T400,400 Q300,450 200,400 T150,150" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Just a stylized representation */}
            <circle cx="250" cy="180" r="2" />
            <circle cx="480" cy="150" r="2" />
            <circle cx="720" cy="230" r="2" />
            <circle cx="740" cy="240" r="2" />
          </svg>

          {/* Interactive Dots */}
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="absolute cursor-pointer"
              style={{ top: loc.coords.top, left: loc.coords.left }}
              onMouseEnter={() => setHovered(loc)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-forge-ember rounded-full animate-ping absolute inset-0" />
                <div className="w-3 h-3 bg-forge-ember rounded-full relative z-10" />
              </div>
            </div>
          ))}

          {/* Tooltip Card */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-72 bg-steel-mid border border-aged-gold p-6 shadow-2xl pointer-events-none"
              >
                <h4 className="font-headlines text-aged-gold text-lg mb-2">{hovered.name}</h4>
                <p className="font-mono text-[10px] text-parchment/60 mb-4">{hovered.address}</p>
                <p className="font-body text-sm text-parchment leading-relaxed">{hovered.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {["Windlass Steelcrafts", "Atlanta Cutlery", "Museum Replicas", "Windlass Sword Co.", "R.S. Windlass & Sons", "Marto / Toledo"].map((company) => (
            <div key={company} className="border border-aged-gold/10 p-4 text-center group hover:border-aged-gold/50 transition-colors">
              <span className="font-headlines text-[10px] tracking-widest text-parchment group-hover:text-aged-gold transition-colors">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

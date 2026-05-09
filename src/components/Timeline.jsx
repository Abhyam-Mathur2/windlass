import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const eras = [
  { year: "1943", title: "Seeds of Windlass", description: "Mr. Ved Prakash Windlass begins supplying Kukris to British Gurkha Regiments" },
  { year: "1947", title: "Post-Independence", description: "Continues British supply in Malaya & Singapore" },
  { year: "1965", title: "Indian Army", description: "First orders through DGS&D" },
  { year: "1979", title: "Global Reach", description: "Exports begin to USA and Western Europe" },
  { year: "1980s", title: "US Expansion", description: "Atlanta Cutlery Corp. acquired; Museum Replicas Ltd. founded; textile branch R.S. Windlass & Sons established" },
  { year: "2000s", title: "Hollywood Era", description: "US Defense Logistics Agency selects Windlass for Marine Corps NCO sabers; Gladiator Helmet of the Spaniard; A Knight's Tale" },
  { year: "2011", title: "World's Largest", description: "Acquisition of Toledo sword makers Marto & Bermejo makes Windlass the world's biggest sword manufacturer" },
  { year: "2013", title: "UK Presence", description: "Windlass Sword Company Ltd. opens at Elstree Film Studios" },
  { year: "Today", title: "80+ Years Legacy", description: "6 continents, 500+ craftsmen, 80+ years of legacy" }
]

export default function Timeline() {
  const targetRef = useRef(null)
  const { scrollXProgress } = useScroll({
    target: targetRef,
    axis: "x"
  })

  return (
    <section id="history" className="bg-forge-black py-24">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-4">OUR LEGACY</h2>
        <div className="h-1 w-24 bg-aged-gold" />
      </div>

      <div 
        ref={targetRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 gap-12 pb-12"
        style={{ scrollBehavior: 'smooth' }}
      >
        {eras.map((era, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
          >
            <motion.div 
              className="bg-iron-dark border border-aged-gold/20 p-10 h-full relative group hover:border-aged-gold/50 transition-colors"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg width="100" height="100" viewBox="0 0 24 24" className="text-aged-gold">
                    <path d="M4 20L20 4M4 4l16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
              </div>
              
              <span className="font-headlines text-6xl text-forge-ember/80 block mb-6">{era.year}</span>
              <h3 className="font-headlines text-2xl text-ghost-white mb-4 tracking-wide">{era.title}</h3>
              <p className="font-body text-lg text-parchment leading-relaxed">{era.description}</p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] flex-grow bg-aged-gold/20" />
                <div className="text-aged-gold">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L12 22M2 12L22 12" strokeLinecap="round" />
                   </svg>
                </div>
                <div className="h-[1px] flex-grow bg-aged-gold/20" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

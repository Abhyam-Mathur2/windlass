import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

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
  const containerRef = useRef(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x"
  })

  return (
    <section id="history" className="bg-forge-black py-24 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-aged-gold/10 z-20">
        <motion.div 
          className="h-full bg-forge-ember origin-left"
          style={{ scaleX: scrollXProgress }}
        />
      </div>

      <div className="container mx-auto px-6 mb-24 section-fade">
        <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-4 uppercase tracking-widest">Our Legacy</h2>
        <div className="line-draw" />
      </div>

      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 gap-0 pb-32 h-[600px] relative"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Timeline connector line */}
        <div className="absolute top-1/2 left-0 w-[4500px] h-[1px] bg-aged-gold/20 -translate-y-1/2" />

        {eras.map((era, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center relative flex items-center justify-center"
          >
            {/* Year ghost text */}
            <div className="absolute top-0 left-4 font-display text-[120px] md:text-[180px] text-aged-gold/[0.04] leading-none select-none pointer-events-none">
              {era.year}
            </div>

            {/* Diamond marker on timeline */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-forge-black border border-aged-gold rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-aged-gold" />
              </div>
            </div>

            <motion.div 
              className={`bg-iron-dark border border-aged-gold/20 p-10 w-full max-w-[380px] relative group hover:border-aged-gold/50 transition-colors shadow-2xl ${
                i % 2 === 0 ? 'mt-40' : '-mt-40'
              }`}
              initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: i % 2 === 0 ? 0 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg width="60" height="60" viewBox="0 0 24 24" className="text-aged-gold">
                    <path d="M4 20L20 4M4 4l16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
              </div>
              
              <h3 className="font-headlines text-xl text-aged-gold mb-4 tracking-widest">{era.year}</h3>
              <h4 className="font-headlines text-lg text-ghost-white mb-4 tracking-wide">{era.title}</h4>
              <p className="font-body text-base text-parchment/80 leading-relaxed">{era.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

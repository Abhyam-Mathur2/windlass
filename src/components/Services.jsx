import React from 'react'
import { motion } from 'framer-motion'
import { Sword, Shield, Clapperboard, Shirt, Scissors, Factory } from 'lucide-react'

const services = [
  {
    title: "Military Spec Supplies",
    description: "Kukris, combat knives, dress sabers, personal regalia for armed forces worldwide",
    icon: Sword
  },
  {
    title: "Motion Picture Props",
    description: "Design & manufacture of screen-accurate weapons, armor, and accessories for Hollywood & TV",
    icon: Clapperboard
  },
  {
    title: "Historical Reproductions",
    description: "Museum-accurate arms and armor researched from collections worldwide",
    icon: Shield
  },
  {
    title: "Custom Manufacturing",
    description: "Bespoke weapon design and manufacturing for governments, collectors, and studios",
    icon: Scissors
  },
  {
    title: "Clothing Manufacturing",
    description: "Period, military, and contemporary textiles; army-grade fabrics",
    icon: Shirt
  },
  {
    title: "Sword Refurbishment",
    description: "Expert restoration and refurbishment of military and ceremonial swords",
    icon: Factory
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-forge-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-4">WHAT WE FORGE</h2>
          <motion.div 
            className="h-1 bg-aged-gold"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative h-[300px] w-full [transform-style:preserve-3d]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ translateZ: 30 }}
            >
              <div className="absolute inset-0 bg-steel-mid border-t-4 border-forge-ember p-8 flex flex-col justify-between transition-all duration-500 group-hover:border-aged-gold group-hover:shadow-[0_20px_40px_rgba(184,150,46,0.1)]">
                <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
                
                <service.icon className="text-aged-gold w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500" />
                
                <div>
                  <h3 className="text-xl font-headlines text-ghost-white mb-3 group-hover:text-aged-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-parchment font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-aged-gold font-headlines text-[10px] tracking-widest flex items-center gap-2">
                    LEARN MORE <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

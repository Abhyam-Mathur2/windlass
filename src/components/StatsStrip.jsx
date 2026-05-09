import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: "80+", label: "YEARS" },
  { value: "500+", label: "CRAFTSMEN" },
  { value: "6", label: "CONTINENTS" },
  { value: "WORLD'S LARGEST", label: "SWORD MANUFACTURER" },
]

export default function StatsStrip() {
  return (
    <div className="bg-iron-dark border-y border-aged-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-12">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <motion.div 
                className="text-center px-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-headlines text-4xl md:text-5xl text-aged-gold mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="font-body text-parchment tracking-[0.2em] text-xs">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="hidden md:block h-16 w-[1px] bg-aged-gold/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import HelmetScene from './HelmetScene'

const movies = ["GLADIATOR", "A KNIGHT'S TALE", "PIRATES OF THE CARIBBEAN", "ROME (TV)"]

export default function Hollywood() {
  return (
    <section className="py-24 bg-iron-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="font-accent italic text-3xl md:text-5xl text-parchment leading-tight mb-12 relative">
              <span className="absolute -top-10 -left-6 text-9xl text-aged-gold/10 font-serif">"</span>
              From the Gladiator's helmet to Robin Hood's sword — history lives in every blade we forge.
            </blockquote>
            
            <p className="font-body text-xl text-parchment/80 mb-12 max-w-xl">
              For over three decades, Windlass has been the silent partner of Hollywood's greatest epics, 
              providing screen-accurate weapons, armor, and consultation to the world's leading prop masters.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-aged-gold/20 pt-12">
              {movies.map((movie) => (
                <div key={movie} className="font-headlines text-sm tracking-[0.2em] text-ghost-white/50">
                  {movie}
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-8 text-[10px] font-mono text-aged-gold tracking-widest uppercase">
              <span>Simon Atherton — Prop Master</span>
              <span>Joss Skottowe — Prop Armorer</span>
              <span>Augusto Grassi — Prop Master</span>
            </div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-radial-gradient from-forge-ember/10 to-transparent pointer-events-none" />
            <HelmetScene />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

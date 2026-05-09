import React from 'react'
import { motion } from 'framer-motion'
import SwordScene from './SwordScene'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <SwordScene />
      
      {/* Overlay Text */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="font-mono text-sm tracking-[0.3em] text-forge-ember block mb-4">
            DEHRADUN · ATLANTA · LONDON — EST. 1943
          </span>
          <h1 className="font-display text-6xl md:text-9xl text-ghost-white tracking-[0.1em] leading-none mb-6">
            FORGED IN<br />HISTORY
          </h1>
          <p className="font-body italic text-xl md:text-2xl text-parchment max-w-2xl mx-auto mb-10 leading-relaxed">
            Premier manufacturer of military swords, armor, <br />
            and the world's most iconic prop weapons
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="px-10 py-4 bg-aged-gold text-forge-black font-headlines tracking-widest text-xs hover:bg-parchment transition-colors">
            EXPLORE PRODUCTS
          </button>
          <button className="px-10 py-4 border border-aged-gold text-aged-gold font-headlines tracking-widest text-xs hover:bg-aged-gold/10 transition-colors">
            OUR STORY
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[10px] text-parchment/50 tracking-widest">SCROLL</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-aged-gold to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

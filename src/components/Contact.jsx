import React from 'react'
import { motion } from 'framer-motion'
import ForgeFireScene from './ForgeFireScene'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-forge-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-8 uppercase tracking-widest">Inquire</h2>
            
            <div className="mb-12 space-y-4">
              <div>
                <h4 className="font-headlines text-aged-gold text-xs tracking-widest mb-1 uppercase">Registered Office</h4>
                <p className="font-body text-parchment">11-A Rajpur Road, Dehradun, Uttarakhand 248001, India</p>
              </div>
              <div>
                <h4 className="font-headlines text-aged-gold text-xs tracking-widest mb-1 uppercase">Factory</h4>
                <p className="font-body text-parchment">Village Balawala, Harrawala, Dehradun</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="NAME" className="bg-iron-dark border border-aged-gold/20 p-4 font-mono text-xs text-parchment outline-none focus:border-aged-gold transition-colors" />
                <input type="email" placeholder="EMAIL" className="bg-iron-dark border border-aged-gold/20 p-4 font-mono text-xs text-parchment outline-none focus:border-aged-gold transition-colors" />
              </div>
              <input type="text" placeholder="COMPANY" className="w-full bg-iron-dark border border-aged-gold/20 p-4 font-mono text-xs text-parchment outline-none focus:border-aged-gold transition-colors" />
              <select className="w-full bg-iron-dark border border-aged-gold/20 p-4 font-mono text-xs text-parchment outline-none focus:border-aged-gold transition-colors appearance-none">
                <option>SUBJECT: MILITARY INQUIRY</option>
                <option>PROPS / FILM</option>
                <option>CUSTOM MANUFACTURING</option>
                <option>PRESS</option>
                <option>OTHER</option>
              </select>
              <textarea placeholder="MESSAGE" rows="5" className="w-full bg-iron-dark border border-aged-gold/20 p-4 font-mono text-xs text-parchment outline-none focus:border-aged-gold transition-colors"></textarea>
              
              <button className="w-full py-5 bg-aged-gold text-forge-black font-headlines tracking-[0.3em] text-xs hover:bg-parchment transition-colors uppercase">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Fire Animation */}
          <div className="relative bg-iron-dark/30 border border-aged-gold/10 overflow-hidden">
             <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-forge-black via-transparent to-transparent" />
             <ForgeFireScene />
             <div className="absolute bottom-12 left-12 z-20">
               <span className="font-headlines text-ghost-white text-4xl block mb-2">FORGED IN</span>
               <span className="font-display text-aged-gold text-6xl tracking-widest">FIRE</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

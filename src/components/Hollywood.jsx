import { motion } from 'framer-motion'
import HelmetScene from './HelmetScene'

const movies = ["GLADIATOR", "A KNIGHT'S TALE", "PIRATES OF THE CARIBBEAN", "ROME (TV)"]

export default function Hollywood() {
  return (
    <section className="py-24 bg-iron-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <motion.div
            className="section-fade"
            initial={{ opacity: 0, x: -50 }}
          >
            <blockquote className="font-accent italic text-3xl md:text-5xl text-parchment leading-tight mb-12 relative">
              <span className="absolute -top-8 -left-4 text-[120px] text-aged-gold/[0.07] font-display leading-none select-none pointer-events-none">
                "
              </span>
              From the Gladiator's helmet to Robin Hood's sword — history lives in every blade we forge.
            </blockquote>
            
            <p className="font-body text-xl text-parchment/80 mb-12 max-w-xl leading-relaxed italic">
              For over three decades, Windlass has been the silent partner of Hollywood's greatest epics, 
              providing screen-accurate weapons, armor, and consultation to the world's leading prop masters.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-aged-gold/20 pt-12">
              {movies.map((movie) => (
                <div key={movie} className="font-headlines text-[10px] tracking-[0.3em] text-ghost-white/40 uppercase">
                  {movie}
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-8 text-[9px] font-mono text-aged-gold tracking-[0.2em] uppercase">
              <span className="opacity-80">Simon Atherton — Prop Master</span>
              <span className="opacity-80">Joss Skottowe — Prop Armorer</span>
              <span className="opacity-80">Augusto Grassi — Prop Master</span>
            </div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            className="relative section-fade"
            initial={{ opacity: 0, scale: 0.95 }}
          >
            <div className="absolute inset-0 pointer-events-none z-10"
              style={{ background: 'radial-gradient(circle at center, rgba(192,57,43,0.08) 0%, transparent 70%)' }}
            />
            <HelmetScene />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Landmark, MapPinned, Sparkles, Users2 } from 'lucide-react'

const highlights = [
  {
    icon: Landmark,
    title: 'Family-led since 1943',
    text: 'Windlass grew from a single workshop into a multi-country manufacturing network without losing its craft-first identity.'
  },
  {
    icon: Sparkles,
    title: 'Museum-grade detail',
    text: 'Our teams balance historical accuracy, modern durability, and the exacting visual language demanded by film and collectors.'
  },
  {
    icon: MapPinned,
    title: 'Built across continents',
    text: 'From Dehradun to Atlanta and Borehamwood, the group supports military, heritage, and screen-production clients worldwide.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-aged-gold/10 bg-gradient-to-b from-forge-black via-iron-dark/40 to-forge-black py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,150,46,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,242,237,0.06),transparent_26%)]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-14 items-start">
          <motion.div
            className="section-fade"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-aged-gold uppercase">About Windlass</span>
            <h2 className="mt-4 max-w-2xl font-headlines text-4xl md:text-6xl leading-tight text-ghost-white uppercase tracking-[0.12em]">
              Heritage forged into a global production house.
            </h2>
            <div className="line-draw mt-6" />

            <p className="mt-10 max-w-2xl text-lg md:text-2xl leading-relaxed text-parchment/80 font-body italic">
              Windlass Steelcrafts blends old-world metallurgy, modern process control, and a cinematic eye for finish. The result is a catalog that serves military buyers, historic weapon collectors, and the world’s largest screen productions.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '1943', label: 'Founded' },
                { value: '500+', label: 'Craftsmen' },
                { value: '6', label: 'Continents' }
              ].map((item) => (
                <div key={item.label} className="border border-aged-gold/15 bg-iron-dark/80 p-5">
                  <div className="font-headlines text-3xl text-aged-gold tracking-[0.18em]">{item.value}</div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.35em] text-parchment/60 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="section-fade"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="border border-aged-gold/15 bg-steel-mid/70 p-8 md:p-10 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between gap-4 border-b border-aged-gold/10 pb-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.35em] text-forge-ember uppercase">Company Profile</p>
                  <h3 className="mt-3 font-headlines text-2xl md:text-3xl text-ghost-white uppercase tracking-[0.18em]">A production partner, not just a manufacturer</h3>
                </div>
                <Users2 className="h-10 w-10 text-aged-gold opacity-80" />
              </div>

              <div className="mt-8 space-y-6">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4 border-b border-aged-gold/10 pb-6 last:border-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-aged-gold/15 bg-forge-black/60 text-aged-gold">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-headlines text-lg tracking-[0.12em] text-ghost-white uppercase">{item.title}</h4>
                      <p className="mt-2 max-w-xl font-body text-base leading-relaxed text-parchment/75">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
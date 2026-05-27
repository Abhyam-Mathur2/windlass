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
    <section id="services" className="relative overflow-hidden bg-forge-black py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(184,150,46,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(192,57,43,0.05),transparent_28%)]" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="mb-14 max-w-3xl section-fade">
          <span className="font-mono text-[10px] tracking-[0.4em] text-aged-gold uppercase">Core capabilities</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-headlines text-ghost-white uppercase tracking-[0.08em]">What We Forge</h2>
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-parchment/75 leading-relaxed">
            A tighter showcase of the six workstreams that drive the company, laid out as a compact set of premium cards instead of a wide empty canvas.
          </p>
          <div className="line-draw mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative min-h-[250px] w-full cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.06 }}
              style={{ perspective: '1000px' }}
            >
              <div className="
                absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%),#1E1C17] border border-aged-gold/12 p-8
                flex flex-col justify-between
                transition-all duration-500 ease-out
                group-hover:border-aged-gold
                group-hover:[transform:translateZ(18px)_translateY(-6px)]
                group-hover:shadow-[0_24px_56px_rgba(184,150,46,0.14)]
                [transform-style:preserve-3d]
              ">
                <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-aged-gold/8 blur-3xl" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-aged-gold/15 bg-forge-black/60 text-aged-gold transition-transform duration-500 group-hover:scale-105">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.35em] text-forge-ember uppercase">0{i + 1}</span>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-headlines text-ghost-white mb-3 uppercase tracking-[0.14em] group-hover:text-aged-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="max-w-md text-parchment font-body text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
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

import { motion } from 'framer-motion'

const locations = [
  { id: 'dehradun', label: 'Dehradun', role: 'India HQ', x: 710, y: 254, labelX: 690, labelY: 212, align: 'right' },
  { id: 'atlanta', label: 'Atlanta', role: 'North America', x: 252, y: 272, labelX: 145, labelY: 314, align: 'left' },
  { id: 'uk', label: 'Borehamwood', role: 'UK Studio', x: 474, y: 186, labelX: 392, labelY: 132, align: 'center' },
  { id: 'noida', label: 'Noida', role: 'Production', x: 724, y: 264, labelX: 744, labelY: 303, align: 'left' }
]

const routePaths = [
  'M 710 254 Q 560 210 474 186',
  'M 710 254 Q 525 210 252 272',
  'M 710 254 Q 724 230 724 264'
]

const stats = [
  { value: '04', label: 'Key nodes' },
  { value: '03', label: 'Direct routes' },
  { value: '24/7', label: 'Production support' }
]

export default function WorldMap() {
  return (
    <section id="windlass-group" className="relative overflow-hidden border-y border-aged-gold/10 bg-gradient-to-b from-forge-black via-iron-dark/35 to-forge-black py-24 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,150,46,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(192,57,43,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_40%,rgba(0,0,0,0.12))]"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-end section-fade">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.4em] text-aged-gold uppercase">Group companies</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-headlines text-ghost-white uppercase tracking-[0.14em] leading-tight">Global presence with a single production network.</h2>
            <p className="mt-5 text-lg md:text-xl text-parchment/75 leading-relaxed max-w-2xl">
              A cleaner view of the Windlass footprint: fewer distractions, stronger routes, and clearer location labels.
            </p>
            <div className="line-draw mt-6" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-aged-gold/12 bg-steel-mid/60 p-4 md:p-5 shadow-[0_18px_46px_rgba(0,0,0,0.25)]">
                <div className="font-headlines text-2xl md:text-3xl text-aged-gold tracking-[0.16em]">{stat.value}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.28em] text-parchment/55 uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr,1.22fr] section-fade">
          <div className="border border-aged-gold/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%),rgba(17,16,11,0.92)] p-6 md:p-8 shadow-[0_28px_88px_rgba(0,0,0,0.45)]">
            <p className="font-mono text-[10px] tracking-[0.4em] text-forge-ember uppercase">Network nodes</p>
            <h3 className="mt-4 font-headlines text-2xl md:text-3xl uppercase tracking-[0.14em] text-ghost-white leading-snug">
              Manufacturing, studio, and export hubs aligned as one system.
            </h3>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-parchment/72">
              Each node supports a different part of the chain, from heritage production to screen-ready finishing and international distribution.
            </p>

            <div className="mt-8 space-y-4">
              {locations.map((location) => (
                <div key={location.id} className="flex items-start gap-4 border border-aged-gold/10 bg-forge-black/45 p-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-forge-ember shadow-[0_0_18px_rgba(192,57,43,0.8)]" />
                  <div>
                    <div className="font-headlines text-lg tracking-[0.14em] uppercase text-ghost-white">{location.label}</div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.32em] text-aged-gold uppercase">{location.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden border border-aged-gold/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%),#0e0d09] shadow-[0_32px_88px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(184,150,46,0.12),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(245,242,237,0.04),transparent_24%)]" />
            <div
              className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(184,150,46,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(184,150,46,0.05)_1px,transparent_1px)] opacity-55"
              style={{ backgroundSize: '100% 13%, 10% 100%' }}
            />

            <svg viewBox="0 0 1000 520" className="absolute inset-0 h-full w-full pointer-events-none">
              <defs>
                <linearGradient id="map-route" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(184,150,46,0.28)" />
                  <stop offset="60%" stopColor="rgba(184,150,46,0.92)" />
                  <stop offset="100%" stopColor="rgba(192,57,43,0.96)" />
                </linearGradient>
              </defs>

              <path
                d="M136,232 C155,188 196,166 246,176 C292,184 311,213 332,235 C352,258 384,267 413,258 C451,246 473,216 500,208 C521,224 545,238 582,241 C639,245 688,230 743,213 C803,194 860,184 906,201 C939,214 957,245 954,279 C950,333 915,376 868,410 C829,438 776,455 716,446 C671,439 630,414 589,398 C547,381 502,381 460,395 C409,411 359,438 304,439 C245,440 194,420 154,396 C133,383 119,357 122,327 C126,292 124,262 136,232 Z"
                fill="rgba(200,184,154,0.05)"
                stroke="rgba(184,150,46,0.18)"
                strokeWidth="1"
              />

              <path
                d="M402,122 C432,109 468,107 498,117 C523,126 541,146 542,166 C543,190 525,207 500,212 C474,217 446,208 425,191 C407,176 397,150 402,122 Z"
                fill="rgba(200,184,154,0.05)"
                stroke="rgba(184,150,46,0.16)"
                strokeWidth="0.9"
              />

              {routePaths.map((d, index) => (
                <motion.path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#map-route)"
                  strokeWidth={index === 1 ? 2.4 : 1.9}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.18 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.1, delay: index * 0.16 }}
                />
              ))}

              {locations.map((location) => (
                <g key={location.id}>
                  <circle cx={location.x} cy={location.y} r="9" fill="rgba(192,57,43,0.14)" />
                  <circle cx={location.x} cy={location.y} r="4.5" fill="#C0392B" />
                  <circle cx={location.x} cy={location.y} r="14" fill="none" stroke="rgba(192,57,43,0.35)" strokeWidth="1" />
                </g>
              ))}
            </svg>

            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(location.x / 1000) * 100}%`, top: `${(location.y / 520) * 100}%` }}
                title={location.label}
              >
                <span className="absolute inset-0 rounded-full bg-forge-ember/35 blur-sm animate-ping [animation-duration:2.4s]" />
                <span className="relative block h-3.5 w-3.5 rounded-full border border-forge-ember bg-forge-ember shadow-[0_0_18px_rgba(192,57,43,0.85)]" />
              </div>
            ))}

            {locations.map((location) => (
              <div
                key={`${location.id}-label`}
                className="absolute z-10 max-w-[140px] rounded-full border border-aged-gold/20 bg-forge-black/80 px-3 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                style={{ left: `${(location.labelX / 1000) * 100}%`, top: `${(location.labelY / 520) * 100}%` }}
              >
                <div className={`font-headlines text-sm uppercase tracking-[0.14em] text-ghost-white ${location.align === 'center' ? 'text-center' : location.align === 'right' ? 'text-right' : 'text-left'}`}>
                  {location.label}
                </div>
                <div className={`mt-1 font-mono text-[9px] tracking-[0.28em] text-aged-gold uppercase ${location.align === 'center' ? 'text-center' : location.align === 'right' ? 'text-right' : 'text-left'}`}>
                  {location.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

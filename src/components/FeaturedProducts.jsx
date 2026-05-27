import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'

const products = [
  { 
    title: "Marine Corps NCO Saber",   
    category: "MILITARY SWORDS",  
    image: "https://images.unsplash.com/photo-1553775927-a071d5a6a39a?w=800&q=80",
    description: "Manufactured to exacting specification for armed forces on 6 continents. High-carbon steel blade, hand-polished finish."
  },
  { 
    title: "Gurkha Kukri",             
    category: "COMBAT KNIVES",    
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&q=80",
    description: "The kukri supplied to the British Gurkha Regiments uninterrupted since 1943. A contract that has endured 80+ years."
  },
  { 
    title: "Gladiator Helmet Replica", 
    category: "HOLLYWOOD PROPS",  
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    description: "Replica of the iconic screen-used prop. Researched by our in-house R&D team and validated by industry prop masters."
  },
  { 
    title: "Medieval Plate Armor",     
    category: "ARMOR",            
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
    description: "Hand-forged steel plate armor, articulated for mobility. Museum-grade reproduction for collectors and film."
  },
  { 
    title: "Viking Longsword",         
    category: "HISTORICAL",       
    image: "https://images.unsplash.com/photo-1618397746666-63405ce5d015?w=800&q=80",
    description: "Inspired by 10th-century archaeological finds. Pattern-welded aesthetics with modern high-carbon durability."
  },
  { 
    title: "Templar Shield",           
    category: "SHIELDS",          
    image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=800&q=80",
    description: "Reinforced wood and steel construction. Features historically accurate heraldry and battle-ready durability."
  },
  { 
    title: "Dress Uniform Saber",      
    category: "MILITARY SWORDS",  
    image: "https://images.unsplash.com/photo-1574615552607-ec9e23f3a5c3?w=800&q=80",
    description: "Ceremonial dress sabers for international military academies. Nickel-plated finish with intricate hilt engravings."
  },
  { 
    title: "Period Battle Costume",    
    category: "TEXTILES",         
    image: "https://images.unsplash.com/photo-1519415510236-85592ac59c6c?w=800&q=80",
    description: "Army-grade fabrics tailored into historically accurate period garments. Used extensively in TV and cinematic epics."
  }
]

function ProductCard({ product, index }) {
  return (
    <motion.div 
      className="relative h-[520px] group [perspective:1000px] section-fade"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <motion.div 
        className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden border border-aged-gold/10 [backface-visibility:hidden]">
          <div className="absolute inset-0 bg-forge-black" />
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
          <div className="hidden absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(184,150,46,0.14),transparent_45%),linear-gradient(160deg,rgba(45,43,37,0.9),rgba(10,8,5,0.98))]">
            <ImageOff className="h-12 w-12 text-aged-gold/60" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/25 to-transparent opacity-90" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <span className="font-mono text-[10px] text-aged-gold tracking-[0.3em] uppercase">{product.category}</span>
            <h3 className="mt-3 max-w-[85%] font-headlines text-2xl text-ghost-white tracking-[0.18em] uppercase leading-tight">{product.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full bg-iron-dark [transform:rotateY(180deg)] [backface-visibility:hidden] p-10 flex flex-col justify-center items-center text-center border border-aged-gold/30">
          <div className="absolute inset-0 opacity-10 noise-overlay" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-forge-ember uppercase">{product.category}</span>
          <h3 className="mt-4 font-headlines text-3xl text-aged-gold mb-6 uppercase tracking-[0.18em]">{product.title}</h3>
          <p className="max-w-sm font-body text-parchment text-lg mb-10 leading-relaxed italic">
            "{product.description}"
          </p>
          <button className="px-8 py-3 border border-aged-gold text-aged-gold font-headlines text-[10px] tracking-[0.3em] hover:bg-aged-gold hover:text-forge-black transition-all uppercase">
            Find A Distributor →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative overflow-hidden py-24 bg-forge-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,150,46,0.06),transparent_32%)] pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="mb-16 max-w-3xl section-fade">
          <span className="font-mono text-[10px] tracking-[0.4em] text-aged-gold uppercase">Featured catalogue</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-headlines text-ghost-white uppercase tracking-[0.2em]">From the Forge</h2>
          <p className="mt-5 text-lg md:text-xl text-parchment/75 leading-relaxed max-w-2xl">
            A sharper selection of military, historical, and screen-built pieces with more breathing room and stronger visual hierarchy.
          </p>
          <div className="line-draw mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>

        <div className="mt-20 text-center section-fade">
          <button className="px-16 py-6 bg-gradient-to-r from-aged-gold to-aged-gold/80 text-forge-black font-headlines tracking-[0.4em] text-xs hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] uppercase">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  )
}

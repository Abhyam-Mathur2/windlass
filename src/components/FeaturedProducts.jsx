import React from 'react'
import { motion } from 'framer-motion'

const products = [
  { title: "Marine Corps NCO Saber", category: "MILITARY SWORDS", image: "https://images.unsplash.com/photo-1590099553191-862d7b57850e?auto=format&fit=crop&q=80&w=800" },
  { title: "Traditional Kukri", category: "KNIVES", image: "https://images.unsplash.com/photo-1594061683313-2c33a2df337c?auto=format&fit=crop&q=80&w=800" },
  { title: "Great Basin Helmet", category: "ARMOR", image: "https://images.unsplash.com/photo-1584281722573-672589e68593?auto=format&fit=crop&q=80&w=800" },
  { title: "Gladiator Helmet", category: "HOLLYWOOD", image: "https://images.unsplash.com/photo-1543349689-9a4d426bee87?auto=format&fit=crop&q=80&w=800" },
  { title: "Viking Round Shield", category: "SHIELDS", image: "https://images.unsplash.com/photo-1599708153386-62bf3f03361b?auto=format&fit=crop&q=80&w=800" },
  { title: "Templar Longsword", category: "HISTORICAL", image: "https://images.unsplash.com/photo-1614032331568-d0144f83b638?auto=format&fit=crop&q=80&w=800" },
  { title: "Medieval Gambeson", category: "TEXTILES", image: "https://images.unsplash.com/photo-1519415510236-85592ac59c6c?auto=format&fit=crop&q=80&w=800" },
  { title: "Pirate Cutlass", category: "HOLLYWOOD", image: "https://images.unsplash.com/photo-1590099553191-862d7b57850e?auto=format&fit=crop&q=80&w=800" }
]

function ProductCard({ product, index }) {
  return (
    <motion.div 
      className="relative h-[400px] group [perspective:1000px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <motion.div 
        className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="font-mono text-[10px] text-aged-gold tracking-widest">{product.category}</span>
            <h3 className="font-headlines text-lg text-ghost-white mt-1">{product.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full bg-iron-dark [transform:rotateY(180deg)] [backface-visibility:hidden] p-8 flex flex-col justify-center items-center text-center border border-aged-gold/30">
          <div className="absolute inset-0 opacity-10 noise-overlay" />
          <h3 className="font-headlines text-2xl text-aged-gold mb-4">{product.title}</h3>
          <p className="font-body text-parchment text-sm mb-8 leading-relaxed">
            Meticulously crafted using traditional methods and authentic materials. 
            A testament to 80 years of forging excellence.
          </p>
          <button className="px-6 py-2 border border-aged-gold text-aged-gold font-headlines text-[10px] tracking-widest hover:bg-aged-gold hover:text-forge-black transition-all">
            FIND A DISTRIBUTOR →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-forge-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-4 uppercase tracking-widest">From the Forge</h2>
          <div className="h-[1px] w-24 bg-aged-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-gradient-to-r from-aged-gold to-aged-gold/80 text-forge-black font-headlines tracking-[0.3em] text-xs hover:scale-105 transition-transform shadow-xl">
            BROWSE ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}

export default function WhereToBuy() {
  return (
    <section id="where-to-buy" className="py-24 bg-iron-dark border-t border-aged-gold/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-headlines text-ghost-white mb-6 uppercase tracking-widest">
          WE DON'T SELL DIRECTLY — WE FORGE FOR THE WORLD
        </h2>
        <p className="font-body text-xl text-parchment max-w-3xl mx-auto mb-12">
          Windlass products are available through our global network of distributors and resellers.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16 font-headlines text-[10px] tracking-widest">
          {["AMERICAS", "EUROPE", "ASIA PACIFIC", "MIDDLE EAST & AFRICA"].map((region) => (
            <button key={region} className="border-b border-transparent hover:border-aged-gold pb-2 transition-all">
              {region}
            </button>
          ))}
        </div>

        <button className="px-12 py-5 border border-aged-gold text-aged-gold font-headlines tracking-[0.3em] text-xs hover:bg-aged-gold hover:text-forge-black transition-all uppercase">
          Find Your Local Distributor
        </button>
      </div>
    </section>
  )
}

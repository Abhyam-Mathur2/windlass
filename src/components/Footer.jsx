export default function Footer() {
  return (
    <footer className="bg-forge-black border-t border-aged-gold/20 py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div className="space-y-8">
            <div className="font-display text-3xl tracking-[0.2em] text-ghost-white">
              WINDLASS
            </div>
            <p className="font-body text-parchment/60 leading-relaxed italic text-lg">
              World's largest manufacturer of military swords, armor, and screen-accurate historical replicas. Serving those who serve since 1943.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-8">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4 font-headlines text-[10px] tracking-[0.3em] text-parchment/80">
              <li className="hover:text-aged-gold transition-colors"><a href="#home">HOME</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#about">ABOUT</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#history">HISTORY</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#services">SERVICES</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#products">PRODUCTS</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#windlass-group">WINDLASS GROUP</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#where-to-buy">WHERE TO BUY</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-8">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Group Companies</h4>
            <ul className="space-y-4 font-headlines text-[10px] tracking-[0.3em] text-parchment/80">
              <li className="hover:text-aged-gold transition-colors">ATLANTA CUTLERY</li>
              <li className="hover:text-aged-gold transition-colors">MUSEUM REPLICAS</li>
              <li className="hover:text-aged-gold transition-colors">WINDLASS SWORD CO.</li>
              <li className="hover:text-aged-gold transition-colors">RS WINDLASS & SONS</li>
              <li className="hover:text-aged-gold transition-colors">MARTO / BERMEJO</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-8">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Connect</h4>
            <div className="space-y-4 font-mono text-[10px] tracking-widest text-parchment/60 uppercase">
              <p>+91 135 273 4300</p>
              <p>info@windlass.com</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:info@windlass.com" className="w-10 h-10 rounded-full border border-aged-gold/20 flex items-center justify-center text-parchment hover:border-aged-gold hover:text-aged-gold transition-all duration-300" aria-label="Send email to Windlass">
                <span className="font-headlines text-xs">F</span>
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full border border-aged-gold/20 flex items-center justify-center text-parchment hover:border-aged-gold hover:text-aged-gold transition-all duration-300" aria-label="Jump to contact form">
                <span className="font-headlines text-xs">I</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-aged-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-mono text-[10px] text-parchment/40 tracking-[0.4em] uppercase">
            © 2026 WINDLASS STEELCRAFTS. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-parchment/40 tracking-[0.4em] uppercase">
            DEHRADUN, INDIA
          </span>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-forge-black border-t border-aged-gold/20 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="font-display text-2xl tracking-[0.2em] text-ghost-white">
              WINDLASS
            </div>
            <p className="font-body text-parchment/60 leading-relaxed">
              World's largest manufacturer of military swords, armor, and screen-accurate historical replicas. Est. 1943.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3 font-headlines text-[10px] tracking-widest text-parchment/80">
              <li className="hover:text-aged-gold transition-colors"><a href="#home">HOME</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#about">ABOUT</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#history">HISTORY</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#services">SERVICES</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#products">PRODUCTS</a></li>
              <li className="hover:text-aged-gold transition-colors"><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Group Companies</h4>
            <ul className="space-y-3 font-headlines text-[10px] tracking-widest text-parchment/80">
              <li className="hover:text-aged-gold transition-colors">ATLANTA CUTLERY</li>
              <li className="hover:text-aged-gold transition-colors">MUSEUM REPLICAS</li>
              <li className="hover:text-aged-gold transition-colors">WINDLASS SWORD CO.</li>
              <li className="hover:text-aged-gold transition-colors">RS WINDLASS & SONS</li>
              <li className="hover:text-aged-gold transition-colors">MARTO / BERMEJO</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <h4 className="font-headlines text-aged-gold text-xs tracking-widest uppercase">Connect</h4>
            <p className="font-mono text-[10px] text-parchment/60">
              +91 135 273 4300<br />
              info@windlass.com
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-aged-gold/20 flex items-center justify-center text-parchment hover:border-aged-gold transition-colors cursor-pointer">
                f
              </div>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-aged-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-mono text-[10px] text-parchment/40 tracking-widest uppercase">
            © 2026 WINDLASS STEELCRAFTS. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-parchment/40 tracking-widest uppercase">
            DEHRADUN, INDIA
          </span>
        </div>
      </div>
    </footer>
  )
}

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    'HOME', 'ABOUT', 'HISTORY', 'SERVICES', 'PRODUCTS', 'WINDLASS GROUP', 'WHERE TO BUY', 'CONTACT'
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forge-black/95 border-b border-aged-gold/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-[0.2em] text-ghost-white">
            WINDLASS
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-aged-gold">
            <path d="M4 20L20 4M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-headlines text-xs tracking-widest text-parchment hover:text-aged-gold transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-aged-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
          <div className="h-4 w-[1px] bg-forge-ember" />
          <span className="font-mono text-[10px] text-forge-ember tracking-tighter">EST. 1943</span>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-parchment"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-forge-black z-[60] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-parchment"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-display text-3xl tracking-widest text-ghost-white hover:text-aged-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

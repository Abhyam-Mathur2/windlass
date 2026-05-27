import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { 
        if (e.isIntersecting) setActiveSection(e.target.id) 
      }),
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'HISTORY', href: '#history' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'WINDLASS GROUP', href: '#windlass-group' },
    { label: 'WHERE TO BUY', href: '#where-to-buy' },
    { label: 'CONTACT', href: '#contact' }
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forge-black/92 border-b border-aged-gold/15 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center gap-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" data-cursor-hover>
          <span className="font-display text-2xl tracking-[0.2em] text-ghost-white">
            WINDLASS
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-aged-gold">
            <path d="M4 20L20 4M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeSection === id
            return (
              <a 
                key={link.label} 
                href={link.href}
                className={`font-headlines text-[10px] tracking-widest transition-colors relative group ${
                  isActive ? 'text-aged-gold' : 'text-parchment hover:text-aged-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-aged-gold transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            )
          })}
          <div className="h-4 w-[1px] bg-forge-ember" />
          <span className="font-mono text-[10px] text-forge-ember tracking-tighter">EST. 1943</span>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label="Open navigation menu"
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
              aria-label="Close navigation menu"
              className="absolute top-8 right-8 text-parchment"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  className="font-display text-3xl tracking-widest text-ghost-white hover:text-aged-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

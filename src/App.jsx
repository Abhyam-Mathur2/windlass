import { useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsStrip from './components/StatsStrip'
import Services from './components/Services'
import Timeline from './components/Timeline'
import FeaturedProducts from './components/FeaturedProducts'
import Hollywood from './components/Hollywood'
import WorldMap from './components/WorldMap'
import WhereToBuy from './components/WhereToBuy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  // Global scroll animation observer
  useEffect(() => {
    const els = document.querySelectorAll('.section-fade, .line-draw')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('in-view'); 
          io.unobserve(e.target) 
        } 
      }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-forge-black selection:bg-aged-gold selection:text-forge-black">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(184,150,46,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(192,57,43,0.1),transparent_26%)]"
      />
      {/* Noise overlay — z-index:1, pointer-events:none */}
      <div className="noise-overlay" aria-hidden="true" />
      
      <Loader />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <StatsStrip />
        <Services />
        <Timeline />
        <FeaturedProducts />
        <Hollywood />
        <WorldMap />
        <WhereToBuy />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App

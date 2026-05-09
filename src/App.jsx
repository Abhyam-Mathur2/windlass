import React from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Services from './components/Services'
import Timeline from './components/Timeline'
import FeaturedProducts from './components/FeaturedProducts'
import Hollywood from './components/Hollywood'
import WorldMap from './components/WorldMap'
import Contact from './components/Contact'
import WhereToBuy from './components/WhereToBuy'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-forge-black selection:bg-aged-gold selection:text-forge-black">
      <Loader />
      <CustomCursor />
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
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

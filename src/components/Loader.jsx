import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-forge-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100" 
          className="text-aged-gold"
        >
          {/* Crossed Swords SVG */}
          <motion.path
            d="M20 80 L80 20"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M20 20 L80 80"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.svg>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 font-display text-xl tracking-[0.5em] text-ghost-white text-center"
        >
          WINDLASS
        </motion.div>
      </div>
    </motion.div>
  )
}

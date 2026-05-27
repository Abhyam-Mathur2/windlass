import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[200] bg-forge-black flex flex-col items-center justify-center gap-10"
        >
          {/* Crossed Swords SVG with stroke draw-in */}
          <svg width="140" height="140" viewBox="0 0 140 140">
            {/* Sword 1: top-left to bottom-right */}
            <motion.line x1="20" y1="20" x2="120" y2="120"
              stroke="#B8962E" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            {/* Crossguard 1 */}
            <motion.line x1="30" y1="30" x2="50" y2="10"
              stroke="#B8962E" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            />
            <motion.line x1="30" y1="30" x2="10" y2="50"
              stroke="#B8962E" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            />

            {/* Sword 2: top-right to bottom-left */}
            <motion.line x1="120" y1="20" x2="20" y2="120"
              stroke="#B8962E" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
            />
            {/* Crossguard 2 */}
            <motion.line x1="110" y1="30" x2="130" y2="50"
              stroke="#B8962E" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            />
            <motion.line x1="110" y1="30" x2="90" y2="10"
              stroke="#B8962E" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            />

            {/* Center gem */}
            <motion.circle cx="70" cy="70" r="4" fill="#C0392B"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 300 }}
            />
          </svg>

          {/* Wordmark */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-display text-2xl tracking-[0.5em] text-ghost-white text-center">
              WINDLASS
            </p>
            <p className="font-mono text-[10px] tracking-[0.4em] text-aged-gold text-center mt-1">
              EST. 1943
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div className="w-48 h-[1px] bg-aged-gold/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-aged-gold"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

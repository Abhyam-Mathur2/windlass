import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`
    }

    const enter = (e) => {
      const t = e.target.closest('button, a, [data-cursor-hover], .group')
      setHovering(!!t)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', enter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform hidden lg:block"
      style={{ transition: 'width 0.2s, height 0.2s' }}
    >
      {/* Sword silhouette — 24×24 SVG, rotated 45° */}
      <svg
        width={hovering ? 32 : 24}
        height={hovering ? 32 : 24}
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
          filter: hovering ? 'drop-shadow(0 0 6px #B8962E)' : 'none',
          transform: 'rotate(45deg)'
        }}
      >
        {/* Blade */}
        <line x1="12" y1="2" x2="12" y2="16" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round" />
        {/* Crossguard */}
        <line x1="8" y1="16" x2="16" y2="16" stroke="#B8962E" strokeWidth="2" strokeLinecap="round" />
        {/* Grip */}
        <line x1="12" y1="16" x2="12" y2="21" stroke="#C8B89A" strokeWidth="1.2" strokeLinecap="round" />
        {/* Pommel */}
        <circle cx="12" cy="22" r="1.2" fill="#B8962E" />
      </svg>
    </div>
  )
}

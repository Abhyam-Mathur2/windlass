import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const numericTarget = parseInt(target.replace(/,/g, ''))
      if (isNaN(numericTarget)) { setCount(target); return }

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        // Ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(eased * numericTarget))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref} className="stat-number">{typeof count === 'number' ? count.toLocaleString() : count}{suffix}</span>
}

const stats = [
  { value: "80",  suffix: "+", label: "YEARS" },
  { value: "500", suffix: "+", label: "CRAFTSMEN" },
  { value: "6",   suffix: "",  label: "CONTINENTS" },
  { value: "WORLD'S LARGEST", suffix: "", label: "SWORD MANUFACTURER" }
]

export default function StatsStrip() {
  return (
    <div className="bg-iron-dark border-y border-aged-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center px-4">
                <div className="font-headlines text-4xl md:text-5xl text-aged-gold mb-2 tracking-tighter">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-parchment tracking-[0.2em] text-[10px]">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block h-16 w-[1px] bg-aged-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

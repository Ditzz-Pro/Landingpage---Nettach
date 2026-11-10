'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

/** Muncul halus saat masuk viewport (sekali saja). */
export function Reveal({ children, delay = 0, y = 28, as = 'div', className = '' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  )
}

/** Tautan/tombol magnetic: tertarik ke kursor, kembali dengan pegas. */
export function MagneticLink({ href, children, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  const ext = href.startsWith('http')
  return (
    <motion.a
      href={href}
      target={ext ? '_blank' : undefined}
      rel={ext ? 'noopener noreferrer' : undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.25)
        y.set((e.clientY - r.top - r.height / 2) * 0.35)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full font-bold transition-shadow hover:shadow-glow ${className}`}
    >
      {children}
    </motion.a>
  )
}

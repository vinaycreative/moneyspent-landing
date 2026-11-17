"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

interface RotatingWordProps {
  texts: string[]
  rotationInterval?: number
  className?: string
}

export function RotatingWord({
  texts = ["rupee", "dollar", "euro", "pound", "dinar"],
  rotationInterval = 2800,
  className = "",
}: RotatingWordProps) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || texts.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)
    return () => clearInterval(interval)
  }, [texts.length, rotationInterval, reduceMotion])

  // Find the longest word to permanently anchor the badge width (0 CLS)
  const longestWord = useMemo(() => {
    return texts.reduce((a, b) => (a.length >= b.length ? a : b), texts[0] || "")
  }, [texts])

  const currentWord = texts[index] || texts[0]

  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-lp-em-soft text-lp-em px-2.5 sm:px-3.5 py-0.5 sm:py-1 align-middle select-none font-semibold ${className}`}
      style={{
        lineHeight: 1.15,
        verticalAlign: "middle",
      }}
    >
      {/* Invisible anchor element keeps badge width fixed to longest word permanently — zero layout shift */}
      <span aria-hidden="true" className="invisible opacity-0 select-none pointer-events-none whitespace-nowrap">
        {longestWord}
      </span>

      {/* Screen reader announces the live changing text */}
      <span className="sr-only">{currentWord}</span>

      {/* Animated word layer */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentWord}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "90%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-90%" }}
            transition={{
              y: { type: "spring", damping: 26, stiffness: 320, mass: 0.6 },
              opacity: { duration: 0.25, ease: "easeInOut" },
            }}
            className="inline-block whitespace-nowrap font-semibold text-center"
            aria-hidden="true"
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </div>
    </span>
  )
}

export default RotatingWord

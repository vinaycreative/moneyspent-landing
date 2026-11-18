"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

interface ProofItemProps {
  label: string
  detail: string
  renderIcon: (hovered: boolean) => React.ReactNode
}

function AnimatedClock({ hovered }: { hovered: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
    >
      <circle cx="12" cy="12" r="10" />
      {/* Minute hand spinning around center */}
      <motion.line
        x1="12"
        y1="12"
        x2="12"
        y2="6"
        animate={hovered && !reduceMotion ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* Hour hand spinning faster */}
      <motion.line
        x1="12"
        y1="12"
        x2="16"
        y2="13"
        animate={hovered && !reduceMotion ? { rotate: 720 } : { rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  )
}

function AnimatedLock({ hovered }: { hovered: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
    >
      {/* Shackle lifts and snaps */}
      <motion.path
        d="M7 11V7a5 5 0 0 1 10 0v4"
        animate={
          hovered && !reduceMotion
            ? { y: [0, -4, 0], rotate: [0, -10, 0] }
            : { y: 0, rotate: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originX: "16px", originY: "11px" }}
      />
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M12 15v3" />
    </svg>
  )
}

function AnimatedWallet({ hovered }: { hovered: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
    >
      {/* Card inside pops up */}
      <motion.rect
        x="6"
        y="3"
        width="11"
        height="5"
        rx="1"
        animate={hovered && !reduceMotion ? { y: -3 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="fill-current/10"
      />
      {/* Wallet body */}
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function AnimatedCheck({ hovered }: { hovered: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
    >
      {/* Checkmark draws itself on hover */}
      <motion.path
        d="M20 6 9 17l-5-5"
        animate={
          hovered && !reduceMotion
            ? { pathLength: [0, 1], scale: [0.9, 1.08, 1] }
            : { pathLength: 1, scale: 1 }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </svg>
  )
}

const PROOF_ITEMS: ProofItemProps[] = [
  {
    label: "3-second entry",
    detail: "Sentence-first quick logging",
    renderIcon: (hovered) => <AnimatedClock hovered={hovered} />,
  },
  {
    label: "Zero bank logins",
    detail: "Private & on-device encrypted",
    renderIcon: (hovered) => <AnimatedLock hovered={hovered} />,
  },
  {
    label: "Multi-account",
    detail: "Bank, cards, UPI & cash balances",
    renderIcon: (hovered) => <AnimatedWallet hovered={hovered} />,
  },
  {
    label: "100% Free forever",
    detail: "No ads, cards, or paywalls",
    renderIcon: (hovered) => <AnimatedCheck hovered={hovered} />,
  },
]

export function ProofStrip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <div
      role="region"
      aria-label="Product highlights"
      className="border-y border-lp-line/80 bg-lp-bg select-none"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 divide-y divide-lp-line/60 sm:divide-y-0 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-lp-line/80"
        >
          {PROOF_ITEMS.map((item, index) => {
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex items-center gap-3.5 sm:gap-4 py-4.5 sm:py-5 cursor-default transition-all duration-200 ${
                  index % 2 !== 0 ? "pl-4 sm:pl-6" : "pr-4 sm:pr-6"
                } ${
                  index === 0
                    ? "lg:pl-0 lg:pr-6"
                    : index === PROOF_ITEMS.length - 1
                      ? "lg:pl-6 lg:pr-0"
                      : "lg:px-6"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border shadow-xs transition-all duration-200 ${
                    isHovered
                      ? "border-lp-em/40 text-lp-em bg-lp-card -translate-y-0.5 shadow-sm"
                      : "border-lp-line/80 bg-lp-card text-lp-ink-soft"
                  }`}
                >
                  {item.renderIcon(isHovered)}
                </div>
                <div className="min-w-0">
                  <div
                    className={`truncate text-[13.5px] font-semibold leading-tight transition-colors duration-200 ${
                      isHovered ? "text-lp-ink" : "text-lp-ink"
                    } sm:text-[14px]`}
                  >
                    {item.label}
                  </div>
                  <div className="mt-0.5 truncate text-[11.5px] text-lp-ink-mute sm:text-[12px]">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Building2, CreditCard, Eye, EyeOff, Lock, ShieldCheck } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const points = [
  {
    icon: Lock,
    title: "Private by design",
    desc: "Your money data stays yours. No ads, no selling your spending habits, and zero bank logins required.",
  },
  {
    icon: EyeOff,
    title: "Hide when you need to",
    desc: "Blur balances on demand with Ghost Mode so sensitive numbers stay off curious screens in public.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    desc: "Export your records anytime to clean CSV or JSON. Complete data sovereignty with no lock-in.",
  },
]

/**
 * Mechanical odometer-style number animation that rolls each digit through
 * intermediate numbers when toggling between Ghost Mode (hidden dots) and plain numbers.
 */
function RollingPrivacyNumber({
  value,
  ghostMode,
  className = "",
  digitClassName = "",
  dotClassName = "text-lp-em font-bold",
}: {
  value: string
  ghostMode: boolean
  className?: string
  digitClassName?: string
  dotClassName?: string
}) {
  const reduceMotion = useReducedMotion()
  const characters = value.split("")

  return (
    <span
      className={`inline-flex items-baseline font-mono select-none tracking-tight ${className}`}
      style={{ fontVariantNumeric: "tabular-nums" }}
      aria-label={ghostMode ? "Balance hidden" : value}
    >
      {characters.map((char, index) => {
        const isDigit = char >= "0" && char <= "9"
        const num = isDigit ? Number(char) : 0
        // Vertical reel: starts with '•', intermediate numbers, ends on real character
        const reel = isDigit
          ? ["•", String((num + 3) % 10), String((num + 7) % 10), char]
          : ["•", char]

        const translatePercent = ghostMode ? 0 : -((reel.length - 1) * (100 / reel.length))

        return (
          <span
            key={index}
            className="relative inline-block h-[1.18em] overflow-hidden leading-none align-baseline"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            }}
          >
            <span
              className="flex flex-col transition-transform will-change-transform"
              style={{
                transform: `translateY(${translatePercent}%)`,
                transitionDuration: reduceMotion ? "0ms" : `${380 + index * 30}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {reel.map((item, idx) => {
                const isDot = item === "•"
                return (
                  <span
                    key={idx}
                    className={`flex h-[1.18em] items-center justify-center leading-none ${
                      isDot ? dotClassName : digitClassName
                    }`}
                  >
                    {item}
                  </span>
                )
              })}
            </span>
          </span>
        )
      })}
    </span>
  )
}

export function PrivacySection() {
  const reduceMotion = useReducedMotion()
  const [ghostMode, setGhostMode] = useState(true)

  return (
    <section id="privacy" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-lp-line bg-lp-card p-8 shadow-[var(--lp-shadow-sm)] sm:p-10 lg:p-12"
        >
          {/* Soft ambient tint matching theme */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--lp-em)_7%,transparent),transparent_65%)]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* Left: Trust narrative & points */}
            <div>
              <h2 className="lp-display mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-lp-ink sm:text-[38px]">
                Your finances deserve a quiet room.
              </h2>
              <p className="mt-3.5 max-w-md text-[15px] leading-relaxed text-lp-ink-soft sm:text-base">
                Built for personal clarity — not attention, ads, or data harvesting.
              </p>

              <ul className="mt-8 space-y-4">
                {points.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lp-em-soft text-lp-em">
                      <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-tight text-lp-ink">
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-lp-ink-mute">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Calm, theme-adaptive preview card with mechanical number odometer */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] rounded-2xl border border-lp-line bg-lp-bg-2/50 p-5 sm:p-6">
                {/* Header with tactile toggle switch */}
                <div className="flex items-center justify-between border-b border-lp-line pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-lp-em-soft text-lp-em">
                      <Lock size={12} strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-semibold text-lp-ink">Private Vault</span>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={ghostMode}
                    onClick={() => setGhostMode((prev) => !prev)}
                    className="group flex items-center gap-2 rounded-full border border-lp-line bg-lp-card py-1 pl-2.5 pr-1.5 text-[11px] font-medium text-lp-ink-soft shadow-2xs transition-all hover:border-lp-em/30 hover:text-lp-ink active:scale-98"
                  >
                    <span className="flex items-center gap-1.5">
                      {ghostMode ? (
                        <EyeOff size={12} className="text-lp-em transition-colors" />
                      ) : (
                        <Eye size={12} className="text-lp-ink-mute transition-colors" />
                      )}
                      <span>Ghost Mode</span>
                    </span>

                    {/* Smooth sliding knob */}
                    <span
                      className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-200 ease-out ${
                        ghostMode
                          ? "bg-lp-em"
                          : "border border-lp-line bg-lp-bg-2 dark:bg-white/10"
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 rounded-full bg-white shadow-xs transition-transform duration-200 ease-out ${
                          ghostMode ? "translate-x-3.5" : "translate-x-0.5"
                        }`}
                      />
                    </span>
                  </button>
                </div>

                {/* Big Balance display with rolling number ticker */}
                <div className="mt-4 rounded-xl border border-lp-line/70 bg-lp-card p-4 text-center shadow-2xs">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-lp-ink-mute">
                    Total Balance
                  </span>

                  <div className="mt-2.5 flex h-9 items-center justify-center">
                    <RollingPrivacyNumber
                      value="₹2,48,500"
                      ghostMode={ghostMode}
                      className="text-2xl font-bold"
                      digitClassName="text-lp-ink"
                      dotClassName="text-lp-em font-bold text-xl tracking-wider"
                    />
                  </div>

                  <p className="mt-2 text-[11px] text-lp-ink-mute">
                    {ghostMode ? "Balances hidden in public" : "3 accounts · 100% On-device"}
                  </p>
                </div>

                {/* Account rows with rolling numbers */}
                <div className="mt-3 space-y-1">
                  {/* HDFC Salary */}
                  <div className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-lp-line bg-lp-card text-lp-em">
                        <Building2 size={13} />
                      </span>
                      <span className="font-medium text-lp-ink">HDFC Salary</span>
                    </div>

                    <div className="flex h-5 items-center justify-end">
                      <RollingPrivacyNumber
                        value="₹1,42,000"
                        ghostMode={ghostMode}
                        className="text-xs"
                        digitClassName="text-lp-ink-soft font-medium"
                        dotClassName="text-lp-em font-bold text-[12px] tracking-wider"
                      />
                    </div>
                  </div>

                  {/* Fi Savings */}
                  <div className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-lp-line bg-lp-card text-lp-indigo">
                        <CreditCard size={13} />
                      </span>
                      <span className="font-medium text-lp-ink">Fi Savings</span>
                    </div>

                    <div className="flex h-5 items-center justify-end">
                      <RollingPrivacyNumber
                        value="₹84,500"
                        ghostMode={ghostMode}
                        className="text-xs"
                        digitClassName="text-lp-ink-soft font-medium"
                        dotClassName="text-lp-em font-bold text-[12px] tracking-wider"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-lp-line pt-3 text-[11px] text-lp-ink-mute">
                  <span className="flex items-center gap-1.5 font-medium text-lp-ink-soft">
                    <ShieldCheck size={13} className="text-lp-em" />
                    100% On-Device
                  </span>
                  <span>Zero Bank Logins</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

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

            {/* Right: Calm, theme-adaptive preview card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] rounded-2xl border border-lp-line bg-lp-bg-2/50 p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-lp-line pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-lp-em-soft text-lp-em">
                      <Lock size={12} strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-semibold text-lp-ink">Private Vault</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGhostMode((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-lp-line bg-lp-card px-2.5 py-1 text-[11px] font-medium text-lp-ink-soft transition-colors hover:border-lp-em/30 hover:text-lp-ink"
                  >
                    {ghostMode ? (
                      <>
                        <EyeOff size={12} className="text-lp-em" />
                        <span>Ghost Mode ON</span>
                      </>
                    ) : (
                      <>
                        <Eye size={12} />
                        <span>Ghost Mode OFF</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Balance display */}
                <div className="mt-4 rounded-xl border border-lp-line/70 bg-lp-card p-4 text-center shadow-2xs">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-lp-ink-mute">
                    Total Balance
                  </span>
                  <div className="mt-2 flex items-center justify-center">
                    {ghostMode ? (
                      <span className="rounded-full bg-lp-em-soft px-3 py-1 font-mono text-base font-bold tracking-widest text-lp-em">
                        ••••••••
                      </span>
                    ) : (
                      <span className="font-mono text-2xl font-bold tracking-tight text-lp-ink">
                        ₹2,48,500
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[11px] text-lp-ink-mute">
                    {ghostMode ? "Balances hidden in public" : "3 accounts · 100% On-device"}
                  </p>
                </div>

                {/* Account rows */}
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-lp-line bg-lp-card text-lp-em">
                        <Building2 size={13} />
                      </span>
                      <span className="font-medium text-lp-ink">HDFC Salary</span>
                    </div>
                    <span className="font-mono text-xs text-lp-ink-mute">
                      {ghostMode ? "••••••" : "₹1,42,000"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-lp-line bg-lp-card text-lp-indigo">
                        <CreditCard size={13} />
                      </span>
                      <span className="font-medium text-lp-ink">Fi Savings</span>
                    </div>
                    <span className="font-mono text-xs text-lp-ink-mute">
                      {ghostMode ? "••••••" : "₹84,500"}
                    </span>
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

"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Check, Coffee, UtensilsCrossed, ShoppingBag, Car } from "lucide-react"

interface Preset {
  id: string
  label: string
  amount: string
  category: string
  merchant: string
  account: string
  categorySpent: string
  categoryLimit: string
  categoryPercent: number
  accountAfter: string
  icon: typeof UtensilsCrossed
}

const PRESETS: Preset[] = [
  {
    id: "dinner",
    label: "Dinner out",
    amount: "₹450",
    category: "Food",
    merchant: "Burger King",
    account: "HDFC Bank",
    categorySpent: "₹14,200",
    categoryLimit: "₹20,000",
    categoryPercent: 71,
    accountAfter: "₹1,42,350",
    icon: UtensilsCrossed,
  },
  {
    id: "coffee",
    label: "Coffee run",
    amount: "₹40",
    category: "Snacks",
    merchant: "Chai Point",
    account: "Cash Wallet",
    categorySpent: "₹2,840",
    categoryLimit: "₹4,000",
    categoryPercent: 71,
    accountAfter: "₹4,160",
    icon: Coffee,
  },
  {
    id: "groceries",
    label: "Groceries",
    amount: "₹1,250",
    category: "Groceries",
    merchant: "Blinkit",
    account: "Fi UPI",
    categorySpent: "₹8,450",
    categoryLimit: "₹12,000",
    categoryPercent: 70,
    accountAfter: "₹63,750",
    icon: ShoppingBag,
  },
  {
    id: "cab",
    label: "Cab ride",
    amount: "₹280",
    category: "Travel",
    merchant: "Uber",
    account: "SBI Card",
    categorySpent: "₹4,800",
    categoryLimit: "₹8,000",
    categoryPercent: 60,
    accountAfter: "₹18,120",
    icon: Car,
  },
]

export function SentenceSection({}: { sentenceWords?: unknown } = {}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const reduceMotion = useReducedMotion()
  const current = PRESETS[activeIdx]
  const IconComponent = current.icon

  return (
    <section id="sentence" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[620px]">
          <p className="lp-section-label">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Quick logging
          </p>
          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
            Add spends like
            <br />
            writing a note.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            One short sentence, a few taps, and your expense is saved — without filling a six-field form for every coffee.
          </p>
        </div>

        {/* ── High-Craft Stageshow Specimen: Composer + Live Ledger ── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8 items-start">
          {/* Left: The Sentence Composer (Cause) */}
          <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-lp-line bg-lp-card p-6 sm:p-8 lg:p-9 shadow-[var(--lp-shadow-sm)] min-h-[380px]">
            <div>
              {/* Native Scenario Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-lp-line/70 bg-lp-bg-2/70 p-1 w-fit">
                {PRESETS.map((preset, idx) => {
                  const active = activeIdx === idx
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`rounded-lg px-3 py-1.5 text-[12px] sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-lp-card text-lp-ink shadow-xs border border-lp-line/80 font-semibold"
                          : "text-lp-ink-mute hover:text-lp-ink"
                      }`}
                    >
                      {preset.label}
                    </button>
                  )
                })}
              </div>

              {/* The Natural Sentence Input */}
              <div className="mt-8 mb-6 sm:mt-10 sm:mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="lp-serif text-[24px] sm:text-[30px] lg:text-[34px] font-medium leading-[1.55] tracking-[-0.015em] text-lp-ink"
                  >
                    I spent{" "}
                    <span className="inline-block rounded-lg bg-lp-em-tint px-2.5 py-0.5 font-semibold text-lp-em-deep">
                      {current.amount}
                    </span>{" "}
                    on{" "}
                    <span className="inline-block rounded-lg bg-lp-em-tint px-2.5 py-0.5 font-semibold text-lp-em-deep">
                      {current.category}
                    </span>{" "}
                    at{" "}
                    <span className="inline-block rounded-lg bg-lp-ink/6 px-2.5 py-0.5 font-semibold text-lp-ink">
                      {current.merchant}
                    </span>{" "}
                    paid with{" "}
                    <span className="inline-block rounded-lg bg-lp-ink/6 px-2.5 py-0.5 font-semibold text-lp-ink">
                      {current.account}
                    </span>
                    .
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Micro Interaction Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-lp-line/80 pt-5 text-[12px] sm:text-[13px]">
              <span className="text-lp-ink-mute">
                Each token auto-categorizes amount, merchant & account
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-lp-em-soft px-3 py-1 font-semibold text-lp-em">
                <Check className="h-3.5 w-3.5" />
                <span>Logged in 2s</span>
              </span>
            </div>
          </div>

          {/* Right: The Live Ledger Impact (Effect / Satellite) */}
          <div className="flex flex-col gap-3.5 rounded-2xl sm:rounded-3xl border border-lp-line bg-lp-bg-2/50 p-5 sm:p-7">
            <div className="flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-wider text-lp-ink-mute">
              <span>Immediate impact</span>
              <span className="text-lp-em font-semibold lowercase tracking-normal">synced</span>
            </div>

            {/* 1. Transaction Card */}
            <div className="rounded-xl border border-lp-line bg-lp-card p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lp-em-soft text-lp-em">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] sm:text-[14px] font-semibold text-lp-ink">
                      {current.merchant}
                    </div>
                    <div className="truncate text-[11px] sm:text-[12px] text-lp-ink-mute">
                      {current.category} · {current.account}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[14px] sm:text-[15px] font-bold tabular-nums text-rose-600 dark:text-rose-400">
                    −{current.amount}
                  </div>
                  <div className="text-[10px] text-lp-ink-mute">Just now</div>
                </div>
              </div>
            </div>

            {/* 2. Monthly Category Budget Rollup */}
            <div className="rounded-xl border border-lp-line bg-lp-card p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between text-[12px] font-medium text-lp-ink">
                <span>{current.category} budget</span>
                <span className="tabular-nums font-semibold">
                  {current.categorySpent}{" "}
                  <span className="font-normal text-lp-ink-mute">/ {current.categoryLimit}</span>
                </span>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-lp-line">
                <div
                  className="h-full rounded-full bg-lp-em transition-all duration-500 ease-out"
                  style={{ width: `${current.categoryPercent}%` }}
                />
              </div>
            </div>

            {/* 3. Account Balance Deduction */}
            <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-4 py-3 shadow-xs">
              <div>
                <div className="text-[13px] font-semibold text-lp-ink">{current.account}</div>
                <div className="text-[11px] text-lp-ink-mute">Available balance</div>
              </div>
              <div className="text-right">
                <div className="text-[14px] font-bold tabular-nums text-lp-ink">
                  {current.accountAfter}
                </div>
                <div className="text-[10px] font-medium text-lp-em">Balance updated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

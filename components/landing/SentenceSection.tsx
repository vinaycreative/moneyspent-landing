"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import {
  Check,
  ChevronDown,
  Calendar,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Car,
  Clock,
  ArrowRight,
} from "lucide-react"

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
    id: "burger-king",
    label: "Burger King",
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
    id: "chai-point",
    label: "Chai Point",
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
    id: "blinkit",
    label: "Blinkit",
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
    id: "uber",
    label: "Uber",
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
  const [saved, setSaved] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = PRESETS[activeIdx]
  const IconComponent = current.icon

  const handleSelectPreset = (idx: number) => {
    setActiveIdx(idx)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <section id="sentence" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-[560px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lp-section-label">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Quick logging
          </p>
          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
            Add spends like
            <br />
            writing a note.
          </h2>
          <p className="mt-4 max-w-[480px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            One sentence, a few taps, and your expense is saved — without a form for every coffee.
          </p>
        </motion.div>

        {/* ── Side-by-Side Comparison: Typical Apps vs MoneySpent ── */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6 items-stretch">
          {/* Card 1: Typical Apps (Friction & Bureaucracy) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-lp-line bg-lp-bg-2/50 p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex rounded-md bg-lp-ink/6 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-lp-ink-mute">
                  Typical apps
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-lp-ink-mute">
                  <Clock className="h-3 w-3" />
                  ~28s per coffee
                </span>
              </div>

              <h3 className="lp-display mt-4 text-xl font-semibold text-lp-ink sm:text-2xl">
                A form for every coffee.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
                Amount, category, payment method, merchant, note, date. Six mandatory dropdowns
                before you can even save.
              </p>

              {/* The Static Clunky Form Fields */}
              <div className="mt-6 flex flex-col gap-2.5">
                <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs shadow-2xs">
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    Amount <span className="text-rose-500">*</span>
                  </span>
                  <span className="font-mono font-medium text-lp-ink-tert">₹0.00</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs shadow-2xs">
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    Category <span className="text-rose-500">*</span>
                  </span>
                  <span className="flex items-center gap-1 text-lp-ink-tert">
                    Select category… <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs shadow-2xs">
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    Account <span className="text-rose-500">*</span>
                  </span>
                  <span className="flex items-center gap-1 text-lp-ink-tert">
                    Choose account… <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs shadow-2xs">
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    Merchant
                  </span>
                  <span className="text-lp-ink-tert">Optional name…</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs shadow-2xs">
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    Date & Time
                  </span>
                  <span className="flex items-center gap-1 text-lp-ink-tert">
                    <Calendar className="h-3 w-3 opacity-60" /> Today, 8:42 pm
                  </span>
                </div>
              </div>
            </div>

            {/* Clunky Save Button & Abandonment note */}
            <div className="mt-6 border-t border-lp-line/70 pt-4">
              <div className="rounded-xl border border-lp-line bg-lp-ink/5 py-2.5 text-center text-xs font-semibold text-lp-ink-mute">
                Save Transaction (Required fields missing)
              </div>
              <p className="mt-2.5 text-center text-[11px] text-lp-ink-tert">
                High friction leads to skipped entries and abandoned tracking.
              </p>
            </div>
          </motion.div>

          {/* Card 2: MoneySpent (Natural Sentence Flow) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-lp-line bg-lp-card p-6 sm:p-8 shadow-[var(--lp-shadow-sm)] hover:shadow-[var(--lp-shadow-md)] transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex rounded-md bg-lp-em-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-lp-em-deep">
                  MoneySpent
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-lp-em">
                  <Check className="h-3 w-3" />
                  ~2s instant flow
                </span>
              </div>

              <h3 className="lp-display mt-4 text-xl font-semibold text-lp-ink sm:text-2xl">
                One sentence. Done.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
                Tap a preset or write naturally. Amount, category, and account extract in real-time
                and balance your ledger.
              </p>

              {/* Preset Selector Chips */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {PRESETS.map((p, idx) => {
                  const active = activeIdx === idx
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectPreset(idx)}
                      className={`rounded-lg px-2.5 py-1 text-[11px] sm:text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-lp-ink text-lp-bg shadow-xs font-semibold"
                          : "border border-lp-line bg-lp-bg-2/60 text-lp-ink-soft hover:bg-lp-bg-2 hover:text-lp-ink"
                      }`}
                    >
                      {p.label}
                    </button>
                  )
                })}
              </div>

              {/* The Dynamic Sentence Box */}
              <div className="mt-5 rounded-2xl border border-lp-line/80 bg-lp-bg-2/30 p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="lp-serif text-[18px] sm:text-[21px] font-medium leading-[1.6] text-lp-ink"
                  >
                    I spent{" "}
                    <span className="inline-block rounded-md bg-lp-em-tint px-2 py-0.5 font-bold text-lp-em-deep border border-lp-em/30">
                      {current.amount}
                    </span>{" "}
                    on{" "}
                    <span className="inline-block rounded-md bg-lp-em-tint px-2 py-0.5 font-bold text-lp-em-deep border border-lp-em/30">
                      {current.category}
                    </span>{" "}
                    at{" "}
                    <span className="inline-block rounded-md bg-lp-ink/6 px-2 py-0.5 font-bold text-lp-ink border border-lp-line">
                      {current.merchant}
                    </span>{" "}
                    paid with{" "}
                    <span className="inline-block rounded-md bg-lp-ink/6 px-2 py-0.5 font-bold text-lp-ink border border-lp-line">
                      {current.account}
                    </span>
                    .
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Live Parsed Transaction Result */}
              <div className="mt-3.5 rounded-xl border border-lp-line bg-lp-card p-3 shadow-2xs">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lp-em-soft text-lp-em">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[12px] font-semibold text-lp-ink">
                        {current.merchant}
                      </div>
                      <div className="truncate text-[10px] text-lp-ink-mute">
                        {current.category} · {current.account}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[13px] font-bold tabular-nums text-rose-600 dark:text-rose-400">
                      −{current.amount}
                    </span>
                    <div className="text-[10px] text-lp-em font-medium">Logged & synced</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-6 border-t border-lp-line/80 pt-4 flex items-center justify-between gap-2">
              <span className="text-[12px] text-lp-ink-mute">
                4 taps to amount + save.
              </span>
              <button
                type="button"
                onClick={() => handleSelectPreset((activeIdx + 1) % PRESETS.length)}
                className="group inline-flex items-center gap-1.5 rounded-full bg-lp-ink px-4 py-1.5 text-[12px] font-semibold text-lp-bg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 cursor-pointer"
              >
                <span>{saved ? "Saved in 1.4s!" : "Try next spend"}</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

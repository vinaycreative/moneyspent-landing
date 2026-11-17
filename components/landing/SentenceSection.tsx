"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import {
  Check,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Car,
  ArrowRight,
  Sparkles,
} from "lucide-react"

interface Scenario {
  id: string
  label: string
  amount: string
  amountNum: number
  category: string
  merchant: string
  account: string
  icon: typeof UtensilsCrossed
  categorySpent: string
  categoryLimit: string
  categoryPercent: number
  accountBalance: string
  todayTotalBefore: string
  todayTotalAfter: string
}

const SCENARIOS: Scenario[] = [
  {
    id: "burger-king",
    label: "Lunch with team",
    amount: "₹450",
    amountNum: 450,
    category: "Food & Dining",
    merchant: "Burger King",
    account: "HDFC Bank",
    icon: UtensilsCrossed,
    categorySpent: "₹14,200",
    categoryLimit: "₹20,000",
    categoryPercent: 71,
    accountBalance: "₹1,42,350",
    todayTotalBefore: "₹1,240",
    todayTotalAfter: "₹1,690",
  },
  {
    id: "chai-point",
    label: "Morning chai",
    amount: "₹40",
    amountNum: 40,
    category: "Snacks & Coffee",
    merchant: "Chai Point",
    account: "Cash Wallet",
    icon: Coffee,
    categorySpent: "₹2,840",
    categoryLimit: "₹4,000",
    categoryPercent: 71,
    accountBalance: "₹4,160",
    todayTotalBefore: "₹1,240",
    todayTotalAfter: "₹1,280",
  },
  {
    id: "blinkit",
    label: "Quick groceries",
    amount: "₹1,250",
    amountNum: 1250,
    category: "Groceries",
    merchant: "Blinkit",
    account: "Fi UPI",
    icon: ShoppingBag,
    categorySpent: "₹8,450",
    categoryLimit: "₹12,000",
    categoryPercent: 70,
    accountBalance: "₹63,750",
    todayTotalBefore: "₹1,240",
    todayTotalAfter: "₹2,490",
  },
  {
    id: "uber",
    label: "Late night cab",
    amount: "₹280",
    amountNum: 280,
    category: "Travel & Commute",
    merchant: "Uber",
    account: "SBI Card",
    icon: Car,
    categorySpent: "₹4,800",
    categoryLimit: "₹8,000",
    categoryPercent: 60,
    accountBalance: "₹18,120",
    todayTotalBefore: "₹1,240",
    todayTotalAfter: "₹1,520",
  },
]

export function SentenceSection({}: { sentenceWords?: unknown } = {}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [saved, setSaved] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = SCENARIOS[activeIdx]
  const IconComponent = current.icon

  const handleSelectScenario = (idx: number) => {
    setActiveIdx(idx)
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2400)
  }

  return (
    <section id="sentence" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="lp-section-label justify-center">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Natural Language Logging
          </p>
          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[46px] lg:text-[54px]">
            Add spends like writing a note.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            One short sentence. MoneySpent parses amount, category, and account in real time—instantly balancing your ledger and budgets.
          </p>
        </div>

        {/* ── Single Focused Stageshow Product Stage (Linear / Copilot Craft) ── */}
        <div className="relative mx-auto mt-12 max-w-[960px] rounded-3xl sm:rounded-[32px] border border-lp-line bg-lp-card shadow-[var(--lp-shadow-md)] overflow-hidden">
          {/* Stage Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lp-line/80 px-6 py-4 sm:px-8 bg-lp-bg-2/40">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-lp-em" />
              <span className="text-xs font-semibold text-lp-ink">MoneySpent Quick Note</span>
              <span className="hidden sm:inline-block text-[11px] text-lp-ink-mute">
                · Interactive Preview
              </span>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="flex items-center gap-1.5 rounded-xl border border-lp-line/70 bg-lp-card p-1 shadow-2xs">
              {SCENARIOS.map((s, idx) => {
                const active = activeIdx === idx
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleSelectScenario(idx)}
                    className={`rounded-lg px-3 py-1.5 text-[11px] sm:text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-lp-ink text-lp-bg shadow-xs font-semibold"
                        : "text-lp-ink-mute hover:text-lp-ink"
                    }`}
                  >
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Hero Note Composer Canvas */}
          <div className="p-6 sm:p-10 lg:p-12 border-b border-lp-line/80 bg-gradient-to-b from-lp-bg-2/15 to-transparent">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-md bg-lp-em-soft px-2 py-0.5 text-[11px] font-semibold text-lp-em-deep">
                <Sparkles className="h-3 w-3" />
                Natural input
              </span>
              <span className="text-[12px] text-lp-ink-mute">
                Type or tap any scenario above
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="lp-serif text-[24px] sm:text-[32px] lg:text-[38px] font-medium leading-[1.45] tracking-[-0.018em] text-lp-ink"
              >
                I spent{" "}
                <span className="inline-block rounded-xl bg-lp-em-tint px-3 py-1 font-bold text-lp-em-deep border border-lp-em/30 shadow-2xs">
                  {current.amount}
                </span>{" "}
                on{" "}
                <span className="inline-block rounded-xl bg-lp-em-tint px-3 py-1 font-bold text-lp-em-deep border border-lp-em/30 shadow-2xs">
                  {current.category}
                </span>{" "}
                at{" "}
                <span className="inline-block rounded-xl bg-lp-bg-2 px-3 py-1 font-bold text-lp-ink border border-lp-line shadow-2xs">
                  {current.merchant}
                </span>{" "}
                paid with{" "}
                <span className="inline-block rounded-xl bg-lp-bg-2 px-3 py-1 font-bold text-lp-ink border border-lp-line shadow-2xs">
                  {current.account}
                </span>
                <span className="inline-block ml-0.5 text-lp-em font-light animate-pulse">|</span>
              </motion.div>
            </AnimatePresence>

            {/* Note Meta Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-lp-line/60">
              <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-lp-ink-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-lp-em" />
                <span>Zero spreadsheet forms · Instant category and account matching</span>
              </div>

              <button
                type="button"
                onClick={handleSave}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] ${
                  saved
                    ? "bg-lp-em text-white shadow-md shadow-emerald-900/20"
                    : "bg-lp-ink text-lp-bg hover:-translate-y-0.5 hover:shadow-sm"
                }`}
              >
                {saved ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Saved in 1.4s!</span>
                  </>
                ) : (
                  <>
                    <span>Log to ledger</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Live Ledger Downstream Payoff */}
          <div className="p-6 sm:p-8 bg-lp-bg-2/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-lp-ink-mute">
                Live ledger output
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-lp-em">
                <Check className="h-3 w-3" />
                Real-time sync
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Output 1: Recorded Transaction */}
              <div className="rounded-2xl border border-lp-line bg-lp-card p-4 shadow-xs">
                <div className="text-[11px] font-medium text-lp-ink-mute mb-2 flex items-center justify-between">
                  <span>TRANSACTION</span>
                  <span className="text-lp-em font-semibold">Just now</span>
                </div>
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lp-em-soft text-lp-em">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[13px] font-semibold text-lp-ink">
                        {current.merchant}
                      </div>
                      <div className="truncate text-[11px] text-lp-ink-mute">
                        {current.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[14px] font-bold tabular-nums text-rose-600 dark:text-rose-400">
                      −{current.amount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Output 2: Spent Today Total Rollup */}
              <div className="rounded-2xl border border-lp-line bg-lp-card p-4 shadow-xs">
                <div className="text-[11px] font-medium text-lp-ink-mute mb-2 flex items-center justify-between">
                  <span>SPENT TODAY</span>
                  <span className="text-[10px] font-semibold text-lp-ink-mute">
                    + {current.amount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[18px] font-bold tabular-nums text-lp-ink">
                      {current.todayTotalAfter}
                    </div>
                    <div className="text-[11px] text-lp-ink-mute line-through tabular-nums">
                      {current.todayTotalBefore}
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    On track
                  </span>
                </div>
              </div>

              {/* Output 3: Category Budget & Account Balance */}
              <div className="rounded-2xl border border-lp-line bg-lp-card p-4 shadow-xs">
                <div className="flex items-center justify-between text-[11px] font-medium text-lp-ink-mute mb-1.5">
                  <span className="truncate">{current.category}</span>
                  <span className="tabular-nums font-semibold text-lp-ink">
                    {current.categoryPercent}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-lp-line mb-3">
                  <div
                    className="h-full rounded-full bg-lp-em transition-all duration-500 ease-out"
                    style={{ width: `${current.categoryPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between border-t border-lp-line/60 pt-2 text-[11px]">
                  <span className="text-lp-ink-mute truncate">{current.account}</span>
                  <span className="tabular-nums font-semibold text-lp-ink">
                    {current.accountBalance}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Trust Bar */}
        <p className="mt-8 text-center text-[13px] text-lp-ink-mute">
          No bank logins · 100% private and stored on your device · Export to CSV anytime
        </p>
      </div>
    </section>
  )
}

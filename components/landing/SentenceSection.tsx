"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Check, CheckCircle2, Clock, XCircle } from "lucide-react"

interface Preset {
  id: string
  label: string
  icon: string
  amount: string
  category: string
  categorySpent: string
  categoryLimit: string
  categoryPercent: number
  merchant: string
  account: string
  accountBefore: string
  accountAfter: string
  timeToLog: string
}

const PRESETS: Preset[] = [
  {
    id: "burger-king",
    label: "Burger King",
    icon: "🍔",
    amount: "₹450",
    category: "Food",
    categorySpent: "₹14,200",
    categoryLimit: "₹20,000",
    categoryPercent: 71,
    merchant: "Burger King",
    account: "HDFC Bank",
    accountBefore: "₹1,42,800",
    accountAfter: "₹1,42,350",
    timeToLog: "2.1s",
  },
  {
    id: "chai-point",
    label: "Chai Point",
    icon: "☕",
    amount: "₹40",
    category: "Snacks",
    categorySpent: "₹2,840",
    categoryLimit: "₹4,000",
    categoryPercent: 71,
    merchant: "Chai Point",
    account: "Cash Wallet",
    accountBefore: "₹4,200",
    accountAfter: "₹4,160",
    timeToLog: "1.4s",
  },
  {
    id: "blinkit",
    label: "Blinkit Groceries",
    icon: "🛒",
    amount: "₹1,250",
    category: "Groceries",
    categorySpent: "₹8,450",
    categoryLimit: "₹12,000",
    categoryPercent: 70,
    merchant: "Blinkit",
    account: "Fi UPI",
    accountBefore: "₹65,000",
    accountAfter: "₹63,750",
    timeToLog: "2.8s",
  },
  {
    id: "uber",
    label: "Uber Ride",
    icon: "🚕",
    amount: "₹280",
    category: "Travel",
    categorySpent: "₹4,800",
    categoryLimit: "₹8,000",
    categoryPercent: 60,
    merchant: "Uber",
    account: "SBI Card",
    accountBefore: "₹18,400",
    accountAfter: "₹18,120",
    timeToLog: "1.9s",
  },
]

export function SentenceSection({}: { sentenceWords?: unknown } = {}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const reduceMotion = useReducedMotion()
  const current = PRESETS[activeIdx]

  return (
    <section id="sentence" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lp-line bg-lp-card/80 px-3.5 py-1 text-[12px] font-semibold text-lp-ink-soft shadow-xs backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-lp-em" />
            Natural Language Logging
          </div>

          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[50px]">
            Add spends like writing a note.
          </h2>

          <p className="mx-auto mt-4 text-base leading-relaxed text-lp-ink-soft sm:text-[17px]">
            One short sentence, a few taps, and your expense is safely recorded—without filling a six-field spreadsheet form for every coffee.
          </p>

          {/* Interactive Spend Preset Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {PRESETS.map((preset, idx) => {
              const active = activeIdx === idx
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "border-lp-ink bg-lp-ink text-lp-bg shadow-sm"
                      : "border-lp-line bg-lp-card/80 text-lp-ink hover:border-lp-line-strong hover:bg-lp-card"
                  }`}
                >
                  <span className="text-sm">{preset.icon}</span>
                  <span>{preset.label}</span>
                  <span
                    className={`tabular-nums ${
                      active ? "text-lp-bg/80" : "text-lp-ink-mute group-hover:text-lp-ink"
                    }`}
                  >
                    {preset.amount}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Unified Interactive Sentence Studio Canvas ── */}
        <div className="mt-10 rounded-[2rem] sm:rounded-[2.5rem] border border-lp-line/90 bg-lp-card p-5 sm:p-8 lg:p-10 shadow-[var(--lp-shadow-md)]">
          {/* Top Canvas Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lp-line/80 pb-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[11px] font-mono text-lp-ink-mute sm:text-[12px]">
                Sentence Composer · Live Parser
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-lp-line bg-lp-bg-2/80 px-2.5 py-0.5 text-[11px] font-medium text-lp-ink-soft">
                <Clock className="h-3 w-3 text-lp-em" />
                <span>{current.timeToLog} avg to record</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-lp-em-soft px-2.5 py-0.5 text-[11px] font-semibold text-lp-em">
                <Check className="h-3 w-3" />
                <span>Auto-categorized</span>
              </span>
            </div>
          </div>

          {/* The Sentence Display */}
          <div className="py-6 sm:py-8 lg:py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lp-display text-[22px] font-semibold leading-[1.5] tracking-[-0.02em] text-lp-ink sm:text-[30px] lg:text-[36px]"
              >
                I spent{" "}
                <span className="inline-block rounded-lg border-b-2 border-rose-500 bg-rose-500/10 px-2 py-0.5 font-bold text-rose-600 dark:text-rose-400">
                  {current.amount}
                </span>{" "}
                on{" "}
                <span className="inline-block rounded-lg border-b-2 border-amber-500 bg-amber-500/10 px-2 py-0.5 font-bold text-amber-700 dark:text-amber-300">
                  {current.category}
                </span>{" "}
                at{" "}
                <span className="inline-block rounded-lg border-b-2 border-indigo-500 bg-indigo-500/10 px-2 py-0.5 font-bold text-indigo-700 dark:text-indigo-300">
                  {current.merchant}
                </span>{" "}
                paid with{" "}
                <span className="inline-block rounded-lg border-b-2 border-emerald-500 bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-700 dark:text-emerald-300">
                  {current.account}
                </span>
                .
              </motion.div>
            </AnimatePresence>

            <p className="mt-3 text-[12px] sm:text-[13px] text-lp-ink-mute flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lp-em" />
              <span>Entity tokens extracted automatically: Amount, Category, Merchant, Account.</span>
            </p>
          </div>

          {/* The 3 Real-Time Downstream Impacts */}
          <div className="grid gap-3.5 sm:gap-4 md:grid-cols-3 border-t border-lp-line/80 pt-6">
            {/* Impact 1: Transaction Logged */}
            <div className="rounded-2xl border border-lp-line/80 bg-lp-bg-2/40 p-4 transition-all">
              <div className="flex items-center justify-between text-[11px] font-semibold text-lp-ink-mute">
                <span>TRANSACTION RECORDED</span>
                <span className="text-[10px] text-lp-em font-semibold">Just now</span>
              </div>
              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lp-card border border-lp-line text-base shadow-2xs">
                    {current.icon}
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold leading-tight text-lp-ink">
                      {current.merchant}
                    </div>
                    <div className="text-[11px] text-lp-ink-mute">
                      {current.category} · {current.account}
                    </div>
                  </div>
                </div>
                <span className="text-sm font-bold tabular-nums text-rose-600 dark:text-rose-400">
                  −{current.amount}
                </span>
              </div>
            </div>

            {/* Impact 2: Category Budget Rollup */}
            <div className="rounded-2xl border border-lp-line/80 bg-lp-bg-2/40 p-4 transition-all">
              <div className="flex items-center justify-between text-[11px] font-semibold text-lp-ink-mute">
                <span>MONTHLY CATEGORY</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  Under budget
                </span>
              </div>
              <div className="mt-2.5">
                <div className="flex items-center justify-between text-[12px] font-medium text-lp-ink">
                  <span>{current.category} Total</span>
                  <span className="tabular-nums font-semibold">
                    {current.categorySpent}{" "}
                    <span className="text-lp-ink-mute font-normal">/ {current.categoryLimit}</span>
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-lp-line/70">
                  <div
                    className="h-full bg-lp-em rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${current.categoryPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Impact 3: Account Balance Deduction */}
            <div className="rounded-2xl border border-lp-line/80 bg-lp-bg-2/40 p-4 transition-all">
              <div className="flex items-center justify-between text-[11px] font-semibold text-lp-ink-mute">
                <span>ACCOUNT BALANCE</span>
                <span className="text-[10px] text-lp-em font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Synced
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold leading-tight text-lp-ink">
                    {current.account}
                  </div>
                  <div className="text-[11px] text-lp-ink-mute">Current balance</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold tabular-nums text-lp-ink">
                    {current.accountAfter}
                  </div>
                  <div className="text-[10px] text-lp-ink-mute line-through tabular-nums">
                    {current.accountBefore}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Friction Comparison Banner */}
        <div className="mt-8 rounded-2xl border border-lp-line/70 bg-lp-card/60 p-4 sm:p-5 backdrop-blur-xs">
          <div className="grid gap-3 sm:grid-cols-2 sm:divide-x sm:divide-lp-line/80 items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <XCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-lp-ink">Traditional Expense Apps</p>
                <p className="text-[11px] text-lp-ink-mute">
                  6 mandatory dropdown fields · ~28s per spend · high logging friction
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:pl-6">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-lp-ink">The MoneySpent Way</p>
                <p className="text-[11px] text-lp-ink-mute">
                  1 natural sentence · ~2 seconds · instant multi-account ledger sync
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

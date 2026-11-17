"use client"

import { useState } from "react"
import { TrendingDown, PieChart } from "lucide-react"
import { Phone } from "@/components/stageshow/phone"
import { motion, useReducedMotion, type Variants } from "motion/react"

export function ScreenGallery() {
  const reduceMotion = useReducedMotion()
  const [activeScreen, setActiveScreen] = useState<0 | 1 | 2>(1)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const phoneVariants: Variants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 40,
      rotate: index === 0 ? -6 : index === 2 ? 6 : 0,
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotate: index === 0 ? -2.5 : index === 2 ? 2.5 : 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        bounce: 0.15,
      },
    }),
  }

  return (
    <section className="overflow-hidden py-16 lg:py-28 text-lp-ink">
      <div className="mx-auto max-w-[1160px] px-5 text-center sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lp-section-label mx-auto">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Product Showcase
          </p>
          <h2 className="lp-display mx-auto mt-3 max-w-[620px] text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[42px] lg:text-[48px]">
            Designed for clarity at every step.
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-relaxed text-lp-ink-mute sm:text-base">
            From three-tap logging to daily rollups and category breakdowns—experience personal finance without spreadsheet fatigue.
          </p>
        </motion.div>

        {/* Device Stage with Authentic Stageshow Pro Phones */}
        <div className="relative mx-auto mt-12 overflow-hidden rounded-[32px] border border-lp-line bg-lp-bg-2/50 px-4 py-12 sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-20 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,color-mix(in_srgb,var(--lp-em)_12%,transparent),transparent_70%)]"
          />

          <motion.div
            className="relative flex items-center justify-start gap-6 overflow-x-auto pb-4 scrollbar-hide sm:justify-center sm:gap-0 sm:overflow-visible sm:-space-x-12 md:-space-x-16"
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Phone 1 (Left): Sentence Logging Flow */}
            <motion.div
              custom={0}
              variants={phoneVariants}
              onClick={() => setActiveScreen(0)}
              className={`relative shrink-0 cursor-pointer transition-transform duration-500 ease-out sm:translate-y-6 sm:scale-[0.93] ${
                activeScreen === 0 ? "z-30 !scale-100 !translate-y-0" : "z-10 hover:z-20 hover:-translate-y-1"
              }`}
            >
              <div className="relative">
                <Phone
                  width={270}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className="shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <Screen1Logging />
                </Phone>
                <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-lp-line bg-lp-card/90 px-3 py-1 text-[11px] font-semibold text-lp-ink shadow-sm backdrop-blur-xs">
                  Fast Daily Logging
                </div>
              </div>
            </motion.div>

            {/* Phone 2 (Center Hero): Today's Command Center */}
            <motion.div
              custom={1}
              variants={phoneVariants}
              onClick={() => setActiveScreen(1)}
              className={`relative shrink-0 cursor-pointer transition-transform duration-500 ease-out sm:-translate-y-4 sm:scale-[1.08] ${
                activeScreen === 1 ? "z-30" : "z-20 hover:z-30"
              }`}
            >
              <div className="relative">
                <Phone
                  width={300}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className="shadow-[0_32px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
                >
                  <Screen2Dashboard />
                </Phone>
                <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-500/40 bg-lp-card px-3.5 py-1 text-[11px] font-bold text-lp-em shadow-md backdrop-blur-xs">
                  ★ Today&apos;s Spend
                </div>
              </div>
            </motion.div>

            {/* Phone 3 (Right): Insights & Accounts */}
            <motion.div
              custom={2}
              variants={phoneVariants}
              onClick={() => setActiveScreen(2)}
              className={`relative shrink-0 cursor-pointer transition-transform duration-500 ease-out sm:translate-y-6 sm:scale-[0.93] ${
                activeScreen === 2 ? "z-30 !scale-100 !translate-y-0" : "z-10 hover:z-20 hover:-translate-y-1"
              }`}
            >
              <div className="relative">
                <Phone
                  width={270}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className="shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <Screen3Insights />
                </Phone>
                <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-lp-line bg-lp-card/90 px-3 py-1 text-[11px] font-semibold text-lp-ink shadow-sm backdrop-blur-xs">
                  Insights & Accounts
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** Screen 1: Sentence Logging Sheet View */
function Screen1Logging() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-4 pt-10 text-white selection:bg-rose-900/60">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5 text-xs text-rose-400 font-bold uppercase tracking-wider">
          <TrendingDown size={14} />
          New Expense
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-400">
          Sentence Mode
        </span>
      </div>

      {/* The Sentence Card */}
      <div className="rounded-2xl border border-white/10 bg-[#171915] p-3.5 shadow-inner">
        <p className="text-[13px] font-medium leading-[1.4] text-neutral-300">
          I spent{" "}
          <span className="rounded-md bg-rose-500/20 px-1.5 py-0.5 font-bold text-rose-400 border-b border-rose-500">
            ₹320
          </span>{" "}
          on{" "}
          <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 font-bold text-amber-400 border-b border-amber-500">
            Coffee
          </span>{" "}
          at{" "}
          <span className="rounded-md bg-indigo-500/20 px-1.5 py-0.5 font-bold text-indigo-400 border-b border-indigo-500">
            Blue Tokai
          </span>{" "}
          from{" "}
          <span className="rounded-md bg-emerald-500/20 px-1.5 py-0.5 font-bold text-emerald-400 border-b border-emerald-500">
            Fi Account
          </span>
          .
        </p>
      </div>

      {/* Category Grid */}
      <div className="mt-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Popular Categories
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "☕", label: "Coffee", active: true },
            { icon: "🍔", label: "Food", active: false },
            { icon: "🚕", label: "Cab", active: false },
            { icon: "🛒", label: "Groceries", active: false },
            { icon: "⚡", label: "Bills", active: false },
            { icon: "🎬", label: "Cinema", active: false },
          ].map((c) => (
            <div
              key={c.label}
              className={`flex items-center gap-1.5 rounded-xl border p-2 text-[11px] font-medium ${
                c.active
                  ? "border-rose-500/50 bg-rose-500/15 text-rose-300"
                  : "border-white/5 bg-[#171915] text-neutral-400"
              }`}
            >
              <span>{c.icon}</span>
              <span className="truncate">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Account Selection */}
      <div className="mt-3">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Paid With
        </p>
        <div className="flex gap-1.5">
          {["Fi Account", "HDFC Card", "Cash"].map((acc, i) => (
            <span
              key={acc}
              className={`rounded-lg border px-2.5 py-1 text-[10px] font-semibold ${
                i === 0
                  ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300"
                  : "border-white/5 bg-[#171915] text-neutral-400"
              }`}
            >
              {acc}
            </span>
          ))}
        </div>
      </div>

      {/* Big Save Button */}
      <div className="mt-auto pb-6">
        <div className="w-full rounded-xl bg-rose-500 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-rose-950/50">
          Save Expense · ₹320
        </div>
      </div>
    </div>
  )
}

/** Screen 2: Live Today's Overview & Transactions Feed */
function Screen2Dashboard() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-4 pt-10 text-white selection:bg-emerald-900/60">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            Overview
          </p>
          <h3 className="text-[18px] font-bold tracking-tight text-white">Today</h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#171915] px-2.5 py-1 text-[10px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          Realtime
        </div>
      </div>

      {/* Spent Today Hero Tile */}
      <div className="rounded-2xl border border-white/10 bg-[#171915] p-4 shadow-sm">
        <div className="flex items-center justify-between text-neutral-400">
          <span className="text-[10px] font-bold uppercase tracking-widest">Spent Today</span>
          <span className="text-[10px] font-medium">May 14, 2026</span>
        </div>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-white">₹1,240</span>
          <span className="text-xs text-neutral-400">/ ₹2,000</span>
        </div>
        {/* Progress Bar */}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[62%] rounded-full bg-emerald-400" />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400">
          <span>4 spends recorded</span>
          <span className="text-emerald-400 font-semibold">62% daily cap</span>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-3 flex-1 pb-6">
        <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-neutral-400">
          <span>Today&apos;s Records</span>
          <span className="text-emerald-400">See all →</span>
        </div>
        <div className="space-y-1.5">
          {[
            { icon: "🍔", title: "Burger King", cat: "Food", acc: "HDFC", amount: "−₹450" },
            { icon: "☕", title: "Blue Tokai", cat: "Drink", acc: "Fi", amount: "−₹320" },
            { icon: "🚕", title: "Uber Cab", cat: "Travel", acc: "SBI", amount: "−₹280" },
            { icon: "🥪", title: "Bakery", cat: "Food", acc: "Cash", amount: "−₹190" },
          ].map((tx) => (
            <div
              key={tx.title}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-[#171915] p-2 text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-sm">
                  {tx.icon}
                </span>
                <div>
                  <p className="font-medium text-white">{tx.title}</p>
                  <p className="text-[9px] text-neutral-500">
                    {tx.cat} · {tx.acc}
                  </p>
                </div>
              </div>
              <span className="font-bold tabular-nums text-rose-400">{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Screen 3: Insights & Multi-Account Balances */
function Screen3Insights() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-4 pt-10 text-white selection:bg-indigo-900/60">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-bold uppercase tracking-wider">
          <PieChart size={14} />
          Category Trends
        </div>
        <span className="text-[10px] text-neutral-400">This Month</span>
      </div>

      {/* Category Breakdown Bars */}
      <div className="rounded-2xl border border-white/10 bg-[#171915] p-3.5 space-y-2.5">
        {[
          { label: "Food & Dining", pct: "44%", amount: "₹14,200", color: "bg-emerald-400" },
          { label: "Bills & Utilities", pct: "32%", amount: "₹10,500", color: "bg-indigo-400" },
          { label: "Shopping", pct: "16%", amount: "₹5,200", color: "bg-amber-400" },
          { label: "Leisure", pct: "8%", amount: "₹2,600", color: "bg-rose-400" },
        ].map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="font-medium text-neutral-300">{c.label}</span>
              <span className="font-bold tabular-nums text-white">{c.amount}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full rounded-full ${c.color}`} style={{ width: c.pct }} />
            </div>
          </div>
        ))}
      </div>

      {/* Account Balances */}
      <div className="mt-3 flex-1 pb-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Connected Balances
        </p>
        <div className="space-y-1.5">
          {[
            { name: "HDFC Savings", type: "Bank", bal: "₹42,850", color: "text-emerald-400" },
            { name: "Fi Money", type: "UPI / Bank", bal: "₹18,400", color: "text-emerald-400" },
            { name: "Cash Wallet", type: "Physical", bal: "₹3,500", color: "text-neutral-300" },
            { name: "ICICI Card", type: "Credit", bal: "−₹6,200", color: "text-rose-400" },
          ].map((acc) => (
            <div
              key={acc.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-[#171915] p-2 text-xs"
            >
              <div>
                <p className="font-medium text-white">{acc.name}</p>
                <p className="text-[9px] text-neutral-500">{acc.type}</p>
              </div>
              <span className={`font-bold tabular-nums ${acc.color}`}>{acc.bal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

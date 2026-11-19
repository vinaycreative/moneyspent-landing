"use client"

import { useState } from "react"
import {
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  X,
  Sparkles,
  CreditCard,
  Building2,
  Wallet,
} from "lucide-react"
import { Phone } from "@/components/stageshow/phone"
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react"

const TABS = [
  {
    id: 0,
    title: "3-Tap Expense",
    shortLabel: "Expense",
    dotColor: "bg-rose-400",
    activeText: "text-rose-400",
    badge: "⚡ 3-Tap Sentence Logging",
  },
  {
    id: 1,
    title: "Today's Command Center",
    shortLabel: "Dashboard",
    dotColor: "bg-emerald-400",
    activeText: "text-emerald-400",
    badge: "★ Real-time Daily Ledger",
  },
  {
    id: 2,
    title: "Income & Accounts",
    shortLabel: "Income",
    dotColor: "bg-cyan-400",
    activeText: "text-cyan-400",
    badge: "💰 Income & Account Vault",
  },
] as const

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
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-lp-line bg-lp-card/85 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-lp-ink shadow-2xs backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            The Product
          </div>

          <h2 className="lp-display mx-auto mt-3 max-w-[640px] text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[50px]">
            Built for how people actually spend.
          </h2>

          <p className="mx-auto mt-3.5 max-w-[460px] text-[15px] leading-relaxed text-lp-ink-mute sm:text-base">
            Three taps to log. One tap to see where it went.
          </p>
        </motion.div>

        {/* Device Stage with Authentic Stageshow Pro Phones */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 overflow-hidden rounded-[32px] border border-lp-line bg-lp-bg-2/50 px-4 py-10 sm:mt-12 sm:rounded-[44px] sm:px-8 sm:py-16 lg:py-20"
        >
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,color-mix(in_srgb,var(--lp-em)_14%,transparent),transparent_75%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-[180px] w-[560px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[80px]"
          />

          {/* Phones Container */}
          <motion.div
            className="relative flex items-center justify-start gap-4 overflow-x-auto pb-4 scrollbar-hide sm:justify-center sm:gap-0 sm:overflow-visible sm:-space-x-8 md:-space-x-10 lg:-space-x-12"
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
              className={`relative shrink-0 cursor-pointer transition-all duration-500 ease-out ${
                activeScreen === 0
                  ? "z-30 scale-100 sm:scale-[1.05] sm:-translate-y-3 rotate-0"
                  : "z-10 scale-[0.93] sm:scale-[0.92] sm:translate-y-4 sm:-rotate-2.5 opacity-85 hover:opacity-100 hover:scale-[0.95]"
              }`}
            >
              <div className="relative">
                <Phone
                  width={285}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 0
                      ? "shadow-[0_28px_70px_rgba(244,63,94,0.2),0_24px_60px_rgba(0,0,0,0.65)] ring-1 ring-rose-500/30"
                      : "shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <Screen1ExpenseLogging />
                </Phone>
              </div>
            </motion.div>

            {/* Phone 2 (Center Hero): Today's Command Center */}
            <motion.div
              custom={1}
              variants={phoneVariants}
              onClick={() => setActiveScreen(1)}
              className={`relative shrink-0 cursor-pointer transition-all duration-500 ease-out ${
                activeScreen === 1
                  ? "z-30 scale-100 sm:scale-[1.06] sm:-translate-y-4 rotate-0"
                  : "z-20 scale-[0.93] sm:scale-[0.92] sm:translate-y-4 sm:rotate-1 opacity-85 hover:opacity-100 hover:scale-[0.95]"
              }`}
            >
              <div className="relative">
                <Phone
                  width={305}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 1
                      ? "shadow-[0_32px_80px_rgba(16,185,129,0.22),0_28px_70px_rgba(0,0,0,0.7)] ring-1 ring-emerald-500/40"
                      : "shadow-[0_22px_55px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <Screen2DailyDashboard />
                </Phone>
              </div>
            </motion.div>

            {/* Phone 3 (Right): Multi-Account & Income */}
            <motion.div
              custom={2}
              variants={phoneVariants}
              onClick={() => setActiveScreen(2)}
              className={`relative shrink-0 cursor-pointer transition-all duration-500 ease-out ${
                activeScreen === 2
                  ? "z-30 scale-100 sm:scale-[1.05] sm:-translate-y-3 rotate-0"
                  : "z-10 scale-[0.93] sm:scale-[0.92] sm:translate-y-4 sm:rotate-2.5 opacity-85 hover:opacity-100 hover:scale-[0.95]"
              }`}
            >
              <div className="relative">
                <Phone
                  width={285}
                  frame="pro"
                  time="9:41"
                  island={true}
                  status={true}
                  dark={true}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 2
                      ? "shadow-[0_28px_70px_rgba(6,182,212,0.2),0_24px_60px_rgba(0,0,0,0.65)] ring-1 ring-cyan-500/30"
                      : "shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <Screen3IncomeAndAccounts />
                </Phone>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Caption Helper */}
          <p className="mt-14 text-center text-xs font-medium text-lp-ink-mute sm:text-[13px]">
            Click any device or tab above to inspect the full interface.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* SCREEN 1: 3-TAP SENTENCE EXPENSE LOGGER (AUTHENTIC IOS POINT SCALE)         */
/* -------------------------------------------------------------------------- */

function Screen1ExpenseLogging() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-5 pb-6 text-white selection:bg-rose-900/60">
      {/* Sheet Drag Indicator & Header */}
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/20" />
      <div className="mt-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-neutral-400">
          <X size={15} />
        </div>
        <div className="text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
            Add Expense
          </div>
          <div className="text-[10px] font-medium text-neutral-400">Fill the sentence to save</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-400">
          <TrendingDown size={16} />
        </div>
      </div>

      {/* The Signature Natural Sentence */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-[#161815] p-4 shadow-inner">
        <p className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-neutral-200">
          I spent{" "}
          <span className="inline-flex rounded-lg border border-rose-500/50 bg-rose-500/20 px-2 py-0.5 font-bold text-rose-400">
            ₹450
          </span>{" "}
          on{" "}
          <span className="inline-flex rounded-lg border border-amber-500/50 bg-amber-500/20 px-2 py-0.5 font-bold text-amber-300">
            coffee
          </span>{" "}
          as{" "}
          <span className="inline-flex rounded-lg border border-violet-500/50 bg-violet-500/20 px-2 py-0.5 font-bold text-violet-300">
            Food
          </span>{" "}
          from{" "}
          <span className="inline-flex rounded-lg border border-emerald-500/50 bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-300">
            Cash
          </span>{" "}
          today.
        </p>
      </div>

      {/* Quick Suggested Amounts */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          <span>Quick Amounts</span>
          <span className="text-[10px] font-normal text-neutral-500">Tap to fill</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["₹50", "₹100", "₹200", "₹450"].map((amt, idx) => (
            <div
              key={amt}
              className={`rounded-xl border py-2 text-center text-[13px] font-bold transition-colors ${
                idx === 3
                  ? "border-rose-500/60 bg-rose-500/20 text-rose-300 shadow-sm"
                  : "border-white/10 bg-[#161815] text-neutral-300"
              }`}
            >
              {amt}
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div className="mt-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          Category
        </p>
        <div className="grid grid-cols-3 gap-2">
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
              className={`flex items-center gap-2 rounded-xl border p-2.5 text-[12px] font-semibold ${
                c.active
                  ? "border-rose-500/60 bg-rose-500/15 text-rose-200"
                  : "border-white/10 bg-[#161815] text-neutral-400"
              }`}
            >
              <span className="text-[15px]">{c.icon}</span>
              <span className="truncate">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Account */}
      <div className="mt-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          Paid With
        </p>
        <div className="flex gap-2">
          {[
            { name: "Cash Wallet", active: true },
            { name: "HDFC Card", active: false },
            { name: "Fi Money", active: false },
          ].map((acc) => (
            <div
              key={acc.name}
              className={`rounded-xl border px-3 py-1.5 text-[11px] font-semibold ${
                acc.active
                  ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300"
                  : "border-white/10 bg-[#161815] text-neutral-400"
              }`}
            >
              {acc.name}
            </div>
          ))}
        </div>
      </div>

      {/* Big Action Button */}
      <div className="mt-auto pt-4 mb-6">
        <button
          type="button"
          tabIndex={-1}
          className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 py-3.5 text-center text-[13px] font-bold uppercase tracking-widest text-white shadow-lg shadow-rose-950/60 active:scale-[0.99]"
        >
          Save Expense · ₹450
        </button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SCREEN 2: TODAY'S COMMAND CENTER (THE REAL MONEYSPENT DASHBOARD)            */
/* -------------------------------------------------------------------------- */

function Screen2DailyDashboard() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-5 pb-6 text-white selection:bg-emerald-900/60">
      {/* Top Header */}
      <div className="mt-1 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-wide text-neutral-400">Dashboard</p>
          <h3 className="text-[22px] font-bold tracking-tight text-white">Hey Vinay</h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Realtime
        </div>
      </div>

      {/* Date Switcher Bar */}
      <div className="mt-3.5 flex items-center justify-between rounded-xl border border-white/10 bg-[#161815] px-3.5 py-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-neutral-400">
          <ChevronLeft size={16} />
        </div>
        <div className="text-center">
          <p className="text-[13px] font-bold text-white">Friday, July 17</p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            5 Transactions
          </p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-neutral-400 opacity-40">
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Spent Today Hero Tile */}
      <div className="mt-3 rounded-2xl border border-white/10 bg-[#161815] p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
            Spent on this day
          </span>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-neutral-300">
            <Calendar size={11} className="text-neutral-400" />
            <span>Jul 17</span>
          </div>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[42px] font-black tracking-tight text-white">₹500</span>
          <span className="text-xs text-neutral-400">/ ₹2,000 budget</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[25%] rounded-full bg-emerald-400" />
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
          <span>5 transactions recorded</span>
          <span className="font-semibold text-emerald-400">₹1,500 safe left</span>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 py-2.5 text-[12px] font-semibold text-rose-300 shadow-sm">
          <TrendingDown size={14} className="text-rose-400" />
          <span>Add Expense</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-[12px] font-semibold text-emerald-300 shadow-sm">
          <TrendingUp size={14} className="text-emerald-400" />
          <span>Add Income</span>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-3.5 flex-1 pb-2">
        <div className="mb-2 flex items-center justify-between text-[12px] font-bold text-neutral-300">
          <span>Transactions</span>
          <span className="flex items-center text-[11px] font-medium text-neutral-400 hover:text-white">
            View all <ChevronRight size={13} className="ml-0.5" />
          </span>
        </div>

        <div className="space-y-2">
          {[
            {
              icon: "🧃",
              title: "Drink",
              acc: "SBI",
              time: "4:12 PM",
              amount: "− ₹150",
              color: "text-rose-400",
            },
            {
              icon: "🍔",
              title: "Food",
              acc: "Fi",
              time: "4:12 PM",
              amount: "− ₹50",
              color: "text-rose-400",
            },
            {
              icon: "🏥",
              title: "Health",
              acc: "Fi",
              time: "4:12 PM",
              amount: "− ₹200",
              color: "text-rose-400",
            },
            {
              icon: "🛒",
              title: "Groceries",
              acc: "Cash",
              time: "2:05 PM",
              amount: "− ₹100",
              color: "text-rose-400",
            },
          ].map((tx) => (
            <div
              key={tx.title + tx.amount}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-[#161815] px-3 py-2 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[15px]">
                  {tx.icon}
                </span>
                <div>
                  <p className="font-semibold text-white">
                    {tx.title} · {tx.acc}
                  </p>
                  <p className="text-[10px] text-neutral-400">{tx.time}</p>
                </div>
              </div>
              <span className={`font-bold tabular-nums ${tx.color}`}>{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SCREEN 3: MULTI-ACCOUNT VAULT & INCOME LOGGER                               */
/* -------------------------------------------------------------------------- */

function Screen3IncomeAndAccounts() {
  return (
    <div className="flex h-full flex-col bg-[#0d0e0c] px-5 pb-6 text-white selection:bg-cyan-900/60">
      {/* Sheet Drag Indicator & Header */}
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/20" />
      <div className="mt-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-neutral-400">
          <X size={15} />
        </div>
        <div className="text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
            Add Income
          </div>
          <div className="text-[10px] font-medium text-neutral-400">Fill the sentence to save</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <TrendingUp size={16} />
        </div>
      </div>

      {/* The Signature Natural Sentence for Income */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-[#161815] p-4 shadow-inner">
        <p className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-neutral-200">
          I received{" "}
          <span className="inline-flex rounded-lg border border-emerald-500/50 bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-300">
            ₹25,000
          </span>{" "}
          from{" "}
          <span className="inline-flex rounded-lg border border-cyan-500/50 bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-300">
            Salary
          </span>{" "}
          into{" "}
          <span className="inline-flex rounded-lg border border-indigo-500/50 bg-indigo-500/20 px-2 py-0.5 font-bold text-indigo-300">
            HDFC Bank
          </span>{" "}
          today.
        </p>
      </div>

      {/* Quick Suggested Amounts */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          <span>Quick Amounts</span>
          <span className="text-[10px] font-normal text-neutral-500">Tap to fill</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["₹1k", "₹2.5k", "₹5k", "₹25k"].map((amt, idx) => (
            <div
              key={amt}
              className={`rounded-xl border py-2 text-center text-[13px] font-bold transition-colors ${
                idx === 3
                  ? "border-emerald-500/60 bg-emerald-500/20 text-emerald-300 shadow-sm"
                  : "border-white/10 bg-[#161815] text-neutral-300"
              }`}
            >
              {amt}
            </div>
          ))}
        </div>
      </div>

      {/* Account Vault Balances Preview */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          <span>Live Account Balances</span>
          <span className="text-emerald-400 font-semibold">Updated</span>
        </div>
        <div className="space-y-2">
          {[
            {
              name: "HDFC Savings",
              type: "Salary Account",
              icon: Building2,
              bal: "₹42,850",
              badge: "Primary",
            },
            {
              name: "Fi Money",
              type: "UPI / Digital Bank",
              icon: CreditCard,
              bal: "₹25,000",
              badge: "+₹25k pending",
            },
            {
              name: "Cash Wallet",
              type: "Physical Cash",
              icon: Wallet,
              bal: "₹3,500",
              badge: "Offline",
            },
          ].map((acc) => {
            const IconComponent = acc.icon
            return (
              <div
                key={acc.name}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-[#161815] px-3.5 py-2.5 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-neutral-300">
                    <IconComponent size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{acc.name}</p>
                    <p className="text-[10px] text-neutral-400">{acc.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold tabular-nums text-emerald-400">{acc.bal}</p>
                  <p className="text-[9px] font-medium text-neutral-400">{acc.badge}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Big Action Button */}
      <div className="mt-auto pt-4 mb-6">
        <button
          type="button"
          tabIndex={-1}
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3.5 text-center text-[13px] font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-950/60 active:scale-[0.99]"
        >
          Save Income · ₹25,000
        </button>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  X,
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
    dotColor: "bg-rose-500",
    activeText: "text-rose-600 dark:text-rose-400",
    badge: "⚡ 3-Tap Sentence Logging",
    tagline: "Fill the natural sentence in seconds. No tedious form fields.",
  },
  {
    id: 1,
    title: "Today's Command Center",
    shortLabel: "Dashboard",
    dotColor: "bg-emerald-500",
    activeText: "text-emerald-600 dark:text-emerald-400",
    badge: "★ Real-time Daily Ledger",
    tagline: "Track today's budget, daily streak, and live ledger at a glance.",
  },
  {
    id: 2,
    title: "Income & Accounts",
    shortLabel: "Accounts",
    dotColor: "bg-cyan-500",
    activeText: "text-cyan-600 dark:text-cyan-400",
    badge: "💰 Income & Account Vault",
    tagline: "Log income and monitor cash, UPI, and bank account balances.",
  },
] as const

export function ScreenGallery() {
  const reduceMotion = useReducedMotion()
  const [activeScreen, setActiveScreen] = useState<0 | 1 | 2>(1)
  const [slideDirection, setSlideDirection] = useState<number>(1)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : false

  const goToPrev = () => {
    setSlideDirection(-1)
    setActiveScreen((prev) => (prev === 0 ? 2 : ((prev - 1) as 0 | 1 | 2)))
  }

  const goToNext = () => {
    setSlideDirection(1)
    setActiveScreen((prev) => (prev === 2 ? 0 : ((prev + 1) as 0 | 1 | 2)))
  }

  const handleTabSelect = (id: 0 | 1 | 2) => {
    if (id === activeScreen) return
    setSlideDirection(id > activeScreen ? 1 : -1)
    setActiveScreen(id)
  }

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
      <div className="mx-auto max-w-[1160px] px-4 text-center sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="lp-display mx-auto mt-3 max-w-[640px] text-[28px] min-[380px]:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[50px]">
            Built for how people actually spend.
          </h2>

          <p className="mx-auto mt-3.5 max-w-[460px] text-[15px] leading-relaxed text-lp-ink-mute sm:text-base">
            Three taps to log. One tap to see where it went.
          </p>
        </motion.div>

        {/* Interactive Screen Selector Tabs */}
        <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto px-2 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeScreen === tab.id
            return (
              <button
                key={tab.id}
                id={`gallery-tab-${tab.id}`}
                type="button"
                onClick={() => handleTabSelect(tab.id as 0 | 1 | 2)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-lp-ink text-lp-bg shadow-xs"
                    : "border border-lp-line bg-lp-card text-lp-ink-soft hover:border-lp-line-strong hover:text-lp-ink"
                }`}
              >
                <span className={`size-1.5 rounded-full ${tab.dotColor}`} />
                <span className="hidden min-[380px]:inline">{tab.title}</span>
                <span className="min-[380px]:hidden">{tab.shortLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Device Stage with Authentic Stageshow Pro Phones */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-8 sm:mt-12 overflow-hidden rounded-[28px] sm:rounded-[44px] border border-lp-line bg-lp-bg-2/50 px-3 py-6 sm:px-8 sm:py-16 lg:py-20"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,color-mix(in_srgb,var(--lp-em)_14%,transparent),transparent_75%)]"
          />
          {/* Dynamic Ambient Glow tuned to active screen */}
          <div
            aria-hidden
            className={`pointer-events-none absolute -bottom-20 left-1/2 h-[220px] w-full max-w-[560px] -translate-x-1/2 rounded-full blur-[80px] transition-colors duration-700 ${
              activeScreen === 0
                ? "bg-rose-500/18"
                : activeScreen === 1
                ? "bg-emerald-500/18"
                : "bg-cyan-500/18"
            }`}
          />

          {/* ------------------------------------------------------------------ */}
          {/* MOBILE VIEW (< sm): Focused interactive single-phone showcase      */}
          {/* ------------------------------------------------------------------ */}
          <div className="block sm:hidden">
            {/* Active Screen Context Pill */}
            <div className="mb-4 text-center">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  activeScreen === 0
                    ? "border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400"
                    : activeScreen === 1
                    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                }`}
              >
                {TABS[activeScreen].badge}
              </span>
              <p className="mx-auto mt-1.5 max-w-[280px] text-xs text-lp-ink-mute">
                {TABS[activeScreen].tagline}
              </p>
            </div>

            {/* Active Phone Presentation */}
            <div className="relative mx-auto flex items-center justify-center">
              <div className="relative overflow-hidden py-1">
                <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
                  <motion.div
                    key={activeScreen}
                    custom={slideDirection}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 36 : -36,
                        opacity: 0,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                      },
                      exit: (direction: number) => ({
                        x: direction > 0 ? -36 : 36,
                        opacity: 0,
                        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                      }),
                    }}
                    initial={reduceMotion ? false : "enter"}
                    animate="center"
                    exit={reduceMotion ? undefined : "exit"}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, { offset, velocity }) => {
                      if (offset.x < -40 || velocity.x < -300) {
                        goToNext()
                      } else if (offset.x > 40 || velocity.x > 300) {
                        goToPrev()
                      }
                    }}
                    className="relative flex justify-center touch-pan-y cursor-grab active:cursor-grabbing"
                  >
                    <Phone
                      width={272}
                      frame="pro"
                      time="9:41"
                      island={true}
                      status={true}
                      dark={isDark}
                      className={`transition-shadow duration-500 ${
                        activeScreen === 0
                          ? "shadow-[0_20px_50px_rgba(244,63,94,0.22)] ring-1 ring-rose-500/30"
                          : activeScreen === 1
                          ? "shadow-[0_20px_50px_rgba(16,185,129,0.22)] ring-1 ring-emerald-500/35"
                          : "shadow-[0_20px_50px_rgba(6,182,212,0.2)] ring-1 ring-cyan-500/30"
                      }`}
                    >
                      {activeScreen === 0 && <Screen1ExpenseLogging />}
                      {activeScreen === 1 && <Screen2DailyDashboard />}
                      {activeScreen === 2 && <Screen3IncomeAndAccounts />}
                    </Phone>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Controls: Prev Button, Indicator Dots, Next Button */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous screen"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lp-line bg-lp-card text-lp-ink shadow-xs hover:border-lp-line-strong active:scale-95 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabSelect(tab.id as 0 | 1 | 2)}
                    aria-label={`Go to ${tab.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeScreen === tab.id
                        ? `w-6 ${tab.dotColor}`
                        : "w-2 bg-lp-line hover:bg-lp-ink-soft/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next screen"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lp-line bg-lp-card text-lp-ink shadow-xs hover:border-lp-line-strong active:scale-95 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="mt-2 text-[11px] text-lp-ink-mute">
              Swipe left/right or tap arrows to explore ({activeScreen + 1} of 3)
            </p>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* DESKTOP VIEW (>= sm): 3-Phone Overlapping Fan Stage                */}
          {/* ------------------------------------------------------------------ */}
          <motion.div
            className="hidden sm:flex sm:items-center sm:justify-center sm:overflow-visible sm:-space-x-8 md:-space-x-10 lg:-space-x-12"
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Phone 1 (Left): Sentence Logging Flow */}
            <motion.div
              id="gallery-phone-0"
              custom={0}
              variants={phoneVariants}
              onClick={() => handleTabSelect(0)}
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
                  dark={isDark}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 0
                      ? "shadow-[0_24px_50px_rgba(244,63,94,0.18),0_12px_24px_rgba(0,0,0,0.08)] ring-1 ring-rose-500/30 dark:shadow-[0_28px_70px_rgba(244,63,94,0.22),0_24px_60px_rgba(0,0,0,0.65)]"
                      : "shadow-[0_16px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <Screen1ExpenseLogging />
                </Phone>
              </div>
            </motion.div>

            {/* Phone 2 (Center Hero): Today's Command Center */}
            <motion.div
              id="gallery-phone-1"
              custom={1}
              variants={phoneVariants}
              onClick={() => handleTabSelect(1)}
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
                  dark={isDark}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 1
                      ? "shadow-[0_28px_60px_rgba(16,185,129,0.2),0_14px_30px_rgba(0,0,0,0.1)] ring-1 ring-emerald-500/35 dark:shadow-[0_32px_80px_rgba(16,185,129,0.22),0_28px_70px_rgba(0,0,0,0.7)]"
                      : "shadow-[0_18px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_22px_55px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <Screen2DailyDashboard />
                </Phone>
              </div>
            </motion.div>

            {/* Phone 3 (Right): Multi-Account & Income */}
            <motion.div
              id="gallery-phone-2"
              custom={2}
              variants={phoneVariants}
              onClick={() => handleTabSelect(2)}
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
                  dark={isDark}
                  className={`transition-shadow duration-500 ${
                    activeScreen === 2
                      ? "shadow-[0_24px_50px_rgba(6,182,212,0.18),0_12px_24px_rgba(0,0,0,0.08)] ring-1 ring-cyan-500/30 dark:shadow-[0_28px_70px_rgba(6,182,212,0.2),0_24px_60px_rgba(0,0,0,0.65)]"
                      : "shadow-[0_16px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <Screen3IncomeAndAccounts />
                </Phone>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* SCREEN 1: 3-TAP SENTENCE EXPENSE LOGGER (ADAPTIVE LIGHT & DARK)            */
/* -------------------------------------------------------------------------- */

function Screen1ExpenseLogging() {
  return (
    <div className="flex h-full flex-col bg-[#fafaf8] px-5 pb-6 text-neutral-900 selection:bg-rose-100 dark:bg-[#0d0e0c] dark:text-white dark:selection:bg-rose-900/60">
      {/* Sheet Drag Indicator & Header */}
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-neutral-300 dark:bg-white/20" />
      <div className="mt-3 flex items-center justify-between border-b border-neutral-200/80 pb-3 dark:border-white/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-100 text-neutral-600 dark:border-transparent dark:bg-white/10 dark:text-neutral-400">
          <X size={15} />
        </div>
        <div className="text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-neutral-900 dark:text-white">
            Add Expense
          </div>
          <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
            Fill the sentence to save
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-600 dark:border-transparent dark:bg-rose-500/15 dark:text-rose-400">
          <TrendingDown size={16} />
        </div>
      </div>

      {/* The Signature Natural Sentence */}
      <div className="mt-4 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#161815] dark:shadow-inner">
        <p className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-neutral-800 dark:text-neutral-200">
          I spent{" "}
          <span className="inline-flex rounded-lg border border-rose-200 bg-rose-50 px-2 py-0.5 font-bold text-rose-700 dark:border-rose-500/50 dark:bg-rose-500/20 dark:text-rose-400">
            ₹450
          </span>{" "}
          on{" "}
          <span className="inline-flex rounded-lg border border-amber-200 bg-amber-50 px-2 py-0.5 font-bold text-amber-800 dark:border-amber-500/50 dark:bg-amber-500/20 dark:text-amber-300">
            coffee
          </span>{" "}
          as{" "}
          <span className="inline-flex rounded-lg border border-violet-200 bg-violet-50 px-2 py-0.5 font-bold text-violet-800 dark:border-violet-500/50 dark:bg-violet-500/20 dark:text-violet-300">
            Food
          </span>{" "}
          from{" "}
          <span className="inline-flex rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-bold text-emerald-800 dark:border-emerald-500/50 dark:bg-emerald-500/20 dark:text-emerald-300">
            Cash
          </span>{" "}
          today.
        </p>
      </div>

      {/* Quick Suggested Amounts */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <span>Quick Amounts</span>
          <span className="text-[10px] font-normal text-neutral-400 dark:text-neutral-500">
            Tap to fill
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["₹50", "₹100", "₹200", "₹450"].map((amt, idx) => (
            <div
              key={amt}
              className={`rounded-xl border py-2 text-center text-[13px] font-bold transition-colors ${
                idx === 3
                  ? "border-rose-300 bg-rose-50 text-rose-700 shadow-2xs dark:border-rose-500/60 dark:bg-rose-500/20 dark:text-rose-300"
                  : "border-neutral-200/90 bg-white text-neutral-800 shadow-2xs dark:border-white/10 dark:bg-[#161815] dark:text-neutral-300 dark:shadow-none"
              }`}
            >
              {amt}
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div className="mt-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
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
              className={`flex items-center gap-2 rounded-xl border p-2.5 text-[12px] font-semibold transition-colors ${
                c.active
                  ? "border-rose-300 bg-rose-50 text-rose-700 shadow-2xs dark:border-rose-500/60 dark:bg-rose-500/15 dark:text-rose-200"
                  : "border-neutral-200/80 bg-white text-neutral-700 shadow-2xs dark:border-white/10 dark:bg-[#161815] dark:text-neutral-400 dark:shadow-none"
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
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
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
              className={`rounded-xl border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                acc.active
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800 shadow-2xs dark:border-emerald-500/60 dark:bg-emerald-500/15 dark:text-emerald-300"
                  : "border-neutral-200/80 bg-white text-neutral-600 shadow-2xs dark:border-white/10 dark:bg-[#161815] dark:text-neutral-400 dark:shadow-none"
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
          className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 py-3.5 text-center text-[13px] font-bold uppercase tracking-widest text-white shadow-md shadow-rose-500/20 active:scale-[0.99] dark:shadow-rose-950/60"
        >
          Save Expense · ₹450
        </button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SCREEN 2: TODAY'S COMMAND CENTER (ADAPTIVE LIGHT & DARK)                    */
/* -------------------------------------------------------------------------- */

function Screen2DailyDashboard() {
  return (
    <div className="flex h-full flex-col bg-[#fafaf8] px-5 pb-6 text-neutral-900 selection:bg-emerald-100 dark:bg-[#0d0e0c] dark:text-white dark:selection:bg-emerald-900/60">
      {/* Top Header */}
      <div className="mt-1 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
            Dashboard
          </p>
          <h3 className="text-[22px] font-bold tracking-tight text-neutral-900 dark:text-white">
            Hey Vinay
          </h3>
        </div>
      </div>

      {/* Date Switcher Bar */}
      <div className="mt-3.5 flex items-center justify-between rounded-xl border border-neutral-200/90 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#161815] dark:shadow-none">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200/70 bg-neutral-100 text-neutral-600 dark:border-transparent dark:bg-white/5 dark:text-neutral-400">
          <ChevronLeft size={16} />
        </div>
        <div className="text-center">
          <p className="text-[13px] font-bold text-neutral-900 dark:text-white">Friday, July 17</p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            5 Transactions
          </p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200/70 bg-neutral-100 text-neutral-600 opacity-40 dark:border-transparent dark:bg-white/5 dark:text-neutral-400">
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Spent Today Hero Tile */}
      <div className="mt-3 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#161815] dark:shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Spent on this day
          </span>
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/70 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
            <Calendar size={11} className="text-neutral-500 dark:text-neutral-400" />
            <span>Jul 17</span>
          </div>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[42px] font-black tracking-tight text-neutral-900 dark:text-white">
            ₹500
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">/ ₹2,000 budget</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/10">
          <div className="h-full w-[25%] rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
          <span>5 transactions recorded</span>
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
            ₹1,500 safe left
          </span>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/70 py-2.5 text-[12px] font-semibold text-rose-700 shadow-2xs transition-colors hover:bg-rose-50 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
          <TrendingDown size={14} className="text-rose-600 dark:text-rose-400" />
          <span>Add Expense</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/70 py-2.5 text-[12px] font-semibold text-emerald-700 shadow-2xs transition-colors hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          <TrendingUp size={14} className="text-emerald-600 dark:text-emerald-400" />
          <span>Add Income</span>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-3.5 flex-1 pb-2">
        <div className="mb-2 flex items-center justify-between text-[12px] font-bold text-neutral-800 dark:text-neutral-300">
          <span>Transactions</span>
          <span className="flex items-center text-[11px] font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
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
              color: "text-rose-600 dark:text-rose-400",
            },
            {
              icon: "🍔",
              title: "Food",
              acc: "Fi",
              time: "4:12 PM",
              amount: "− ₹50",
              color: "text-rose-600 dark:text-rose-400",
            },
            {
              icon: "🏥",
              title: "Health",
              acc: "Fi",
              time: "4:12 PM",
              amount: "− ₹200",
              color: "text-rose-600 dark:text-rose-400",
            },
            {
              icon: "🛒",
              title: "Groceries",
              acc: "Cash",
              time: "2:05 PM",
              amount: "− ₹100",
              color: "text-rose-600 dark:text-rose-400",
            },
          ].map((tx) => (
            <div
              key={tx.title + tx.amount}
              className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white px-3 py-2 text-xs shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:border-white/5 dark:bg-[#161815] dark:shadow-none"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-[15px] dark:bg-white/5">
                  {tx.icon}
                </span>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    {tx.title} · {tx.acc}
                  </p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{tx.time}</p>
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
/* SCREEN 3: MULTI-ACCOUNT VAULT & INCOME LOGGER (ADAPTIVE LIGHT & DARK)       */
/* -------------------------------------------------------------------------- */

function Screen3IncomeAndAccounts() {
  return (
    <div className="flex h-full flex-col bg-[#fafaf8] px-5 pb-6 text-neutral-900 selection:bg-cyan-100 dark:bg-[#0d0e0c] dark:text-white dark:selection:bg-cyan-900/60">
      {/* Sheet Drag Indicator & Header */}
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-neutral-300 dark:bg-white/20" />
      <div className="mt-3 flex items-center justify-between border-b border-neutral-200/80 pb-3 dark:border-white/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-100 text-neutral-600 dark:border-transparent dark:bg-white/10 dark:text-neutral-400">
          <X size={15} />
        </div>
        <div className="text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-neutral-900 dark:text-white">
            Add Income
          </div>
          <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
            Fill the sentence to save
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-transparent dark:bg-emerald-500/15 dark:text-emerald-400">
          <TrendingUp size={16} />
        </div>
      </div>

      {/* The Signature Natural Sentence for Income */}
      <div className="mt-4 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#161815] dark:shadow-inner">
        <p className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-neutral-800 dark:text-neutral-200">
          I received{" "}
          <span className="inline-flex rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-bold text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/20 dark:text-emerald-300">
            ₹25,000
          </span>{" "}
          from{" "}
          <span className="inline-flex rounded-lg border border-cyan-200 bg-cyan-50 px-2 py-0.5 font-bold text-cyan-800 dark:border-cyan-500/50 dark:bg-cyan-500/20 dark:text-cyan-300">
            Salary
          </span>{" "}
          into{" "}
          <span className="inline-flex rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-0.5 font-bold text-indigo-800 dark:border-indigo-500/50 dark:bg-indigo-500/20 dark:text-indigo-300">
            HDFC Bank
          </span>{" "}
          today.
        </p>
      </div>

      {/* Quick Suggested Amounts */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <span>Quick Amounts</span>
          <span className="text-[10px] font-normal text-neutral-400 dark:text-neutral-500">
            Tap to fill
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["₹1k", "₹2.5k", "₹5k", "₹25k"].map((amt, idx) => (
            <div
              key={amt}
              className={`rounded-xl border py-2 text-center text-[13px] font-bold transition-colors ${
                idx === 3
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800 shadow-2xs dark:border-emerald-500/60 dark:bg-emerald-500/20 dark:text-emerald-300"
                  : "border-neutral-200/90 bg-white text-neutral-800 shadow-2xs dark:border-white/10 dark:bg-[#161815] dark:text-neutral-300 dark:shadow-none"
              }`}
            >
              {amt}
            </div>
          ))}
        </div>
      </div>

      {/* Account Vault Balances Preview */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <span>Live Account Balances</span>
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">Updated</span>
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
                className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white px-3.5 py-2.5 text-xs shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:border-white/5 dark:bg-[#161815] dark:shadow-none"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
                    <IconComponent size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{acc.name}</p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      {acc.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold tabular-nums text-emerald-700 dark:text-emerald-400">
                    {acc.bal}
                  </p>
                  <p className="text-[9px] font-medium text-neutral-500 dark:text-neutral-400">
                    {acc.badge}
                  </p>
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
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3.5 text-center text-[13px] font-bold uppercase tracking-widest text-white shadow-md shadow-emerald-500/20 active:scale-[0.99] dark:shadow-emerald-950/60"
        >
          Save Income · ₹25,000
        </button>
      </div>
    </div>
  )
}

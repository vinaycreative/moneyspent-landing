"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  Car,
  Coffee,
  Flame,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

/* -------------------------------------------------------------------------- */
/* MICRO-ANIMATED ICONS                                                       */
/* -------------------------------------------------------------------------- */

function MicroCoffeeIcon({ active }: { active?: boolean }) {
  const reduceMotion = useReducedMotion()
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <motion.path
        d="M6 2v2"
        animate={
          active && !reduceMotion
            ? { y: [-2, 0, -2], opacity: [0.4, 1, 0.4] }
            : { y: 0, opacity: 0.7 }
        }
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 1v3"
        animate={
          active && !reduceMotion
            ? { y: [-2, 0, -2], opacity: [0.6, 1, 0.6] }
            : { y: 0, opacity: 0.8 }
        }
        transition={{ duration: 1.2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M14 2v2"
        animate={
          active && !reduceMotion
            ? { y: [-2, 0, -2], opacity: [0.4, 1, 0.4] }
            : { y: 0, opacity: 0.7 }
        }
        transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}

function MicroCartIcon({ active }: { active?: boolean }) {
  const reduceMotion = useReducedMotion()
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <motion.path
        d="M16 10a4 4 0 0 1-8 0"
        animate={active && !reduceMotion ? { y: [-1, 1, -1] } : { y: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}

function MicroCarIcon({ active }: { active?: boolean }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible"
      aria-hidden="true"
      animate={active && !reduceMotion ? { x: [0, 2.5, 0] } : { x: 0 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </motion.svg>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 1: HERO UI (TODAY COMMAND CENTER WITH COMPACT BUTTERY FILTER TABS)    */
/* -------------------------------------------------------------------------- */

type LedgerFilter = "all" | "food" | "groceries" | "transport"

interface TodayTxn {
  id: string
  title: string
  meta: string
  tag: string
  amount: string
  category: "food" | "groceries" | "transport"
  icon: "coffee" | "cart" | "car"
  tone: "amber" | "emerald" | "indigo"
}

const TODAY_TXNS: TodayTxn[] = [
  {
    id: "t1",
    title: "Blue Tokai Coffee",
    meta: "Food & Dining · Fi Money · 10:14 AM",
    tag: "Morning espresso",
    amount: "-₹240",
    category: "food",
    icon: "coffee",
    tone: "amber",
  },
  {
    id: "t2",
    title: "Blinkit Quick Mart",
    meta: "Groceries · HDFC · 01:45 PM",
    tag: "Pantry supplies",
    amount: "-₹550",
    category: "groceries",
    icon: "cart",
    tone: "emerald",
  },
  {
    id: "t3",
    title: "Uber Premier",
    meta: "Transport · Cash · 06:20 PM",
    tag: "Office commute",
    amount: "-₹450",
    category: "transport",
    icon: "car",
    tone: "indigo",
  },
]

function HeroCommandCenter() {
  const [filter, setFilter] = useState<LedgerFilter>("all")
  const [hoveredTxn, setHoveredTxn] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  const filteredTxns =
    filter === "all"
      ? TODAY_TXNS
      : TODAY_TXNS.filter((t) => t.category === filter)

  const totalSpent = filteredTxns.reduce(
    (acc, t) => acc + parseInt(t.amount.replace(/[^0-9]/g, "")),
    0
  )

  const filterTabs: { id: LedgerFilter; label: string; count: number }[] = [
    { id: "all", label: "All (3)", count: 3 },
    { id: "food", label: "☕ Food (1)", count: 1 },
    { id: "groceries", label: "🛒 Groceries (1)", count: 1 },
    { id: "transport", label: "🚕 Transport (1)", count: 1 },
  ]

  return (
    <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-5 sm:p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:col-span-2 lg:col-span-2">
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[18px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Today at a glance.</strong>{" "}
          <span className="text-lp-ink-mute">
            Live daily pace, budget headroom, and chronological transactions without spreadsheet noise.
          </span>
        </p>
      </div>

      {/* Living Dashboard Slice */}
      <div className="relative overflow-hidden rounded-2xl border border-lp-line bg-lp-bg-2/40 dark:bg-black/30 p-3.5 sm:p-4 shadow-sm flex-1 flex flex-col justify-between">
        <div>
          {/* Ledger Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-lp-line/70 pb-2.5">
            {/* Today Indicator */}
            <div className="flex items-center gap-1.5 rounded-lg border border-lp-line bg-lp-card px-2.5 py-1 shadow-2xs w-fit">
              <Calendar size={13} className="text-lp-em shrink-0" />
              <span className="text-[11px] font-semibold text-lp-ink">
                Today · Thursday, 24 Oct
              </span>
            </div>

            {/* Daily Limit & Pace Progress */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="text-left sm:text-right">
                <span className="text-[9px] font-medium uppercase tracking-wider text-lp-ink-mute">
                  Spent Today
                </span>
                <p className="font-mono text-[11px] font-bold text-lp-ink">
                  ₹{totalSpent.toLocaleString()}{" "}
                  <span className="font-sans font-normal text-lp-ink-mute">
                    / ₹2,500 limit
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-lp-line">
                  <motion.div
                    className="h-full bg-emerald-500 rounded-full"
                    animate={{
                      width: `${Math.min(100, Math.round((totalSpent / 2500) * 100))}%`,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  On track
                </div>
              </div>
            </div>
          </div>

          {/* Buttery Category Filter Tabs */}
          <div className="mt-2.5 flex items-center gap-1 overflow-x-auto pb-0.5 text-[11px] no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`relative rounded-md px-2 py-0.5 font-medium transition-colors cursor-pointer shrink-0 select-none ${
                    isActive
                      ? "text-lp-ink font-semibold"
                      : "text-lp-ink-mute hover:text-lp-ink"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroLedgerFilterPill"
                      className="absolute inset-0 rounded-md bg-lp-card shadow-2xs border border-lp-line"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Transaction Rows */}
          <div className="mt-2.5 space-y-1.5">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredTxns.map((txn) => {
                const isHovered = hoveredTxn === txn.id
                return (
                  <motion.div
                    key={txn.id}
                    layout
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    onMouseEnter={() => setHoveredTxn(txn.id)}
                    onMouseLeave={() => setHoveredTxn(null)}
                    className={`flex items-center justify-between rounded-xl border border-lp-line/70 bg-lp-card px-3 py-2 transition-colors cursor-pointer ${
                      isHovered
                        ? "border-lp-em/40 shadow-xs"
                        : "hover:border-lp-em/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 ${
                          isHovered ? "scale-105" : ""
                        } ${
                          txn.tone === "amber"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            : txn.tone === "emerald"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        }`}
                      >
                        {txn.icon === "coffee" && (
                          <MicroCoffeeIcon active={isHovered} />
                        )}
                        {txn.icon === "cart" && (
                          <MicroCartIcon active={isHovered} />
                        )}
                        {txn.icon === "car" && (
                          <MicroCarIcon active={isHovered} />
                        )}
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-lp-ink">
                          {txn.title}
                        </p>
                        <p className="text-[10px] text-lp-ink-mute">{txn.meta}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[12px] font-bold text-lp-ink">
                        {txn.amount}
                      </span>
                      <span className="hidden sm:block text-[9px] text-lp-ink-mute">
                        {txn.tag}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Live Daily Pace & Headroom Status */}
        <div className="mt-2.5 pt-2 border-t border-lp-line/60 flex items-center justify-between text-[11px] text-lp-ink-mute">
          <span className="font-medium">
            Daily burn pace: <strong className="text-lp-ink font-semibold">₹155/hr</strong>
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
            ₹1,260 safe headroom
          </span>
        </div>
      </div>

      {/* Outer Card Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
        <span className="text-[11px]">{filteredTxns.length} transactions · Real-time ledger</span>
        <Link
          href="/features/today-view"
          className="font-semibold text-lp-em hover:underline text-[12px]"
        >
          Today workflow &rarr;
        </Link>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 2: SEARCH & INSTANT FILTERING (COMPACT & BALANCED WITH HERO TILE)     */
/* -------------------------------------------------------------------------- */

interface SearchMatch {
  id: string
  merchant: string
  date: string
  category: string
  amount: string
  tag: string
  emoji: string
}

const SEARCH_PRESETS: Record<string, { summary: string; matches: SearchMatch[] }> = {
  Coffee: {
    summary: "3 purchases · ₹640 total spent",
    matches: [
      {
        id: "s1",
        merchant: "Blue Tokai Coffee",
        date: "Today, 10:14 AM",
        category: "Food",
        amount: "-₹240",
        tag: "Morning espresso",
        emoji: "☕",
      },
      {
        id: "s2",
        merchant: "Third Wave Coffee",
        date: "19 Oct, 04:30 PM",
        category: "Food",
        amount: "-₹220",
        tag: "Cold brew bottle",
        emoji: "☕",
      },
      {
        id: "s3",
        merchant: "Starbucks Reserve",
        date: "14 Oct, 11:15 AM",
        category: "Food",
        amount: "-₹180",
        tag: "Iced latte",
        emoji: "☕",
      },
    ],
  },
  Uber: {
    summary: "3 rides · ₹850 total spent",
    matches: [
      {
        id: "u1",
        merchant: "Uber Premier",
        date: "Today, 06:20 PM",
        category: "Transit",
        amount: "-₹450",
        tag: "Airport commute",
        emoji: "🚕",
      },
      {
        id: "u2",
        merchant: "Uber Go",
        date: "21 Oct, 09:10 AM",
        category: "Transit",
        amount: "-₹280",
        tag: "Office trip",
        emoji: "🚕",
      },
      {
        id: "u3",
        merchant: "Uber Auto",
        date: "16 Oct, 02:40 PM",
        category: "Transit",
        amount: "-₹120",
        tag: "Metro connection",
        emoji: "🚕",
      },
    ],
  },
  Blinkit: {
    summary: "3 orders · ₹1,850 total spent",
    matches: [
      {
        id: "b1",
        merchant: "Blinkit Quick Mart",
        date: "Today, 01:45 PM",
        category: "Groceries",
        amount: "-₹550",
        tag: "Pantry supplies",
        emoji: "🛒",
      },
      {
        id: "b2",
        merchant: "Blinkit Fresh Pantry",
        date: "18 Oct, 08:30 PM",
        category: "Groceries",
        amount: "-₹820",
        tag: "Weekly groceries",
        emoji: "🛒",
      },
      {
        id: "b3",
        merchant: "Blinkit Daily Essentials",
        date: "12 Oct, 10:15 AM",
        category: "Groceries",
        amount: "-₹480",
        tag: "Dairy & bakery",
        emoji: "🛒",
      },
    ],
  },
}

function SearchHistoryCard() {
  const [activeQuery, setActiveQuery] = useState<"Coffee" | "Uber" | "Blinkit">("Coffee")
  const reduceMotion = useReducedMotion()

  const activeData = SEARCH_PRESETS[activeQuery]

  return (
    <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-5 sm:p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1">
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Search & filter.</strong>{" "}
          <span className="text-lp-ink-mute">
            Find any past purchase in milliseconds without digging through spreadsheet rows.
          </span>
        </p>
      </div>

      {/* Search Interactive Window */}
      <div className="rounded-2xl border border-lp-line bg-lp-bg-2/40 dark:bg-black/30 p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Search Bar Input Simulation */}
          <div className="relative flex items-center rounded-xl border border-lp-line bg-lp-card px-2.5 py-1.5 shadow-2xs">
            <Search size={13} className="text-lp-em shrink-0 mr-2" />
            <span className="text-[11px] font-semibold text-lp-ink flex-1">
              {activeQuery}
            </span>
            <span className="font-mono text-[9px] text-lp-ink-mute/60 rounded bg-lp-bg-2 px-1 py-0.5 border border-lp-line/50">
              ⌘K
            </span>
          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="mt-2 flex items-center gap-1">
            {(["Coffee", "Uber", "Blinkit"] as const).map((q) => {
              const isSelected = activeQuery === q
              return (
                <button
                  key={q}
                  type="button"
                  onClick={() => setActiveQuery(q)}
                  className={`rounded-md px-2 py-0.5 text-[10px] font-semibold transition-all cursor-pointer select-none ${
                    isSelected
                      ? "bg-lp-em text-white shadow-2xs"
                      : "bg-lp-card border border-lp-line text-lp-ink-soft hover:border-lp-em/40"
                  }`}
                >
                  {q === "Coffee" && "☕ "}
                  {q === "Uber" && "🚕 "}
                  {q === "Blinkit" && "🛒 "}
                  {q}
                </button>
              )
            })}
          </div>

          {/* Matching Search Results List */}
          <div className="mt-2.5 space-y-1.5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeQuery}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-1.5"
              >
                {activeData.matches.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-lp-line/70 bg-lp-card px-2.5 py-1.5 text-xs transition-colors hover:border-lp-em/30"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs select-none">{item.emoji}</span>
                      <div>
                        <p className="font-semibold text-lp-ink text-[11px]">
                          {item.merchant}
                        </p>
                        <p className="text-[9px] text-lp-ink-mute">
                          {item.date} &middot; {item.tag}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-lp-ink text-[11px]">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Search Result Summary */}
        <div className="mt-2 pt-1.5 border-t border-lp-line/60 flex items-center justify-between text-[10px] text-lp-ink-mute">
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            {activeData.summary}
          </span>
          <span className="text-[9px]">Instant filter</span>
        </div>
      </div>

      {/* Outer Card Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
        <span className="text-[11px]">Filter by merchant</span>
        <Link
          href="/features/searchable-history"
          className="font-semibold text-lp-em hover:underline text-[12px]"
        >
          Search history &rarr;
        </Link>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 3: COMPONENT TILE (CATEGORY INSIGHTS) - RETAINED                      */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  { id: "cat-1", name: "Food & Dining", emoji: "🍔", amount: "₹14,850", percent: 46, color: "#10b981" },
  { id: "cat-2", name: "Bills & Utilities", emoji: "⚡", amount: "₹9,200", percent: 28, color: "#6366f1" },
  { id: "cat-3", name: "Cab & Transit", emoji: "🚕", amount: "₹5,140", percent: 16, color: "#f59e0b" },
  { id: "cat-4", name: "Shopping & Misc", emoji: "🛍️", amount: "₹3,220", percent: 10, color: "#fb7185" },
]

function CategoryInsightsCard() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 sm:p-7 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1">
      {/* Run-in Copy */}
      <div className="mb-5">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Category insights.</strong>{" "}
          <span className="text-lp-ink-mute">
            Instant visual breakdown of where your cash actually flows each month.
          </span>
        </p>
      </div>

      {/* Component: Category Proportional Distribution with Spring Bars */}
      <div className="rounded-2xl border border-lp-line bg-lp-bg-2/40 dark:bg-black/30 p-4">
        {/* Proportional Segmented Bar with Hover Interaction */}
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-lp-line/50 p-0.5 gap-0.5">
          {CATEGORIES.map((cat) => {
            const isHovered = activeId === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onMouseEnter={() => setActiveId(cat.id)}
                onMouseLeave={() => setActiveId(null)}
                style={{
                  width: `${cat.percent}%`,
                  backgroundColor: cat.color,
                  opacity: activeId === null || isHovered ? 1 : 0.35,
                }}
                className={`h-full rounded-full transition-all duration-200 cursor-pointer ${
                  isHovered ? "ring-2 ring-lp-ink ring-offset-1" : ""
                }`}
                aria-label={`${cat.name}: ${cat.percent}%`}
              />
            )
          })}
        </div>

        {/* Category Breakdown Rows with Magnetic Hover Pill */}
        <div className="mt-4 space-y-1.5 relative">
          {CATEGORIES.map((cat) => {
            const isHovered = activeId === cat.id
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveId(cat.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`relative flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs transition-colors cursor-pointer z-10 ${
                  isHovered ? "text-lp-ink font-semibold" : "text-lp-ink-soft hover:text-lp-ink"
                }`}
              >
                {/* Floating Layout Background Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="categoryHoverPill"
                    className="absolute inset-0 rounded-xl bg-lp-card shadow-2xs border border-lp-line/70 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}

                <div className="flex items-center gap-2">
                  <motion.span
                    animate={
                      isHovered && !reduceMotion
                        ? { scale: [1, 1.25, 1], rotate: [-5, 5, 0] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.35 }}
                    className="text-sm select-none"
                  >
                    {cat.emoji}
                  </motion.span>
                  <span>{cat.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold">{cat.amount}</span>
                  <span
                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                    className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                  >
                    {cat.percent}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
        <span className="text-[11px]">4 active categories</span>
        <Link
          href="/features/category-insights"
          className="font-semibold text-lp-em hover:underline text-[12px]"
        >
          Category reports &rarr;
        </Link>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 4: OBJECT TILE (ALL YOUR ACCOUNTS) - RETAINED                          */
/* -------------------------------------------------------------------------- */

function TactileCardStack() {
  const [activeCard, setActiveCard] = useState<"regalia" | "fi">("regalia")
  const [isHovered, setIsHovered] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 sm:p-7 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1"
    >
      {/* Run-in Copy */}
      <div className="mb-5">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">All your accounts.</strong>{" "}
          <span className="text-lp-ink-mute">
            Bank accounts, credit cards, and cash balances updating together.
          </span>
        </p>
      </div>

      {/* Tactile 3D Card Stack Container */}
      <div className="relative mx-auto w-full max-w-[280px] h-[210px] pt-1">
        {/* Card 2: Fi Federal Bank (Back/Peeking Card) */}
        <motion.div
          onClick={() => setActiveCard(activeCard === "regalia" ? "fi" : "regalia")}
          animate={
            reduceMotion
              ? {}
              : activeCard === "fi"
                ? { y: 28, rotate: 0, scale: 1, zIndex: 20 }
                : isHovered
                  ? { y: -10, rotate: -4, scale: 1.01, zIndex: 10 }
                  : { y: 0, rotate: -2.5, scale: 0.98, zIndex: 10 }
          }
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="absolute top-1 right-2.5 left-2.5 h-[126px] rounded-xl border border-emerald-500/30 bg-gradient-to-br from-[#0c392b] via-[#08281e] to-[#041a13] p-3.5 shadow-md text-white cursor-pointer select-none"
        >
          <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-300">
            <span className="tracking-wide">Fi Federal Bank</span>
            <span className="font-mono text-emerald-200 font-bold">₹18,400</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-emerald-400/80">
            <span>Tap to bring front</span>
            <span className="font-mono">•••• 6201</span>
          </div>
        </motion.div>

        {/* Card 1: HDFC Regalia Titanium (Front Card with Metallic Sheen) */}
        <motion.div
          onClick={() => setActiveCard(activeCard === "fi" ? "regalia" : "fi")}
          animate={
            reduceMotion
              ? {}
              : activeCard === "regalia"
                ? { y: 0, rotate: isHovered ? 0.5 : 1, scale: 1, zIndex: 20 }
                : { y: -26, rotate: -4, scale: 0.98, zIndex: 10 }
          }
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="relative mt-7 h-[128px] rounded-xl border border-white/15 bg-gradient-to-br from-[#1e252e] via-[#12161c] to-[#090c0f] p-3.5 shadow-xl text-white overflow-hidden cursor-pointer select-none"
        >
          {/* Metallic Light Sheen Gliding across surface on hover */}
          <motion.div
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            animate={isHovered && !reduceMotion ? { translateX: ["-100%", "200%"] } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase">
              HDFC Regalia
            </span>
            {/* Animated Contactless Wave SVG */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-neutral-400"
              aria-hidden="true"
              animate={isHovered && !reduceMotion ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.8 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path d="M8.5 16.5a5 5 0 0 1 0-7" />
              <path d="M12 19a8.5 8.5 0 0 0 0-14" />
              <path d="M15.5 21.5a12 12 0 0 0 0-19" />
            </motion.svg>
          </div>

          {/* Metallic Gold Chip */}
          <div className="mt-2.5 flex items-center justify-between">
            <div className="h-5 w-7 rounded-sm border border-[#a1813b] bg-gradient-to-br from-[#f5e3b5] via-[#d4b574] to-[#997a38] shadow-xs relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-t border-b border-[#7a5e24]/40" />
            </div>
            <span className="font-mono text-[11px] tracking-widest text-neutral-300">
              &bull;&bull;&bull;&bull; 4892
            </span>
          </div>

          {/* Card Balance */}
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-[9px] uppercase tracking-wider text-neutral-400">Available</span>
            <span className="font-mono text-[14px] font-bold text-white">₹42,850</span>
          </div>
        </motion.div>

        {/* Cash Wallet Pill */}
        <div className="mt-3.5 flex items-center justify-between rounded-xl border border-lp-line bg-lp-bg-2/50 dark:bg-black/30 px-3 py-1.5 text-xs transition-colors hover:border-lp-em/40 cursor-default">
          <span className="flex items-center gap-1.5 text-lp-ink font-medium text-[11px]">
            💵 Cash in Wallet
          </span>
          <span className="font-mono font-bold text-lp-ink text-[11px]">₹3,500</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
        <span className="text-[11px]">Tap cards to swap</span>
        <Link
          href="/features/accounts"
          className="font-semibold text-lp-em hover:underline text-[12px]"
        >
          Manage accounts &rarr;
        </Link>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 5: DIAGRAM TILE (SPEND RHYTHM HEATMAP) - RETAINED                      */
/* -------------------------------------------------------------------------- */

const HEATMAP_DAYS = [
  { day: 1, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 2, level: 2, amount: 680, label: "Grocery & commute" },
  { day: 3, level: 1, amount: 240, label: "Coffee & snacks" },
  { day: 4, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 5, level: 3, amount: 1850, label: "Dinner with friends" },
  { day: 6, level: 1, amount: 350, label: "Metro pass" },
  { day: 7, level: 0, amount: 0, label: "Zero spend day ✨" },

  { day: 8, level: 2, amount: 890, label: "Pantry restock" },
  { day: 9, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 10, level: 1, amount: 180, label: "Chai & breakfast" },
  { day: 11, level: 2, amount: 750, label: "Books & stationeries" },
  { day: 12, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 13, level: 3, amount: 2100, label: "Weekend outing" },
  { day: 14, level: 0, amount: 0, label: "Zero spend day ✨" },

  { day: 15, level: 1, amount: 420, label: "Lunch delivery" },
  { day: 16, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 17, level: 2, amount: 1240, label: "Today's spend" },
  { day: 18, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 19, level: 1, amount: 320, label: "Cab fare" },
  { day: 20, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 21, level: 2, amount: 940, label: "Home supplies" },

  { day: 22, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 23, level: 1, amount: 260, label: "Espresso & bakery" },
  { day: 24, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 25, level: 0, amount: 0, label: "Zero spend day ✨" },
  { day: 26, level: 2, amount: 820, label: "Pharmacy & fuel" },
  { day: 27, level: 1, amount: 190, label: "Quick bite" },
  { day: 28, level: 0, amount: 0, label: "Zero spend day ✨" },
]

function SpendRhythmCard() {
  const [hoveredDay, setHoveredDay] = useState<{ day: number; amount: number; label: string } | null>(HEATMAP_DAYS[16])
  const reduceMotion = useReducedMotion()

  return (
    <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 sm:p-7 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1">
      {/* Run-in Copy */}
      <div className="mb-5">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Spend rhythm.</strong>{" "}
          <span className="text-lp-ink-mute">
            Spot spending spikes and build healthy streaks of zero-spend days.
          </span>
        </p>
      </div>

      {/* Diagram: 4-Week Activity Heatmap */}
      <div className="rounded-2xl border border-lp-line bg-lp-bg-2/40 dark:bg-black/30 p-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold text-lp-ink-mute mb-2">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </div>

        {/* 28-day Heatmap Grid */}
        <div className="grid grid-cols-7 gap-1.5">
          {HEATMAP_DAYS.map((item) => {
            const isToday = item.day === 17
            const isSelected = hoveredDay?.day === item.day

            let bg = "bg-lp-card border border-lp-line/70"
            if (item.level === 1) bg = "bg-emerald-500/25 border border-emerald-500/30"
            if (item.level === 2) bg = "bg-emerald-500/60 border border-emerald-500/70"
            if (item.level === 3) bg = "bg-emerald-600 border border-emerald-700"

            return (
              <motion.button
                key={item.day}
                type="button"
                whileHover={{ scale: 1.25, zIndex: 10 }}
                whileTap={{ scale: 0.92 }}
                onMouseEnter={() => setHoveredDay(item)}
                onClick={() => setHoveredDay(item)}
                aria-label={`Day ${item.day}: ₹${item.amount}`}
                className={`relative h-7 w-full rounded-md transition-all duration-150 cursor-pointer ${bg} ${
                  isSelected ? "ring-2 ring-lp-ink ring-offset-1 z-10" : ""
                } flex items-center justify-center`}
              >
                {/* Zero spend dot */}
                {item.level === 0 && <span className="h-1 w-1 rounded-full bg-lp-line" />}

                {/* Today Radar Pulse */}
                {isToday && (
                  <span className="absolute inset-0 rounded-md border border-emerald-400 animate-ping opacity-60 pointer-events-none" />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Live Day Tooltip / Indicator */}
        <div className="mt-3 min-h-[30px] rounded-lg border border-lp-line/60 bg-lp-card px-2.5 py-1.5 text-center text-[11px] shadow-2xs">
          <AnimatePresence mode="wait">
            <motion.p
              key={hoveredDay?.day ?? "none"}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.12 }}
              className="font-medium text-lp-ink"
            >
              <span className="font-bold">Day {hoveredDay?.day}:</span>{" "}
              {hoveredDay && hoveredDay.amount > 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  ₹{hoveredDay.amount}
                </span>
              ) : (
                <span className="text-lp-em font-semibold">₹0 (No spend ✨)</span>
              )}{" "}
              &middot; <span className="text-lp-ink-mute">{hoveredDay?.label}</span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
        <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
          <motion.span
            animate={reduceMotion ? {} : { rotate: [-4, 4, -4], scale: [1, 1.12, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Flame size={13} className="text-amber-500 fill-amber-500" />
          </motion.span>{" "}
          12 no-spend days this month
        </span>
        <Link
          href="/features/searchable-history"
          className="font-semibold text-lp-em hover:underline text-[12px]"
        >
          Rhythm history &rarr;
        </Link>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION EXPORT                                                        */
/* -------------------------------------------------------------------------- */

export function FeaturesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="features" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[540px]">
            <p className="lp-section-label">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lp-em" />
              Built around daily use
            </p>
            <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-lp-ink-mute lg:pb-1">
            From three-tap entries to instant category breakdowns—money questions stay answered
            without turning personal finance into another chore.{" "}
            <Link
              href="/features"
              className="inline-flex items-center gap-1 font-semibold text-lp-ink underline-offset-2 hover:underline"
            >
              Explore all features <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </p>
        </motion.div>

        {/* Stageshow Bento Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {/* Row 1: Hero UI (Today's Command Center, 2 cols) + Search & Filter (1 col) */}
          <HeroCommandCenter />
          <SearchHistoryCard />

          {/* Row 2: Category Insights (1 col) + All Accounts (1 col) + Spend Rhythm (1 col) */}
          <CategoryInsightsCard />
          <TactileCardStack />
          <SpendRhythmCard />
        </div>
      </div>
    </section>
  )
}

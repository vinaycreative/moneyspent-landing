"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  Car,
  Coffee,
  Flame,
  Search,
  ShoppingBag,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

/* -------------------------------------------------------------------------- */
/* EASE & TIMING CONSTANTS                                                    */
/* -------------------------------------------------------------------------- */

const EASE_OUT = [0.22, 1, 0.36, 1] as const

/* -------------------------------------------------------------------------- */
/* TILE 1: TODAY AT A GLANCE (HERO UI, 2 COLS ON LG)                          */
/* -------------------------------------------------------------------------- */

type LedgerFilter = "all" | "food" | "groceries" | "transport"

interface TodayTxn {
  id: string
  title: string
  meta: string
  tag: string
  amount: string
  amountNum: number
  category: "food" | "groceries" | "transport"
}

const DAILY_SCENARIOS: TodayTxn[][] = [
  // Scenario 1: Workday Coffee & Commute
  [
    {
      id: "t1",
      title: "Blue Tokai Coffee",
      meta: "Food & Dining · Fi Money · 10:14 AM",
      tag: "Morning espresso",
      amount: "-₹240",
      amountNum: 240,
      category: "food",
    },
    {
      id: "t2",
      title: "Blinkit Quick Mart",
      meta: "Groceries · HDFC · 01:45 PM",
      tag: "Pantry supplies",
      amount: "-₹550",
      amountNum: 550,
      category: "groceries",
    },
    {
      id: "t3",
      title: "Uber Premier",
      meta: "Transport · Cash · 06:20 PM",
      tag: "Office commute",
      amount: "-₹450",
      amountNum: 450,
      category: "transport",
    },
  ],
  // Scenario 2: Midweek Fuel & Supermarket
  [
    {
      id: "t1",
      title: "Third Wave Coffee",
      meta: "Food & Dining · Fi Money · 09:30 AM",
      tag: "Flat white",
      amount: "-₹280",
      amountNum: 280,
      category: "food",
    },
    {
      id: "t2",
      title: "Nature's Basket",
      meta: "Groceries · HDFC · 02:15 PM",
      tag: "Fresh fruits & dairy",
      amount: "-₹720",
      amountNum: 720,
      category: "groceries",
    },
    {
      id: "t3",
      title: "Shell Auto Fuel",
      meta: "Transport · SBI Card · 05:45 PM",
      tag: "Fuel fill-up",
      amount: "-₹650",
      amountNum: 650,
      category: "transport",
    },
  ],
  // Scenario 3: Weekend & Casual Dining
  [
    {
      id: "t1",
      title: "Subway Fresh Melt",
      meta: "Food & Dining · Cash · 12:40 PM",
      tag: "Quick lunch",
      amount: "-₹320",
      amountNum: 320,
      category: "food",
    },
    {
      id: "t2",
      title: "Instamart Essentials",
      meta: "Groceries · Fi Money · 03:50 PM",
      tag: "Snacks & pantry",
      amount: "-₹480",
      amountNum: 480,
      category: "groceries",
    },
    {
      id: "t3",
      title: "Ola Electric Ride",
      meta: "Transport · HDFC · 07:15 PM",
      tag: "Evening transit",
      amount: "-₹380",
      amountNum: 380,
      category: "transport",
    },
  ],
]

function HeroCommandCenter() {
  const [filter, setFilter] = useState<LedgerFilter>("all")
  const reduceMotion = useReducedMotion()

  // Dynamic date state with hydration safety
  const [todayLabel, setTodayLabel] = useState<string>("Today · Live Ledger")
  const [currentTxns, setCurrentTxns] = useState<TodayTxn[]>(DAILY_SCENARIOS[0]!)

  useEffect(() => {
    const now = new Date()
    const weekday = now.toLocaleDateString("en-US", { weekday: "long" })
    const day = now.getDate()
    const month = now.toLocaleDateString("en-US", { month: "short" })
    setTodayLabel(`Today · ${weekday}, ${day} ${month}`)

    // Rotate realistic scenarios based on the day of the month
    const scenarioIdx = day % DAILY_SCENARIOS.length
    setCurrentTxns(DAILY_SCENARIOS[scenarioIdx]!)
  }, [])

  const filteredTxns =
    filter === "all" ? currentTxns : currentTxns.filter((t) => t.category === filter)

  const totalSpent = filteredTxns.reduce((acc, t) => acc + t.amountNum, 0)
  const dailyLimit = 2500
  const progressPercent = Math.min(100, Math.round((totalSpent / dailyLimit) * 100))

  const filterTabs: { id: LedgerFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: 3 },
    { id: "food", label: "Food", count: 1 },
    { id: "groceries", label: "Groceries", count: 1 },
    { id: "transport", label: "Transport", count: 1 },
  ]

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:col-span-2 lg:col-span-2"
    >
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Today at a glance.</strong>{" "}
          <span className="text-lp-ink-mute">
            Live daily pace, budget headroom, and chronological transactions without spreadsheet
            noise.
          </span>
        </p>
      </div>

      {/* Living Dashboard Preview */}
      <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-lp-line bg-lp-bg-2/40 p-4 dark:bg-black/30">
        <div>
          {/* Ledger Header Bar */}
          <div className="flex flex-col gap-2.5 border-b border-lp-line/70 pb-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Today Indicator */}
            <div className="flex w-fit items-center gap-1.5 rounded-lg border border-lp-line bg-lp-card px-2.5 py-1 shadow-2xs">
              <Calendar size={13} className="text-lp-em shrink-0" />
              <span className="text-[11px] font-semibold text-lp-ink" suppressHydrationWarning>
                {todayLabel}
              </span>
            </div>

            {/* Daily Limit & Pace Progress */}
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <div className="text-left sm:text-right">
                <span className="block text-[9px] font-medium uppercase tracking-wider text-lp-ink-mute">
                  Spent Today
                </span>
                <p className="font-mono text-[11px] font-bold text-lp-ink">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalSpent}
                      initial={reduceMotion ? false : { opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 3 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="inline-block"
                    >
                      ₹{totalSpent.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>{" "}
                  <span className="font-sans font-normal text-lp-ink-mute">/ ₹2,500 limit</span>
                </p>
              </div>

              {/* <div className="flex items-center gap-2">
                <div className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-lp-line sm:block">
                  <motion.div
                    className="h-full rounded-full bg-emerald-500"
                    initial={reduceMotion ? false : { width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-2.5 flex items-center gap-1 overflow-x-auto pb-0.5 text-[11px] no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`relative rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer shrink-0 select-none ${
                    isActive ? "text-lp-ink font-semibold" : "text-lp-ink-mute hover:text-lp-ink"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroLedgerFilterPill"
                      className="absolute inset-0 rounded-md border border-lp-line bg-lp-card shadow-2xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.label}
                    <span className="text-[9px] opacity-70">({tab.count})</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Transaction Rows Container (Stable min-height to prevent layout shifts) */}
          <div className="mt-2.5 min-h-[156px] space-y-1.5">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredTxns.map((txn, idx) => (
                <motion.div
                  key={txn.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.22, delay: idx * 0.04, ease: EASE_OUT }}
                  className="flex items-center justify-between rounded-xl border border-lp-line/70 bg-lp-card px-3 py-2 transition-colors hover:border-lp-em/30"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 ${
                        txn.category === "food"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : txn.category === "groceries"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                      }`}
                    >
                      {txn.category === "food" && <Coffee size={15} strokeWidth={2} />}
                      {txn.category === "groceries" && <ShoppingBag size={15} strokeWidth={2} />}
                      {txn.category === "transport" && <Car size={15} strokeWidth={2} />}
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-lp-ink">{txn.title}</p>
                      <p className="text-[10px] text-lp-ink-mute">{txn.meta}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[12px] font-bold text-lp-ink">
                      {txn.amount}
                    </span>
                    <span className="hidden sm:block text-[9px] text-lp-ink-mute">{txn.tag}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Live Daily Pace & Headroom Status */}
        {/* <div className="mt-3 flex items-center justify-between border-t border-lp-line/60 pt-2 text-[11px] text-lp-ink-mute">
          <span className="font-medium">
            Daily burn pace: <strong className="font-semibold text-lp-ink">₹155/hr</strong>
          </span>
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            ₹1,260 safe headroom
          </span>
        </div> */}
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between pt-1 text-xs text-lp-ink-mute">
        <span className="text-[11px]">{filteredTxns.length} transactions · Real-time ledger</span>
        <Link
          href="/features/today-view"
          className="text-[12px] font-semibold text-lp-em hover:underline"
        >
          Today workflow &rarr;
        </Link>
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 2: SEARCH & FILTER (1 COL ON LG)                                      */
/* -------------------------------------------------------------------------- */

interface SearchMatch {
  id: string
  merchant: string
  date: string
  category: "food" | "transit" | "groceries"
  amount: string
  tag: string
}

const SEARCH_PRESETS: Record<string, { summary: string; matches: SearchMatch[] }> = {
  Coffee: {
    summary: "3 purchases · ₹640 total spent",
    matches: [
      {
        id: "s1",
        merchant: "Blue Tokai Coffee",
        date: "Today, 10:14 AM",
        category: "food",
        amount: "-₹240",
        tag: "Morning espresso",
      },
      {
        id: "s2",
        merchant: "Third Wave Coffee",
        date: "19 Oct, 04:30 PM",
        category: "food",
        amount: "-₹220",
        tag: "Cold brew bottle",
      },
      {
        id: "s3",
        merchant: "Starbucks Reserve",
        date: "14 Oct, 11:15 AM",
        category: "food",
        amount: "-₹180",
        tag: "Iced latte",
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
        category: "transit",
        amount: "-₹450",
        tag: "Airport commute",
      },
      {
        id: "u2",
        merchant: "Uber Go",
        date: "21 Oct, 09:10 AM",
        category: "transit",
        amount: "-₹280",
        tag: "Office trip",
      },
      {
        id: "u3",
        merchant: "Uber Auto",
        date: "16 Oct, 02:40 PM",
        category: "transit",
        amount: "-₹120",
        tag: "Metro connection",
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
        category: "groceries",
        amount: "-₹550",
        tag: "Pantry supplies",
      },
      {
        id: "b2",
        merchant: "Blinkit Fresh Pantry",
        date: "18 Oct, 08:30 PM",
        category: "groceries",
        amount: "-₹820",
        tag: "Weekly groceries",
      },
      {
        id: "b3",
        merchant: "Blinkit Daily Essentials",
        date: "12 Oct, 10:15 AM",
        category: "groceries",
        amount: "-₹480",
        tag: "Dairy & bakery",
      },
    ],
  },
}

function SearchHistoryCard() {
  const [activeQuery, setActiveQuery] = useState<"Coffee" | "Uber" | "Blinkit">("Coffee")
  const reduceMotion = useReducedMotion()

  const activeData = SEARCH_PRESETS[activeQuery]

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1"
    >
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
      <div className="flex flex-1 flex-col justify-between rounded-2xl border border-lp-line bg-lp-bg-2/40 p-4 dark:bg-black/30">
        <div>
          {/* Natural Search Input Bar */}
          <div className="relative flex items-center rounded-xl border border-lp-line bg-lp-card px-2.5 py-1.5 shadow-2xs">
            <Search size={13} className="text-lp-em shrink-0 mr-2" />
            <AnimatePresence mode="wait">
              <motion.span
                key={activeQuery}
                initial={reduceMotion ? false : { opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 3 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="text-[11px] font-semibold text-lp-ink flex-1"
              >
                {activeQuery}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-[9px] text-lp-ink-mute/70 rounded bg-lp-bg-2 px-1 py-0.5 border border-lp-line/50">
              ⌘K
            </span>
          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="mt-2.5 flex items-center gap-1.5">
            {(["Coffee", "Uber", "Blinkit"] as const).map((q) => {
              const isSelected = activeQuery === q
              return (
                <button
                  key={q}
                  type="button"
                  onClick={() => setActiveQuery(q)}
                  className={`relative rounded-md px-2.5 py-1 text-[10px] font-semibold transition-colors cursor-pointer select-none ${
                    isSelected
                      ? "text-white"
                      : "bg-lp-card border border-lp-line text-lp-ink-soft hover:border-lp-em/40"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="searchPresetPill"
                      className="absolute inset-0 rounded-md bg-lp-em shadow-2xs"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {q === "Coffee" && <Coffee size={11} strokeWidth={2.2} />}
                    {q === "Uber" && <Car size={11} strokeWidth={2.2} />}
                    {q === "Blinkit" && <ShoppingBag size={11} strokeWidth={2.2} />}
                    {q}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Matching Search Results (Stable min-height) */}
          <div className="mt-2.5 min-h-[156px] space-y-1.5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeQuery}
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="space-y-1.5"
              >
                {activeData.matches.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, delay: idx * 0.03, ease: EASE_OUT }}
                    className="flex items-center justify-between rounded-xl border border-lp-line/70 bg-lp-card px-2.5 py-2.5 text-xs transition-colors hover:border-lp-em/30"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-lp-bg-2/70 text-lp-ink-soft">
                        {item.category === "food" && <Coffee size={12} strokeWidth={2} />}
                        {item.category === "transit" && <Car size={12} strokeWidth={2} />}
                        {item.category === "groceries" && (
                          <ShoppingBag size={12} strokeWidth={2} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-lp-ink text-[11px]">{item.merchant}</p>
                        <p className="text-[9px] text-lp-ink-mute">
                          {item.date} &middot; {item.tag}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-lp-ink text-[11px]">
                      {item.amount}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Search Result Summary */}
        <div className="mt-3 flex items-center justify-between border-t border-lp-line/60 pt-2 text-[10px] text-lp-ink-mute">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeData.summary}
              initial={reduceMotion ? false : { opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -2 }}
              transition={{ duration: 0.15 }}
              className="font-medium text-emerald-600 dark:text-emerald-400"
            >
              {activeData.summary}
            </motion.span>
          </AnimatePresence>
          <span className="text-[9px]">Instant filter</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between pt-1 text-xs text-lp-ink-mute">
        <span className="text-[11px]">Filter by merchant</span>
        <Link
          href="/features/searchable-history"
          className="text-[12px] font-semibold text-lp-em hover:underline"
        >
          Search history &rarr;
        </Link>
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 3: CATEGORY INSIGHTS (1 COL)                                          */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  {
    id: "cat-1",
    name: "Food & Dining",
    amount: "₹14,850",
    percent: 46,
    color: "#10b981",
    icon: Utensils,
  },
  {
    id: "cat-2",
    name: "Bills & Utilities",
    amount: "₹9,200",
    percent: 28,
    color: "#6366f1",
    icon: Zap,
  },
  {
    id: "cat-3",
    name: "Cab & Transit",
    amount: "₹5,140",
    percent: 16,
    color: "#f59e0b",
    icon: Car,
  },
  {
    id: "cat-4",
    name: "Shopping & Misc",
    amount: "₹3,220",
    percent: 10,
    color: "#fb7185",
    icon: ShoppingBag,
  },
]

function CategoryInsightsCard() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: 0.04, ease: EASE_OUT }}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1"
    >
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Category insights.</strong>{" "}
          <span className="text-lp-ink-mute">
            Instant visual breakdown of where your cash actually flows each month.
          </span>
        </p>
      </div>

      {/* Proportional Segmented Bar + Categories Preview */}
      <div className="flex flex-1 flex-col justify-between rounded-2xl border border-lp-line bg-lp-bg-2/40 p-4 dark:bg-black/30">
        <div>
          {/* Horizontal Chart Reveal */}
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            style={{ transformOrigin: "left" }}
            className="flex h-3 w-full overflow-hidden rounded-full bg-lp-line/50 p-0.5 gap-0.5"
          >
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
                  className={`h-full rounded-full transition-opacity duration-200 cursor-pointer ${
                    isHovered ? "ring-1.5 ring-lp-ink" : ""
                  }`}
                  aria-label={`${cat.name}: ${cat.percent}%`}
                />
              )
            })}
          </motion.div>

          {/* Category Breakdown Rows */}
          <div className="mt-3.5 space-y-1 relative">
            {CATEGORIES.map((cat) => {
              const isHovered = activeId === cat.id
              const IconComponent = cat.icon
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveId(cat.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`relative flex items-center justify-between rounded-xl px-2.5 py-2.5 text-xs transition-colors cursor-pointer z-10 ${
                    isHovered ? "text-lp-ink font-semibold" : "text-lp-ink-soft hover:text-lp-ink"
                  }`}
                >
                  {/* Subtle Layout Background Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="categoryHoverPill"
                      className="absolute inset-0 rounded-xl bg-lp-card shadow-2xs border border-lp-line/70 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-2">
                    <span
                      style={{ color: cat.color }}
                      className="flex h-5 w-5 items-center justify-center rounded-md bg-lp-bg-2/80 shrink-0"
                    >
                      <IconComponent size={12} strokeWidth={2} />
                    </span>
                    <span className="text-[12px]">{cat.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold">{cat.amount}</span>
                    <span
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
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

        {/* Insight note */}
        <div className="mt-3 flex items-center justify-between border-t border-lp-line/60 pt-2 text-[10px] text-lp-ink-mute">
          <span className="font-medium text-lp-ink">Food & Dining leads spend</span>
          <span>46% of monthly budget</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between pt-1 text-xs text-lp-ink-mute">
        <span className="text-[11px]">4 active categories</span>
        <Link
          href="/features/category-insights"
          className="text-[12px] font-semibold text-lp-em hover:underline"
        >
          Category reports &rarr;
        </Link>
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 4: ALL YOUR ACCOUNTS (1 COL)                                          */
/* -------------------------------------------------------------------------- */

function TactileCardStack() {
  const [activeCard, setActiveCard] = useState<"regalia" | "fi">("regalia")
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1"
    >
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">All your accounts.</strong>{" "}
          <span className="text-lp-ink-mute">
            Bank accounts, credit cards, and cash balances updating together.
          </span>
        </p>
      </div>

      {/* Account Cards Container */}
      <div className="flex flex-1 flex-col justify-between rounded-2xl border border-lp-line bg-lp-bg-2/40 p-4 dark:bg-black/30">
        <div className="relative mx-auto w-full max-w-[270px] h-[150px] pt-1 select-none">
          {/* Card 2: Fi Federal Bank (Savings) */}
          <motion.div
            onClick={() => setActiveCard(activeCard === "regalia" ? "fi" : "regalia")}
            animate={
              reduceMotion
                ? {}
                : activeCard === "fi"
                  ? { y: 22, scale: 1, zIndex: 20 }
                  : { y: 0, scale: 0.95, zIndex: 10 }
            }
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="absolute inset-x-1 top-0 h-[128px] rounded-xl border border-emerald-500/30 bg-[#0c2a20] p-3 text-white shadow-sm cursor-pointer"
          >
            <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-300">
              <span className="tracking-wide">ICICI Bank</span>
              <span className="font-mono text-emerald-200 font-bold text-[11px]">₹18,400</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-emerald-400/80">
              <span className="font-mono text-[10px]">•••• 6201</span>
              <span className="text-[9px] uppercase tracking-wider text-emerald-400/70">
                Savings
              </span>
            </div>
          </motion.div>

          {/* Card 1: HDFC Regalia (Credit) */}
          <motion.div
            onClick={() => setActiveCard(activeCard === "fi" ? "regalia" : "fi")}
            animate={
              reduceMotion
                ? {}
                : activeCard === "regalia"
                  ? { y: 22, scale: 1, zIndex: 20 }
                  : { y: 0, scale: 0.95, zIndex: 10 }
            }
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="absolute inset-x-1 top-0 h-[140px] rounded-xl border border-neutral-700/60 bg-neutral-900 dark:border-white/15 p-3 text-white shadow-md cursor-pointer overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-wider text-neutral-300 uppercase">
                HDFC Regalia
              </span>
              {/* Quiet Contactless Wave SVG */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-neutral-400"
                aria-hidden="true"
              >
                <path d="M8.5 16.5a5 5 0 0 1 0-7" />
                <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                <path d="M15.5 21.5a12 12 0 0 0 0-19" />
              </svg>
            </div>

            {/* Microchip & Card digits */}
            <div className="mt-2.5 flex items-center justify-between">
              <div className="h-4 w-5 rounded-[2px] border border-[#a1813b]/60 bg-[#d4b574]/20 relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-[0.5px] bg-[#a1813b]/60" />
                <div className="absolute h-full w-[0.5px] bg-[#a1813b]/60" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-neutral-300">
                •••• 4892
              </span>
            </div>

            {/* Card Balance */}
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-[8px] uppercase tracking-wider text-neutral-400">
                Available
              </span>
              <span className="font-mono text-[13px] font-bold text-white">₹42,850</span>
            </div>
          </motion.div>
        </div>

        {/* Cash Wallet Pill */}
        <div className="mt-3 flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3 py-3 text-xs">
          <span className="flex items-center gap-1.5 text-lp-ink font-medium text-[11px]">
            <Wallet size={12} className="text-lp-em" /> Cash in Wallet
          </span>
          <span className="font-mono font-bold text-lp-ink text-[11px]">₹3,500</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between pt-1 text-xs text-lp-ink-mute">
        <span className="text-[11px]">3 accounts connected</span>
        <Link
          href="/features/accounts"
          className="text-[12px] font-semibold text-lp-em hover:underline"
        >
          Manage accounts &rarr;
        </Link>
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/* TILE 5: SPEND RHYTHM HEATMAP (1 COL)                                       */
/* -------------------------------------------------------------------------- */

const HEATMAP_DAYS = [
  { day: 1, level: 0, amount: 0, label: "Zero spend day" },
  { day: 2, level: 2, amount: 680, label: "Grocery & commute" },
  { day: 3, level: 1, amount: 240, label: "Coffee & snacks" },
  { day: 4, level: 0, amount: 0, label: "Zero spend day" },
  { day: 5, level: 3, amount: 1850, label: "Dinner with friends" },
  { day: 6, level: 1, amount: 350, label: "Metro pass" },
  { day: 7, level: 0, amount: 0, label: "Zero spend day" },

  { day: 8, level: 2, amount: 890, label: "Pantry restock" },
  { day: 9, level: 0, amount: 0, label: "Zero spend day" },
  { day: 10, level: 1, amount: 180, label: "Chai & breakfast" },
  { day: 11, level: 2, amount: 750, label: "Books & stationeries" },
  { day: 12, level: 0, amount: 0, label: "Zero spend day" },
  { day: 13, level: 3, amount: 2100, label: "Weekend outing" },
  { day: 14, level: 0, amount: 0, label: "Zero spend day" },

  { day: 15, level: 1, amount: 420, label: "Lunch delivery" },
  { day: 16, level: 0, amount: 0, label: "Zero spend day" },
  { day: 17, level: 2, amount: 1240, label: "Today's spend" },
  { day: 18, level: 0, amount: 0, label: "Zero spend day" },
  { day: 19, level: 1, amount: 320, label: "Cab fare" },
  { day: 20, level: 0, amount: 0, label: "Zero spend day" },
  { day: 21, level: 2, amount: 940, label: "Home supplies" },

  { day: 22, level: 0, amount: 0, label: "Zero spend day" },
  { day: 23, level: 1, amount: 260, label: "Espresso & bakery" },
  { day: 24, level: 0, amount: 0, label: "Zero spend day" },
  { day: 25, level: 0, amount: 0, label: "Zero spend day" },
  { day: 26, level: 2, amount: 820, label: "Pharmacy & fuel" },
  { day: 27, level: 1, amount: 190, label: "Quick bite" },
  { day: 28, level: 0, amount: 0, label: "Zero spend day" },
]

function SpendRhythmCard() {
  const [hoveredDay, setHoveredDay] = useState<{
    day: number
    amount: number
    label: string
  } | null>(HEATMAP_DAYS[16])
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: 0.16, ease: EASE_OUT }}
      className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1"
    >
      {/* Run-in Copy */}
      <div className="mb-4">
        <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
          <strong className="font-semibold text-lp-ink">Spend rhythm.</strong>{" "}
          <span className="text-lp-ink-mute">
            Spot spending spikes and build healthy streaks of zero-spend days.
          </span>
        </p>
      </div>

      {/* Heatmap Preview Container */}
      <div className="flex flex-1 flex-col justify-between rounded-2xl border border-lp-line bg-lp-bg-2/40 p-4 dark:bg-black/30">
        <div>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold text-lp-ink-mute mb-2">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>

          {/* 28-day Heatmap Grid */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.012,
                },
              },
            }}
            className="grid grid-cols-7 gap-1.5"
          >
            {HEATMAP_DAYS.map((item) => {
              const isToday = item.day === 17
              const isSelected = hoveredDay?.day === item.day

              let bg = "bg-lp-card border border-lp-line/70"
              if (item.level === 1) bg = "bg-emerald-500/20 border border-emerald-500/30"
              if (item.level === 2) bg = "bg-emerald-500/55 border border-emerald-500/65"
              if (item.level === 3) bg = "bg-emerald-600 border border-emerald-700"

              return (
                <motion.button
                  key={item.day}
                  type="button"
                  variants={{
                    hidden: { opacity: 0, scale: 0.88 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.22, ease: EASE_OUT },
                    },
                  }}
                  whileHover={reduceMotion ? undefined : { scale: 1.15 }}
                  onMouseEnter={() => setHoveredDay(item)}
                  onClick={() => setHoveredDay(item)}
                  aria-label={`Day ${item.day}: ₹${item.amount}`}
                  className={`relative h-6.5 w-full rounded-md transition-colors duration-150 cursor-pointer ${bg} ${
                    isSelected ? "ring-2 ring-lp-ink ring-offset-1 z-10" : ""
                  } ${
                    isToday && !isSelected
                      ? "ring-1.5 ring-emerald-500 ring-offset-1 dark:ring-offset-black"
                      : ""
                  } flex items-center justify-center`}
                >
                  {/* Zero spend dot */}
                  {item.level === 0 && <span className="h-1 w-1 rounded-full bg-lp-line" />}
                </motion.button>
              )
            })}
          </motion.div>
        </div>

        {/* Live Day Tooltip / Indicator */}
        <div className="mt-3 min-h-[30px] rounded-lg border border-lp-line/60 bg-lp-card px-2.5 py-3 text-center text-[11px] shadow-2xs">
          <AnimatePresence mode="wait">
            <motion.p
              key={hoveredDay?.day ?? "none"}
              initial={reduceMotion ? false : { opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -2 }}
              transition={{ duration: 0.12 }}
              className="font-medium text-lp-ink"
            >
              <span className="font-bold">Day {hoveredDay?.day}:</span>{" "}
              {hoveredDay && hoveredDay.amount > 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  ₹{hoveredDay.amount}
                </span>
              ) : (
                <span className="text-lp-em font-semibold">₹0 (Zero spend)</span>
              )}{" "}
              &middot; <span className="text-lp-ink-mute">{hoveredDay?.label}</span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between pt-1 text-xs text-lp-ink-mute">
        <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
          <Flame size={13} className="text-amber-500 fill-amber-500 shrink-0" />
          12 no-spend days this month
        </span>
        <Link
          href="/features/searchable-history"
          className="text-[12px] font-semibold text-lp-em hover:underline"
        >
          Rhythm history &rarr;
        </Link>
      </div>
    </motion.article>
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
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <div className="max-w-[540px]">
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

        {/* Bento Grid */}
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

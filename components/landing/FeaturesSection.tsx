"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Coffee,
  ShoppingBag,
  Car,
  Sparkles,
  Zap,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

export function FeaturesSection() {
  const reduceMotion = useReducedMotion()

  // Tile 3 (Category insights) active hover state
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  // Tile 5 (Heatmap) active day hover state
  const [hoveredDay, setHoveredDay] = useState<{ day: number; amount: number; label: string } | null>(null)

  // Category insights data
  const categories = [
    { name: "Food & Dining", emoji: "🍔", amount: "₹14,850", percent: 46, color: "bg-emerald-500", barColor: "#10b981" },
    { name: "Bills & Utilities", emoji: "⚡", amount: "₹9,200", percent: 28, color: "bg-indigo-500", barColor: "#6366f1" },
    { name: "Cab & Transit", emoji: "🚕", amount: "₹5,140", percent: 16, color: "bg-amber-500", barColor: "#f59e0b" },
    { name: "Shopping & Misc", emoji: "🛍️", amount: "₹3,220", percent: 10, color: "bg-rose-400", barColor: "#fb7185" },
  ]

  // Spend Rhythm Heatmap data (28 days: 4 weeks x 7 days)
  // levels: 0 = no-spend (0), 1 = light (<500), 2 = medium (500-1500), 3 = heavy (>1500)
  const heatmapDays = [
    { day: 1, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 2, level: 2, amount: 680, label: "Grocery & commute" },
    { day: 3, level: 1, amount: 240, label: "Coffee & snacks" },
    { day: 4, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 5, level: 3, amount: 1850, label: "Dinner with friends" },
    { day: 6, level: 1, amount: 350, label: "Metro pass" },
    { day: 7, level: 0, amount: 0, label: "No spend day ✨" },

    { day: 8, level: 2, amount: 890, label: "Pantry restock" },
    { day: 9, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 10, level: 1, amount: 180, label: "Chai & breakfast" },
    { day: 11, level: 2, amount: 750, label: "Books & stationeries" },
    { day: 12, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 13, level: 3, amount: 2100, label: "Weekend outing" },
    { day: 14, level: 0, amount: 0, label: "No spend day ✨" },

    { day: 15, level: 1, amount: 420, label: "Lunch delivery" },
    { day: 16, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 17, level: 2, amount: 1240, label: "Today's spend" },
    { day: 18, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 19, level: 1, amount: 320, label: "Cab fare" },
    { day: 20, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 21, level: 2, amount: 940, label: "Home supplies" },

    { day: 22, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 23, level: 1, amount: 260, label: "Espresso & bakery" },
    { day: 24, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 25, level: 0, amount: 0, label: "No spend day ✨" },
    { day: 26, level: 2, amount: 820, label: "Pharmacy & fuel" },
    { day: 27, level: 1, amount: 190, label: "Quick bite" },
    { day: 28, level: 0, amount: 0, label: "No spend day ✨" },
  ]

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
            From three-tap entries to instant category breakdowns—money questions stay answered without turning
            personal finance into another chore.{" "}
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
          {/* ========================================================================= */}
          {/* TILE 1: HERO UI (Today's Command Center) - Spans 2 cols on lg and sm     */}
          {/* ========================================================================= */}
          <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 sm:p-8 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:col-span-2 lg:col-span-2">
            {/* Run-in Copy */}
            <div className="mb-6 max-w-xl">
              <p className="text-[17px] sm:text-[19px] leading-snug tracking-[-0.015em] text-lp-ink">
                <strong className="font-semibold text-lp-ink">Today at a glance.</strong>{" "}
                <span className="text-lp-ink-mute">
                  Live daily pace, budget headroom, and clear transactions without spreadsheet noise.
                </span>
              </p>
            </div>

            {/* Authentic MoneySpent Dashboard Slice */}
            <div className="relative overflow-hidden rounded-2xl border border-lp-line bg-lp-bg/70 p-4 sm:p-5 shadow-sm">
              {/* Ledger Header Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-lp-line/70 pb-3 sm:pb-4">
                {/* Date Navigator */}
                <div className="flex items-center justify-between sm:justify-start gap-1.5 rounded-xl border border-lp-line bg-lp-card px-2.5 py-1.5 shadow-2xs w-fit">
                  <button
                    type="button"
                    aria-label="Previous day"
                    className="text-lp-ink-mute hover:text-lp-ink transition-colors p-0.5"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <span className="flex items-center gap-1.5 px-1 text-xs font-semibold text-lp-ink">
                    <Calendar size={13} className="text-lp-em" />
                    Today, 24 Oct
                  </span>
                  <button
                    type="button"
                    aria-label="Next day"
                    className="text-lp-ink-mute hover:text-lp-ink transition-colors p-0.5"
                  >
                    <ChevronRight size={13} />
                  </button>
                </div>

                {/* Daily Pace Indicator */}
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-lp-ink-mute">
                      Spent Today
                    </span>
                    <p className="text-xs font-bold text-lp-ink">
                      ₹1,240 <span className="font-normal text-lp-ink-mute">/ ₹2,500</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    On track
                  </div>
                </div>
              </div>

              {/* Transaction Rows (Ledger) */}
              <div className="mt-3.5 space-y-2">
                {/* Row 1 */}
                <div className="flex items-center justify-between rounded-xl border border-lp-line/60 bg-lp-card px-3.5 py-2.5 transition-all duration-200 hover:border-lp-em/30 hover:shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Coffee size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-lp-ink">Blue Tokai Coffee</p>
                      <p className="text-[11px] text-lp-ink-mute">Food &middot; Fi Money &middot; 10:14 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[13px] font-bold text-lp-ink">-₹240</span>
                    <span className="hidden sm:block text-[10px] text-lp-ink-mute">Espresso</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between rounded-xl border border-lp-line/60 bg-lp-card px-3.5 py-2.5 transition-all duration-200 hover:border-lp-em/30 hover:shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <ShoppingBag size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-lp-ink">Blinkit Quick Mart</p>
                      <p className="text-[11px] text-lp-ink-mute">Groceries &middot; HDFC &middot; 01:45 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[13px] font-bold text-lp-ink">-₹550</span>
                    <span className="hidden sm:block text-[10px] text-lp-ink-mute">Pantry supplies</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between rounded-xl border border-lp-line/60 bg-lp-card px-3.5 py-2.5 transition-all duration-200 hover:border-lp-em/30 hover:shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Car size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-lp-ink">Uber Premier</p>
                      <p className="text-[11px] text-lp-ink-mute">Transport &middot; Cash &middot; 06:20 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[13px] font-bold text-lp-ink">-₹450</span>
                    <span className="hidden sm:block text-[10px] text-lp-ink-mute">Office commute</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Add Hint Strip */}
              <div className="mt-3 flex items-center justify-between pt-1 text-[11px] text-lp-ink-mute">
                <span className="flex items-center gap-1.5">
                  <kbd className="hidden sm:inline-block rounded border border-lp-line bg-lp-card px-1.5 py-0.5 font-mono text-[10px] font-semibold text-lp-ink shadow-2xs">
                    ⌘N
                  </kbd>
                  <span className="hidden sm:inline">Press to log new spend</span>
                  <span className="sm:hidden">Fast tap capture</span>
                </span>
                <Link
                  href="/features/today-view"
                  className="font-semibold text-lp-em hover:underline flex items-center gap-0.5 shrink-0"
                >
                  View today flow &rarr;
                </Link>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* TILE 2: STAT TILE (High-contrast Dark Card) - Big display number         */}
          {/* ========================================================================= */}
          <article className="group relative flex flex-col justify-between rounded-[26px] border border-[#1b2b24] bg-[#0c1411] dark:bg-[#111714] dark:border-emerald-500/30 p-6 sm:p-8 text-white shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_12px_36px_rgba(16,185,129,0.08)] col-span-1">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <Zap size={11} className="text-emerald-400" />
                  Speed Habit
                </span>
                <span className="font-mono text-[11px] text-emerald-300/70">100% Offline</span>
              </div>

              {/* Big Stat Display */}
              <div className="mt-6 sm:mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  From open to saved in
                </p>
                <div className="mt-1 flex items-baseline gap-1 font-mono">
                  <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    <span className="text-emerald-400">&lt;</span> 3s
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-[14px] leading-relaxed text-neutral-300">
                Open, tap interactive sentence chips, done. 4&times; faster than multi-step forms in traditional finance apps.
              </p>
            </div>

            {/* Comparison Strip at Bottom */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] space-y-1.5">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Standard bank app:</span>
                <span className="font-mono text-neutral-400 line-through">~45 seconds</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-emerald-300">
                <span className="flex items-center gap-1">
                  <Check size={12} className="text-emerald-400" /> MoneySpent:
                </span>
                <span className="font-mono text-emerald-300">&lt; 3 seconds</span>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* TILE 3: COMPONENT TILE (Category Insights) - Real proportional bar       */}
          {/* ========================================================================= */}
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

            {/* Component: Category Proportional Distribution */}
            <div className="rounded-2xl border border-lp-line bg-lp-bg-2/50 dark:bg-black/30 p-4">
              {/* Segmented Distribution Bar */}
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-lp-line/50 p-0.5">
                {categories.map((cat, i) => (
                  <button
                    key={cat.name}
                    type="button"
                    onMouseEnter={() => setActiveCategory(i)}
                    onMouseLeave={() => setActiveCategory(null)}
                    style={{
                      width: `${cat.percent}%`,
                      backgroundColor: cat.barColor,
                      opacity: activeCategory === null || activeCategory === i ? 1 : 0.4,
                    }}
                    className="h-full first:rounded-l-full last:rounded-r-full transition-opacity duration-200 cursor-pointer"
                    aria-label={`${cat.name}: ${cat.percent}%`}
                  />
                ))}
              </div>

              {/* Category Breakdown Rows */}
              <div className="mt-3.5 space-y-2">
                {categories.map((cat, i) => (
                  <div
                    key={cat.name}
                    onMouseEnter={() => setActiveCategory(i)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className={`flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs transition-colors cursor-pointer ${
                      activeCategory === i
                        ? "bg-lp-card shadow-2xs font-semibold text-lp-ink"
                        : "text-lp-ink-soft hover:bg-lp-card/60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{cat.emoji}</span>
                      <span className="font-medium text-lp-ink">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-lp-ink">{cat.amount}</span>
                      <span className="rounded bg-lp-bg-2 px-1.5 py-0.5 text-[10px] font-bold text-lp-ink-mute">
                        {cat.percent}%
                      </span>
                    </div>
                  </div>
                ))}
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

          {/* ========================================================================= */}
          {/* TILE 4: OBJECT TILE (Multi-Account Balances) - Physical tactile cards     */}
          {/* ========================================================================= */}
          <article className="group relative flex flex-col justify-between rounded-[26px] border border-lp-line bg-lp-card p-6 sm:p-7 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] col-span-1">
            {/* Run-in Copy */}
            <div className="mb-5">
              <p className="text-[16px] sm:text-[17px] leading-snug tracking-[-0.015em] text-lp-ink">
                <strong className="font-semibold text-lp-ink">All your accounts.</strong>{" "}
                <span className="text-lp-ink-mute">
                  Bank accounts, credit cards, and cash balances updating together.
                </span>
              </p>
            </div>

            {/* Object: Physical Bank Cards Stack */}
            <div className="relative mx-auto w-full max-w-[280px] py-2">
              {/* Card 2 (Background card - Fi Federal) */}
              <div className="absolute top-0 right-1 left-7 h-[115px] rounded-xl border border-emerald-600/30 bg-gradient-to-br from-[#0c392b] to-[#041a13] p-3 shadow-md -rotate-3 transition-transform duration-300 group-hover:-rotate-4 text-white">
                <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-300">
                  <span>Fi Federal</span>
                  <span className="font-mono text-emerald-200">₹18,400</span>
                </div>
              </div>

              {/* Card 1 (Foreground card - HDFC Titanium) */}
              <div className="relative mt-4 h-[126px] rounded-xl border border-white/10 bg-gradient-to-br from-[#1e252e] via-[#12161c] to-[#090c0f] p-3.5 shadow-xl rotate-1 transition-transform duration-300 group-hover:rotate-0 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase">
                    HDFC Regalia
                  </span>
                  {/* Metallic Contactless Wave */}
                  <svg
                    width="14"
                    height="14"
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

                {/* Metallic Gold Chip */}
                <div className="mt-2.5 flex items-center justify-between">
                  <div className="h-5 w-7 rounded-sm border border-[#a1813b] bg-gradient-to-br from-[#f5e3b5] via-[#d4b574] to-[#997a38] shadow-xs relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-t border-b border-[#7a5e24]/40" />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-neutral-400">
                    &bull;&bull;&bull;&bull; 4892
                  </span>
                </div>

                {/* Card Balance */}
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400">Available</span>
                  <span className="font-mono text-[14px] font-bold text-white">₹42,850</span>
                </div>
              </div>

              {/* Cash Wallet Pill */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-lp-line bg-lp-bg-2/50 dark:bg-black/30 px-3 py-1.5 text-xs">
                <span className="flex items-center gap-1.5 text-lp-ink font-medium text-[11px]">
                  💵 Cash in Wallet
                </span>
                <span className="font-mono font-bold text-lp-ink text-[11px]">₹3,500</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
              <span className="text-[11px]">Synced locally</span>
              <Link
                href="/features/accounts"
                className="font-semibold text-lp-em hover:underline text-[12px]"
              >
                Manage accounts &rarr;
              </Link>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* TILE 5: DIAGRAM TILE (Spend Rhythm Heatmap) - Calendar density & streaks  */}
          {/* ========================================================================= */}
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
            <div className="rounded-2xl border border-lp-line bg-lp-bg-2/50 dark:bg-black/30 p-4">
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
                {heatmapDays.map((item) => {
                  let bg = "bg-lp-card border border-lp-line/70 hover:border-lp-em/60"
                  if (item.level === 1) bg = "bg-emerald-500/25 border border-emerald-500/30"
                  if (item.level === 2) bg = "bg-emerald-500/60 border border-emerald-500/70"
                  if (item.level === 3) bg = "bg-emerald-600 border border-emerald-700"

                  return (
                    <button
                      key={item.day}
                      type="button"
                      onMouseEnter={() => setHoveredDay(item)}
                      onMouseLeave={() => setHoveredDay(null)}
                      aria-label={`Day ${item.day}: ₹${item.amount}`}
                      className={`h-7 w-full rounded-md transition-all duration-150 cursor-pointer ${bg} flex items-center justify-center`}
                    >
                      {item.level === 0 && (
                        <span className="h-1 w-1 rounded-full bg-lp-line" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Live Day Tooltip / Indicator */}
              <div className="mt-3 min-h-[30px] rounded-lg border border-lp-line/60 bg-lp-card px-2.5 py-1.5 text-center text-[11px]">
                {hoveredDay ? (
                  <p className="font-medium text-lp-ink">
                    <span className="font-bold">Day {hoveredDay.day}:</span>{" "}
                    {hoveredDay.amount > 0 ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                        ₹{hoveredDay.amount}
                      </span>
                    ) : (
                      <span className="text-lp-em font-semibold">₹0 (Zero spend day ✨)</span>
                    )}{" "}
                    &middot; <span className="text-lp-ink-mute">{hoveredDay.label}</span>
                  </p>
                ) : (
                  <p className="text-lp-ink-mute">
                    Hover a day to inspect daily spend density
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-lp-ink-mute pt-1">
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
                <Sparkles size={12} /> 12 no-spend days this month
              </span>
              <Link
                href="/features/searchable-history"
                className="font-semibold text-lp-em hover:underline text-[12px]"
              >
                Rhythm history &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

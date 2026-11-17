"use client"

import Link from "next/link"
import {
  CalendarDays,
  ChartPie,
  Layers3,
  Search,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"

interface FeatureItem {
  title: string
  desc: string
  href: string
  icon: LucideIcon
  badge: string
  preview: React.ReactNode
}

export function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      title: "Fast daily logging",
      desc: "Add an expense or income, pick the account and category, and get back to your day in 3 taps.",
      href: "/features/daily-logging",
      icon: Zap,
      badge: "Core habit",
      preview: (
        <div className="mt-4 rounded-xl border border-rose-500/20 bg-rose-50/30 p-2.5 text-[11px] font-medium text-lp-ink dark:bg-rose-950/20">
          I spent <span className="font-bold text-rose-600 dark:text-rose-400">₹450</span> on <span className="font-bold text-amber-600 dark:text-amber-400">Food</span> at <span className="font-bold text-indigo-600 dark:text-indigo-400">Burger King</span>
        </div>
      ),
    },
    {
      title: "Today, at a glance",
      desc: "Open to the day that matters. See spend for today, move between dates, review every transaction.",
      href: "/features/today-view",
      icon: CalendarDays,
      badge: "Zero overwhelm",
      preview: (
        <div className="mt-4 flex items-center justify-between rounded-xl border border-lp-line bg-lp-bg-2/60 p-2.5 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-ms-muted">Spent Today</span>
            <p className="font-bold text-ink">₹1,240 <span className="text-[10px] font-normal text-ms-muted">· 4 txns</span></p>
          </div>
          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            On Track
          </span>
        </div>
      ),
    },
    {
      title: "Category insights",
      desc: "See where money went by category, then drill into totals, trends, and matching transactions.",
      href: "/features/category-insights",
      icon: ChartPie,
      badge: "Smart analytics",
      preview: (
        <div className="mt-4 space-y-1.5 rounded-xl border border-lp-line bg-lp-bg-2/60 p-2.5">
          <div className="flex justify-between text-[10px] font-semibold">
            <span>🍔 Food (44%)</span>
            <span>⚡ Bills (32%)</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-lp-line flex">
            <div className="h-full bg-emerald-500 w-[44%]" />
            <div className="h-full bg-indigo-500 w-[32%]" />
            <div className="h-full bg-amber-500 w-[24%]" />
          </div>
        </div>
      ),
    },
    {
      title: "All your accounts",
      desc: "Cash, bank, wallet, and credit side by side. Balances update as you track.",
      href: "/features/accounts",
      icon: Layers3,
      badge: "Real balances",
      preview: (
        <div className="mt-4 flex items-center gap-1.5 overflow-hidden">
          <span className="rounded-lg border border-line bg-lp-bg-2/60 px-2 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            HDFC: ₹42.8k
          </span>
          <span className="rounded-lg border border-line bg-lp-bg-2/60 px-2 py-1 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
            Fi: ₹18.4k
          </span>
          <span className="rounded-lg border border-line bg-lp-bg-2/60 px-2 py-1 text-[10px] font-semibold text-neutral-500">
            Cash: ₹3.5k
          </span>
        </div>
      ),
    },
    {
      title: "Searchable history",
      desc: "Search transactions, filter by date, account, or type — list or calendar view.",
      href: "/features/searchable-history",
      icon: Search,
      badge: "Instant lookup",
      preview: (
        <div className="mt-4 flex items-center justify-between rounded-xl border border-lp-line bg-lp-bg-2/60 px-2.5 py-1.5 text-[11px] text-lp-ink-mute">
          <span className="truncate">🔍 Search &ldquo;Coffee&rdquo; or &ldquo;Uber&rdquo;…</span>
          <span className="rounded bg-lp-card px-1.5 py-0.5 text-[9px] font-bold border border-lp-line">
            List / Cal
          </span>
        </div>
      ),
    },
    {
      title: "Built for control",
      desc: "Hide balances, customize themes and categories, import and export when you need to.",
      href: "/features/control",
      icon: ShieldCheck,
      badge: "Private by design",
      preview: (
        <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-50/40 p-2 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
          <span>🔒 No bank sync required</span>
          <span>CSV Export</span>
        </div>
      ),
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[540px]">
            <p className="lp-section-label">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
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
            <Link href="/features" className="font-semibold text-lp-ink underline-offset-2 hover:underline">
              Explore all features
            </Link>
            .
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, href, icon: Icon, badge, preview }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={href}
                className="lp-feat group flex h-full flex-col justify-between rounded-2xl border border-lp-line bg-lp-card p-6 transition-all hover:border-lp-em/40 hover:shadow-[var(--lp-shadow-sm)] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lp-line bg-lp-em-tint text-lp-em transition-colors duration-200 group-hover:border-lp-em/30 group-hover:bg-lp-em-soft">
                      <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-lp-bg-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lp-ink-mute">
                      {badge}
                    </span>
                  </div>

                  <h3 className="lp-display mt-5 text-lg font-semibold tracking-[-0.02em] text-lp-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-lp-ink-mute">{desc}</p>
                </div>

                <div>
                  {preview}
                  <div className="mt-4 flex items-center justify-between border-t border-lp-line pt-3">
                    <span className="text-[13px] font-semibold text-lp-em group-hover:underline">
                      See workflow →
                    </span>
                    <span className="text-[11px] text-lp-ink-mute">Free forever</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

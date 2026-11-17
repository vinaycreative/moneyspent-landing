"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check, AlertCircle, Sparkles } from "lucide-react"

interface PresetExample {
  amount: string
  category: string
  merchant: string
  account: string
  icon: string
  color: string
}

const PRESET_EXAMPLES: PresetExample[] = [
  { amount: "₹450", category: "Food", merchant: "Burger King", account: "HDFC Bank", icon: "🍔", color: "text-rose-600 bg-rose-50 border-rose-300 dark:bg-rose-950/40 dark:text-rose-400" },
  { amount: "₹40", category: "Snacks", merchant: "Chai Point", account: "Cash Wallet", icon: "☕", color: "text-amber-600 bg-amber-50 border-amber-300 dark:bg-amber-950/40 dark:text-amber-400" },
  { amount: "₹1,200", category: "Groceries", merchant: "Blinkit", account: "Fi UPI", icon: "🛒", color: "text-emerald-600 bg-emerald-50 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-400" },
  { amount: "₹280", category: "Travel", merchant: "Uber", account: "SBI Card", icon: "🚕", color: "text-indigo-600 bg-indigo-50 border-indigo-300 dark:bg-indigo-950/40 dark:text-indigo-400" },
]

export function SentenceSection({}: { sentenceWords?: unknown } = {}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = PRESET_EXAMPLES[activeIdx]

  const formFields = [
    { label: "Transaction Type", value: "Expense (default)", note: "Mandatory tap" },
    { label: "Amount", value: "₹0.00", note: "Opens numpad" },
    { label: "Category", value: "Select from 42 options…", note: "Dropdown scroll" },
    { label: "Payment Account", value: "Select bank / wallet…", note: "Modal picker" },
    { label: "Merchant / Payee", value: "Type merchant name", note: "Keyboard opens" },
    { label: "Notes & Tags", value: "Optional note", note: "Extra field" },
  ]

  return (
    <section id="sentence" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          className="max-w-[580px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lp-section-label">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Quick logging comparison
          </p>
          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
            Add spends like
            <br />
            writing a note.
          </h2>
          <p className="mt-5 max-w-[500px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            One short sentence, a few taps, and your expense is safely recorded—without filling a six-field spreadsheet form for every coffee.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {/* Left: Typical Apps (High Friction) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-rose-500/20 bg-rose-50/15 p-6 sm:p-8 dark:bg-rose-950/10"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-100/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
                  <AlertCircle size={13} />
                  Typical Apps
                </span>
                <span className="text-xs font-semibold text-rose-700 dark:text-rose-400">
                  ~28 seconds per spend
                </span>
              </div>

              <h3 className="lp-display mt-4 text-xl font-semibold text-lp-ink sm:text-2xl">
                A bureaucratic form for every chai.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
                Amount, nested category dropdown, account selector, merchant field, note, and date.
                Six steps before you can pocket your phone.
              </p>

              {/* Form Mockup */}
              <div className="mt-6 space-y-2 opacity-85">
                {formFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between rounded-xl border border-rose-200/50 bg-lp-card/80 px-3.5 py-2.5 text-xs dark:border-rose-900/30 dark:bg-neutral-900/70"
                  >
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-neutral-500 text-[10px]">
                        {field.label}
                      </p>
                      <p className="font-medium text-lp-ink truncate max-w-[160px] sm:max-w-[200px]">
                        {field.value}
                      </p>
                    </div>
                    <span className="text-[10px] text-rose-600/80 font-medium whitespace-nowrap dark:text-rose-400/80">
                      {field.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-rose-200/40 pt-4 text-xs text-rose-800 dark:text-rose-300">
              <span className="font-medium">Why people abandon tracking:</span>
              <span className="font-bold">Too much admin work</span>
            </div>
          </motion.div>

          {/* Right: MoneySpent (Tactile Sentence Flow) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-lp-card p-6 shadow-[var(--lp-shadow-md)] sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <Sparkles size={13} className="text-emerald-600 dark:text-emerald-400" />
                  MoneySpent Way
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  ~3.2 seconds · 3 taps
                </span>
              </div>

              <h3 className="lp-display mt-4 text-xl font-semibold text-lp-ink sm:text-2xl">
                One short sentence. Done.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
                Read it naturally. Tap a blank to tweak it, or pick from quick presets. The rest auto-completes from your habits.
              </p>

              {/* Interactive Sentence Sandbox */}
              <div className="mt-6 rounded-2xl border border-lp-line bg-lp-bg-2/50 p-4 sm:p-5">
                <p className="lp-display text-[19px] font-semibold leading-[1.5] tracking-[-0.015em] text-lp-ink sm:text-[22px]">
                  I spent{" "}
                  <span className="rounded-lg border-b-2 border-rose-500 bg-rose-100/70 px-2 py-0.5 text-rose-700 font-bold dark:bg-rose-950/60 dark:text-rose-300">
                    {current.amount}
                  </span>{" "}
                  on{" "}
                  <span className="rounded-lg border-b-2 border-amber-500 bg-amber-100/70 px-2 py-0.5 text-amber-800 font-bold dark:bg-amber-950/60 dark:text-amber-300">
                    {current.category}
                  </span>{" "}
                  at{" "}
                  <span className="rounded-lg border-b-2 border-indigo-500 bg-indigo-100/70 px-2 py-0.5 text-indigo-800 font-bold dark:bg-indigo-950/60 dark:text-indigo-300">
                    {current.merchant}
                  </span>{" "}
                  paid with{" "}
                  <span className="rounded-lg border-b-2 border-emerald-500 bg-emerald-100/70 px-2 py-0.5 text-emerald-800 font-bold dark:bg-emerald-950/60 dark:text-emerald-300">
                    {current.account}
                  </span>
                  .
                </p>

                {/* Instant Live Record Result */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-lp-line bg-lp-card p-3 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lp-bg text-base shadow-xs">
                      {current.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-lp-ink">{current.merchant}</p>
                      <p className="text-[10px] text-lp-ink-mute">
                        {current.category} · {current.account}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-rose-600 dark:text-rose-400">
                    −{current.amount}
                  </span>
                </div>
              </div>

              {/* Try Different Presets */}
              <div className="mt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-lp-ink-mute">
                  Try another spend:
                </p>
                <div className="flex flex-wrap gap-2">
                  {PRESET_EXAMPLES.map((item, idx) => (
                    <button
                      key={item.merchant}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`cursor-pointer flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                        activeIdx === idx
                          ? "border-lp-em bg-lp-em text-white shadow-xs"
                          : "border-lp-line bg-lp-card text-lp-ink hover:border-lp-em/40"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.merchant}</span>
                      <span className="opacity-75">({item.amount})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-lp-line pt-4 text-xs text-lp-em font-semibold">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="stroke-[3]" />
                Saves in 1 tap · Balance auto-updates
              </span>
              <span>Habit sticks</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

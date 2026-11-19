"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Calendar, Check, X } from "lucide-react"

type ActiveField = "amount" | "note" | "category" | "account"

interface CategoryOption {
  id: string
  label: string
  emoji: string
}

interface AccountOption {
  id: string
  label: string
  color: string
}

const CATEGORIES: CategoryOption[] = [
  { id: "c1", label: "Food", emoji: "🍔" },
  { id: "c2", label: "Coffee", emoji: "☕" },
  { id: "c3", label: "Groceries", emoji: "🛒" },
  { id: "c4", label: "Travel", emoji: "🚕" },
  { id: "c5", label: "Bills", emoji: "⚡" },
  { id: "c6", label: "Cinema", emoji: "🎬" },
]

const ACCOUNTS: AccountOption[] = [
  { id: "a1", label: "HDFC Bank", color: "#0d6b4c" },
  { id: "a2", label: "Fi Money", color: "#2563eb" },
  { id: "a3", label: "Cash Wallet", color: "#d97706" },
  { id: "a4", label: "SBI Card", color: "#db2777" },
]

const SUGGESTED_AMOUNTS = [50, 100, 150, 200, 450, 1000]
const NOTE_SUGGESTIONS = ["Coffee", "Burger King", "Groceries", "Uber", "Chai", "Fuel"]

const PRESET_SCENARIOS = [
  {
    name: "Burger King",
    amount: "450",
    note: "Burger King",
    category: CATEGORIES[0],
    account: ACCOUNTS[0],
  },
  {
    name: "Chai Point",
    amount: "40",
    note: "Chai Point",
    category: CATEGORIES[1],
    account: ACCOUNTS[2],
  },
  // {
  //   name: "Blinkit",
  //   amount: "1250",
  //   note: "Blinkit",
  //   category: CATEGORIES[2],
  //   account: ACCOUNTS[1],
  // },
  {
    name: "Uber Ride",
    amount: "280",
    note: "Uber",
    category: CATEGORIES[3],
    account: ACCOUNTS[3],
  },
]

export function SentenceSection({}: { sentenceWords?: unknown } = {}) {
  const [activeField, setActiveField] = useState<ActiveField>("amount")
  const [amount, setAmount] = useState("450")
  const [note, setNote] = useState("Burger King")
  const [category, setCategory] = useState<CategoryOption>(CATEGORIES[0])
  const [account, setAccount] = useState<AccountOption>(ACCOUNTS[0])
  const [saved, setSaved] = useState(false)
  const reduceMotion = useReducedMotion()

  const handleSelectPreset = (p: (typeof PRESET_SCENARIOS)[0]) => {
    setAmount(p.amount)
    setNote(p.note)
    setCategory(p.category)
    setAccount(p.account)
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2600)
  }

  return (
    <section id="sentence" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Left Column: Copy & Narrative */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
              Add spends like
              <br />
              writing a note.
            </h2>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              One sentence, a few taps, and your expense is saved — without filling a six-field
              spreadsheet form for every coffee.
            </p>

            {/* Feature Highlights */}
            <div className="mt-8 space-y-4">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-em-soft text-lp-em font-bold text-xs mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-lp-ink">
                    Fill-in-the-blank speed
                  </h4>
                  <p className="text-[13px] text-lp-ink-mute mt-0.5 leading-relaxed">
                    Tap any underlined chip to swap amount, note, category, or account instantly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-em-soft text-lp-em font-bold text-xs mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-lp-ink">One-tap suggestions</h4>
                  <p className="text-[13px] text-lp-ink-mute mt-0.5 leading-relaxed">
                    MoneySpent remembers frequent amounts, recent places, and payment methods so
                    you log in under 3 seconds.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Interactive Scenario Presets */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 pt-6 border-t border-lp-line"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-lp-ink-mute mb-3">
                Try a real spend:
              </p>
              <div className="flex flex-wrap gap-2">
                {PRESET_SCENARIOS.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-lp-line bg-lp-card px-3.5 py-1.5 text-[12px] font-medium text-lp-ink shadow-2xs transition-all hover:border-lp-line-strong hover:bg-lp-bg-2 cursor-pointer active:scale-95"
                  >
                    <span>{p.category.emoji}</span>
                    <span>{p.name}</span>
                    <span className="font-semibold text-lp-ink-mute">₹{p.amount}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: The Actual MoneySpent Product Interface */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[440px] sm:max-w-[460px] mx-auto lg:max-w-[470px] lg:ml-auto lg:mr-0"
          >
            {/* Ambient Product Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--lp-em)_14%,transparent),transparent_70%)] blur-2xl -z-10"
            />

            {/* Actual MoneySpent Mobile Sheet UI */}
            <div className="rounded-[2.2rem] sm:rounded-[2.4rem] border border-lp-line bg-lp-card p-5 sm:p-7 shadow-[var(--lp-shadow-lg)]">
              {/* Sheet Drag Handle */}
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-lp-line" />

              {/* Sheet Header */}
              <div className="grid grid-cols-[2.25rem_1fr_2.25rem] items-center gap-3 border-b border-lp-line pb-3.5 pt-1 text-center">
                <button
                  type="button"
                  aria-label="Close sheet"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-lp-line bg-lp-bg-2 text-lp-ink-mute transition-colors hover:text-lp-ink"
                >
                  <X size={15} />
                </button>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-lp-ink">
                    Add Expense
                  </h3>
                  <p className="text-[11px] font-medium text-lp-ink-mute">
                    Fill the sentence to save a spend
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-lp-line bg-lp-bg-2 text-lp-ink-mute">
                    <Calendar size={15} />
                  </div>
                </div>
              </div>

              {/* The Live Interactive Sentence (Exact Product SentenceChip Design) */}
              <div className="py-5">
                <p className="text-[22px] sm:text-[24px] font-black leading-[1.3] tracking-tight text-lp-ink">
                  I spent {/* Amount Chip */}
                  <span
                    onClick={() => setActiveField("amount")}
                    className={`inline-flex cursor-pointer items-center rounded-md border-b-2 border-dashed px-2 py-0.5 transition-all select-none ${
                      activeField === "amount"
                        ? "bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400 shadow-2xs scale-[1.03]"
                        : "bg-lp-bg-2 border-lp-line text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {amount ? `₹${amount}` : "₹---"}
                  </span>{" "}
                  on {/* Note Chip */}
                  <span
                    onClick={() => setActiveField("note")}
                    className={`inline-flex cursor-pointer items-center rounded-md border-b-2 border-dashed px-2 py-0.5 transition-all select-none ${
                      activeField === "note"
                        ? "bg-lp-ink/10 border-lp-ink text-lp-ink shadow-2xs scale-[1.03]"
                        : "bg-lp-bg-2 border-lp-line text-lp-ink"
                    }`}
                  >
                    {note || "---"}
                  </span>{" "}
                  for {/* Category Chip */}
                  <span
                    onClick={() => setActiveField("category")}
                    className={`inline-flex cursor-pointer items-center rounded-md border-b-2 border-dashed px-2 py-0.5 transition-all select-none ${
                      activeField === "category"
                        ? "bg-amber-500/15 border-amber-500 text-amber-700 dark:text-amber-400 shadow-2xs scale-[1.03]"
                        : "bg-lp-bg-2 border-lp-line text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {category ? `${category.emoji} ${category.label}` : "---"}
                  </span>{" "}
                  from {/* Account Chip */}
                  <span
                    onClick={() => setActiveField("account")}
                    className={`inline-flex cursor-pointer items-center rounded-md border-b-2 border-dashed px-2 py-0.5 transition-all select-none ${
                      activeField === "account"
                        ? "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-2xs scale-[1.03]"
                        : "bg-lp-bg-2 border-lp-line text-emerald-700 dark:text-emerald-400"
                    }`}
                  >
                    {account?.label ?? "---"}
                  </span>{" "}
                  today
                </p>
              </div>

              {/* Dynamic In-Sheet Picker Area (Exactly as in AddExpenseSheet.tsx) */}
              <div className="rounded-2xl border border-lp-line bg-lp-bg-2/50 p-4 min-h-[175px]">
                <AnimatePresence mode="wait">
                  {/* 1. Amount Input View */}
                  {activeField === "amount" && (
                    <motion.div
                      key="amount"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="mb-3 flex h-11 items-center gap-2 rounded-xl border border-rose-500/40 bg-lp-card px-3 shadow-2xs">
                        <span className="text-base font-bold text-rose-600 dark:text-rose-400">
                          ₹
                        </span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value)
                            setSaved(false)
                          }}
                          className="min-w-0 flex-1 bg-transparent text-base font-bold text-lp-ink outline-none"
                          placeholder="0"
                        />
                      </div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-lp-ink-mute">
                        Suggested Amounts
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {SUGGESTED_AMOUNTS.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setAmount(String(amt))
                              setActiveField("note")
                              setSaved(false)
                            }}
                            className={`h-8 rounded-full border px-3 text-xs font-semibold transition-all cursor-pointer ${
                              amount === String(amt)
                                ? "border-rose-500 bg-rose-500 text-white shadow-2xs"
                                : "border-lp-line bg-lp-card text-lp-ink hover:bg-lp-bg-2"
                            }`}
                          >
                            ₹{amt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* 2. Note Input View */}
                  {activeField === "note" && (
                    <motion.div
                      key="note"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="mb-3 flex h-11 items-center gap-2 rounded-xl border border-lp-line bg-lp-card px-3 shadow-2xs">
                        <input
                          type="text"
                          value={note}
                          onChange={(e) => {
                            setNote(e.target.value)
                            setSaved(false)
                          }}
                          className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-lp-ink outline-none"
                          placeholder="e.g. Coffee, Uber, Lunch..."
                        />
                      </div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-lp-ink-mute">
                        Recent Suggestions
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {NOTE_SUGGESTIONS.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => {
                              setNote(s)
                              setActiveField("category")
                              setSaved(false)
                            }}
                            className={`h-8 rounded-full border px-3 text-xs font-semibold transition-all cursor-pointer ${
                              note === s
                                ? "border-lp-ink bg-lp-ink text-lp-bg shadow-2xs"
                                : "border-lp-line bg-lp-card text-lp-ink hover:bg-lp-bg-2"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* 3. Category Picker View */}
                  {activeField === "category" && (
                    <motion.div
                      key="category"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-lp-ink-mute">
                        Choose Category
                      </p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {CATEGORIES.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              setCategory(c)
                              setActiveField("account")
                              setSaved(false)
                            }}
                            className={`flex items-center gap-1.5 rounded-xl border p-2 text-xs font-semibold transition-all cursor-pointer ${
                              category.id === c.id
                                ? "border-amber-500 bg-amber-500/15 text-amber-800 dark:text-amber-300 shadow-2xs"
                                : "border-lp-line bg-lp-card text-lp-ink hover:bg-lp-bg-2"
                            }`}
                          >
                            <span>{c.emoji}</span>
                            <span className="truncate">{c.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* 4. Account Picker View */}
                  {activeField === "account" && (
                    <motion.div
                      key="account"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-lp-ink-mute">
                        Choose Account
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {ACCOUNTS.map((acc) => (
                          <button
                            key={acc.id}
                            type="button"
                            onClick={() => {
                              setAccount(acc)
                              setSaved(false)
                            }}
                            className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all cursor-pointer ${
                              account.id === acc.id
                                ? "border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 shadow-2xs"
                                : "border-lp-line bg-lp-card text-lp-ink hover:bg-lp-bg-2"
                            }`}
                          >
                            <span className="h-2 w-2 rounded-full bg-lp-em" />
                            <span className="truncate">{acc.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Save Transaction CTA */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98] ${
                    saved
                      ? "bg-lp-em text-white shadow-md shadow-emerald-950/20"
                      : "bg-lp-ink text-lp-bg hover:opacity-95"
                  }`}
                >
                  {saved ? (
                    <>
                      <Check size={16} />
                      <span>✓ Saved to {account.label} in 1.4s!</span>
                    </>
                  ) : (
                    <>
                      <span>✓ Save Transaction · ₹{amount || "0"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Feedback Record After Save */}
              {saved && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400"
                >
                  <span>
                    {category.emoji} {note} · {account.label}
                  </span>
                  <span>−₹{amount} (Updated)</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

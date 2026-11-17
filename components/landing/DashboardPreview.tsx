"use client"

import { Calendar, ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"
import PageHeader from "@/components/layouts/PageHeader"
import TransactionCard from "@/components/cards/Transaction"
import { Transaction } from "@/types/Transaction"

/** Fixed timestamps avoid SSR/client hydration mismatches in the landing preview. */
const PREVIEW_AT = "2026-07-17T10:42:00.000Z"

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    user_id: "u1",
    account_id: "a1",
    category_id: "c1",
    type: "expense",
    amount: 450,
    currency: "INR",
    title: "Burger King",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c1", icon: "🍔", kind: "expense", name: "Food", color: "bg-yellow-400" },
    accounts: { id: "a1", name: "HDFC Bank", type: "bank" },
  },
  {
    id: "2",
    user_id: "u1",
    account_id: "a2",
    category_id: "c2",
    type: "expense",
    amount: 150,
    currency: "INR",
    title: "Coffee",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c2", icon: "☕", kind: "expense", name: "Drink", color: "bg-indigo-400" },
    accounts: { id: "a2", name: "SBI Card", type: "credit" },
  },
  {
    id: "3",
    user_id: "u1",
    account_id: "a3",
    category_id: "c3",
    type: "income",
    amount: 65000,
    currency: "INR",
    title: "Salary",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c3", icon: "💰", kind: "income", name: "Salary", color: "bg-emerald-400" },
    accounts: { id: "a3", name: "Fi Money", type: "bank" },
  },
]

export function DashboardPreview() {
  const transactions = MOCK_TRANSACTIONS.slice(0, 3)
  const totalExpenses = 600 // 450 + 150

  return (
    <div className="pt-1 pb-10">
      <PageHeader subText="Dashboard" mainText="Hey Vinay" h1className="text-ink text-2xl font-bold" />

      <section className="space-y-3 px-4 pt-2 mb-3">
        {/* Date navigator */}
        <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3 py-2.5 shadow-xs">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-surface-elevated opacity-60">
            <ChevronLeft size={16} className="text-ink" />
          </div>

          <div className="min-w-[130px] text-center">
            <p className="text-xs font-bold text-ink">Today</p>
            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ms-muted">
              {transactions.length} Transactions
            </p>
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-surface-elevated opacity-30">
            <ChevronRight size={16} className="text-ink" />
          </div>
        </div>

        {/* Spent summary */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-xs">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ms-muted">
              Spent Today
            </span>
            <div className="flex items-center gap-1.5 rounded-full border border-line bg-surface-alt px-2.5 py-0.5">
              <Calendar className="h-3 w-3 text-ms-muted" />
              <span className="text-[10px] font-medium text-ms-muted">
                Today
              </span>
            </div>
          </div>

          <div className="mb-1 flex items-baseline gap-1">
            <p className="text-4xl font-extrabold tracking-tight text-ink tabular-nums">₹{totalExpenses}</p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-ms-muted">
            <span>2 expenses logged</span>
            <span className="font-semibold text-lp-em">Under daily limit</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-50/50 p-2.5 text-xs font-semibold text-expense dark:bg-rose-950/20 shadow-xs">
            <TrendingDown size={14} className="text-expense" /> Add Expense
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-50/50 p-2.5 text-xs font-semibold text-income dark:bg-emerald-950/20 shadow-xs">
            <TrendingUp size={14} className="text-income" /> Add Income
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-ms-muted">Transactions</h3>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-lp-em">
            View all <ChevronRight size={14} />
          </div>
        </div>
      </section>

      {/* Transaction list */}
      <section className="space-y-2.5 px-4">
        {transactions.map((transaction) => (
          <TransactionCard
            noAction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

export function RelatedLinks({
  title = "Explore more",
  links,
}: {
  title?: string
  links: { href: string; label: string }[]
}) {
  const reduceMotion = useReducedMotion()

  if (!links.length) return null

  return (
    <section className="border-t border-lp-line py-14 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[640px] text-center"
        >
          <h2 className="lp-display text-xl font-semibold tracking-[-0.02em] text-lp-ink sm:text-2xl">
            {title}
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-lp-line bg-lp-card px-4 py-2 text-sm font-medium text-lp-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-lp-em/30 hover:text-lp-ink hover:shadow-xs"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Cloud, Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end md:items-center px-6 pt-28 pb-16 md:pb-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-kicker mb-4"
        >
          Software Engineering Student · Harare
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground text-balance leading-[1.05] mb-6"
        >
          Malvin T. Machingura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          Building clear, scalable software and intelligent systems — full-stack,
          AI/ML, and research for real-world use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity"
          >
            View projects
          </button>
          <div className="flex items-center gap-2">
            {[
              { href: "https://github.com/sehmaluva", icon: Github, label: "GitHub" },
              {
                href: "https://www.linkedin.com/in/malvin-t-machingura",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://builder.aws.com/community/@sehmaluva",
                icon: Cloud,
                label: "AWS",
              },
              { href: "mailto:sehmaluva@gmail.com", icon: Mail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 hidden md:flex items-center gap-2 text-sm text-muted-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ExternalLink, BookOpen } from "lucide-react"

const researchUrl =
  "https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu"

export function ResearchSection() {
  return (
    <section id="research" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-xl"
        >
          <p className="section-kicker mb-3">Research & Publications</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Published work
          </h2>
          <p className="text-muted-foreground text-lg">
            AI safety research for low-resource languages and Global South contexts.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="depth-card overflow-hidden grid md:grid-cols-[140px_1fr]"
        >
          <div className="bg-primary/10 flex items-center justify-center p-8 md:p-6">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-primary/10 text-primary px-3 py-0.5 text-xs font-medium">
                Published
              </span>
              <span className="text-sm text-muted-foreground">Apart Research · June 2026</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
              AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              A pilot study testing whether ChatGPT and Gemini are easier to jailbreak in Shona than
              in English. Early results suggest AI safety protections built mainly for English may
              not hold for Zimbabwean languages and Shona–English code-switched prompts. Introduces
              a Language Vulnerability Index (LVI) for low-resource language safety evaluation.
            </p>
            <a
              href={researchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/15"
            >
              Read on Apart Research <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

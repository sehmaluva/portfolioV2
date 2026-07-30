"use client"

import { motion } from "framer-motion"
import { ExternalLink, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"

const researchUrl =
  "https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu"

export function ResearchSection() {
  return (
    <section id="research" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Research and publications in AI safety, focused on low-resource languages and Global South contexts.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-b border-border pb-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary font-medium mb-1">
                Apart Research · June 2026
              </p>
              <h3 className="text-2xl font-semibold mb-3">
                AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A pilot study testing whether ChatGPT and Gemini are easier to jailbreak in Shona
                than in English. Early results suggest AI safety protections built mainly for English
                may not hold for Zimbabwean languages and Shona–English code-switched prompts.
                Introduces a Language Vulnerability Index (LVI) for low-resource language safety evaluation.
              </p>
              <Button variant="outline" asChild>
                <a href={researchUrl} target="_blank" rel="noopener noreferrer">
                  Read on Apart Research <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

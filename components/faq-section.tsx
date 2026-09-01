"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Who is Malvin Machingura?",
    answer:
      "Malvin T. Machingura (Malvin Tinotenda Machingura, also known as sehmaluva) is a Software Engineering student and part-time Software Engineer based in Zimbabwe. He specializes in full-stack architecture, Artificial Intelligence, and Machine Learning. He currently studies at Bindura University of Science Education and works part-time at Fincheck Pvt Ltd, where he previously completed a Software Engineer internship.",
  },
  {
    question: "What does Malvin Machingura specialize in?",
    answer:
      "He builds scalable applications with Python, Django, React, Next.js, and TypeScript, and works across AI/ML including model training, LLMs, GenAI, Deep Learning, explainable ML systems such as credit risk scoring, and AI safety research for low-resource languages like Shona.",
  },
  {
    question: "Where is Malvin Machingura based?",
    answer:
      "He is based in Harare, Zimbabwe, and is open to global collaboration and remote opportunities.",
  },
  {
    question: "How can I contact or hire Malvin Machingura?",
    answer:
      "Email sehmaluva@gmail.com, use the contact form on this site, or connect via LinkedIn, GitHub, and AWS Builder Community (https://builder.aws.com/community/@sehmaluva).",
  },
  {
    question: "What notable projects has Malvin built?",
    answer:
      "Notable work includes Credit Risk Intelligence (explainable ML loan scoring), ScholarProof (privacy-preserving scholarship eligibility on Midnight), Pet Image Classifier (CNN deep learning), ADTC Shona Coding Tutor (offline bilingual LLM mentor with RAG), GitWrapped (GitHub activity visualization), Student Fest (open-source coding challenges), and this portfolio.",
  },
  {
    question: "What certifications and credentials does Malvin Machingura hold?",
    answer:
      "Malvin holds GCI World April 2026 (data science, University of Tokyo — Matsuo-Iwasawa Laboratory, issued August 2026) and the Africa Computational Linguistics Summer School certificate from Africompilings / Linguistics Island (August 2026). He also has Credly badges (Python Essentials 1, Introduction to Cybersecurity, MongoDB Indexing & Aggregation), Postman Student Expert, Udacity AWS AI Practitioner Challenge, Frontend Masters Complete Intro to React v9, and a Microsoft Learn credential. View certificates at https://sehmaluva.me/#achievements",
  },
  {
    question: "Has Malvin Machingura published AI research?",
    answer:
      "Yes. He authored AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona with Apart Research (June 2026) — a pilot study on whether ChatGPT and Gemini are easier to jailbreak in Shona and Shona-English code-switched prompts than in English. Read it at https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-kicker mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Common questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Short answers about who I am, what I build, and how to reach me.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className="depth-card overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

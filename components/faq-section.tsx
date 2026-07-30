"use client";

import { motion } from "framer-motion";

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
      "Email sehmaluva@gmail.com, use the contact form on this site, or connect via LinkedIn and GitHub.",
  },
  {
    question: "What notable projects has Malvin built?",
    answer:
      "Notable work includes Credit Risk Intelligence (explainable ML loan scoring), GitWrapped (GitHub activity visualization), Student Fest (open-source coding challenges), and this portfolio.",
  },
  {
    question: "Has Malvin Machingura published AI research?",
    answer:
      "Yes. He authored AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona with Apart Research (June 2026) — a pilot study on whether ChatGPT and Gemini are easier to jailbreak in Shona and Shona-English code-switched prompts than in English. Read it at https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Quick answers about who I am, what I build, and how to get in touch.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="border-b border-border pb-6"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

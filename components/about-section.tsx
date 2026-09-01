"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "LLMs & GenAI",
  "NLP",
  "Computational Linguistics",
  "AI Safety",
  "Deep Learning",
  "PyTorch",
  "Python",
  "Java",
  "C++",
  "Rust",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Postman",
  "RESTful APIs",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
]

const timeline = [
  {
    year: "2023 — Current",
    title: "HBSc Software Engineering Student",
    company: "Bindura University of Science Education",
    description:
      "Currently studying software engineering with a focus on AI algorithms, data science, web development, database management, software architecture, DSA, and operating systems",
  },
  {
    year: "March 2026 — Current",
    title: "Software Engineer (Remote)",
    company: "Fincheck Pvt Ltd",
    description:
      "Continuing at Fincheck part-time while studying: building Credit Risk Intelligence (explainable ML loan scoring), implementing features, database management, and DevOps",
  },
  {
    year: "May 2025 — February 2026",
    title: "Software Engineer Intern",
    company: "Fincheck Pvt Ltd",
    description:
      "Built Credit Risk Intelligence — an end-to-end Django + React platform with LightGBM scoring and SHAP explainability. Also fixed bugs, implemented features, database management, and DevOps.",
  },
  {
    year: "March 2025 — May 2025",
    title: "IT Intern",
    company: "Chitungwiza Municipality",
    description:
      "Assisted in the maintenance of internal tools and applications. Collaborated with the IT team to troubleshoot and resolve technical issues.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-kicker mb-3">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Who I am
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A student engineer focused on clear systems, thoughtful products, and AI that works in
            the real world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="depth-card overflow-hidden mx-auto lg:mx-0 w-full max-w-[280px]"
          >
            <Image
              src="/profile.png"
              alt="Malvin T. Machingura, Software Engineering Student"
              width={280}
              height={280}
              className="object-cover w-full aspect-square"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="depth-card p-6 md:p-8"
          >
            <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-6">
              I&apos;m a Software Engineering student and part-time Software Engineer specializing in
              full-stack architecture, Artificial Intelligence, and Machine Learning solutions. I
              currently study at Bindura University of Science Education and work part-time at
              Fincheck Pvt Ltd (after previously completing an internship there). I design and build
              scalable, user-focused applications using Python, C++, Rust, Django, and modern web
              frameworks. My expertise spans model training, intelligent automation, RESTful APIs,
              database optimization, and end-to-end production delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div id="experience" className="scroll-mt-24">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6">Experience</h3>
          <div className="relative space-y-4 md:space-y-0 md:pl-0">
            <div className="hidden md:block absolute left-[11px] top-4 bottom-4 w-px bg-border" />
            {timeline.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative md:pl-10"
              >
                <div className="hidden md:block absolute left-0 top-6 size-6 rounded-full border-[3px] border-primary bg-card shadow-sm" />
                <div
                  className="depth-card p-5 md:p-6"
                  style={{ marginLeft: index % 2 === 0 ? 0 : undefined }}
                >
                  <p className="text-sm font-medium text-primary mb-1">{item.year}</p>
                  <h4 className="text-lg font-semibold mb-0.5">{item.title}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

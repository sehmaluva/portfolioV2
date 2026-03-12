"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from 'next/image';

const skills = [
  "Python",
  "Java",
  "C++",
  "Rust",
  "Django",
  "PostgreSQL",
  "MongoDB:,
  "Docker",
  "Postman",
  "RESTful API's",
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
    year: "May 2025 — February 2026",
    title: "Software Engineer Intern",
    company: "Fincheck Pvt Ltd",
    description:
      "Assisted in the development of the Company projects, fixing bugs, Implimenting new features, Database management and DevOps",
  },
  {
    year: " March 2025 — May 2025",
    title: "IT Intern",
    company: "Chitungwiza Municipality",
    description:
      "Assisted in the maintenance of internal tools and applications. Collaborated with the IT team to troubleshoot and resolve technical issues.",
  },
  {
    year: "2023 — Current",
    title: "HBSc Software Engineering Student",
    company: "Bindura University of Science Education",
    description:
      "Studying various aspects of software engineering, including web development, database management, and software architecture, DSA, Operating Sytems",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <Image
                    src="/profile.png"
                    alt="Profile Picture"
                    width={256}
                    height={256}
                    className="rounded-2xl object-cover"
                    priority
                    />
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              I'm a Software Engineer with working experience as a Backend engineer and . 
              I build scalable, user-focused applications using C++, Rust, Python, Django, and modern web frameworks. 
              My knowledge spans accros RESTful APIs, database optimization, and real-world project deliver.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Experience Timeline</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">{item.year}</p>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-accent font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub",
]

const timeline = [
  {
    year: "2024 — Present",
    title: "Software Engineer Intern",
    company: "TechCorp",
    description:
      "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud-native solutions.",
  },
  {
    year: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    description:
      "Built and maintained multiple client projects from concept to deployment. Specialized in React ecosystem and modern backend technologies.",
  },
  {
    year: "2020 — 2022",
    title: "Frontend Developer",
    company: "DesignStudio",
    description:
      "Focused on creating pixel-perfect, responsive user interfaces. Collaborated closely with designers to bring creative visions to life.",
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
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that make
              a difference. My journey began with a curiosity about how websites work, and it has evolved into a deep
              love for crafting exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community through blog posts and mentoring.
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

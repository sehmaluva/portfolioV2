"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Code, Database, Server, Layout, Globe, GitBranch, Cloud, 
  Box, Workflow, Hash, Github, Terminal
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Layout },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Box },
      { name: "Framer Motion", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Hash },
      { name: "PostgreSQL", icon: Database },
      { name: "RESTful APIs", icon: Globe },
      { name: "Flask", icon: Terminal },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Vercel", icon: Cloud },
      { name: "CI/CD", icon: Workflow },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and proficiency levels across different areas of
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">{category.title}</h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <skill.icon className="w-8 h-8 mb-2 text-primary" />
                      <span className="font-medium text-sm text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

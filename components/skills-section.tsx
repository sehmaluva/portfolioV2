"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  Globe,
  GitBranch,
  Cloud,
  Box,
  Workflow,
  Hash,
  Github,
  Terminal,
  Brain,
  Cpu,
  Sparkles,
  Bot,
  Languages,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    span: "md:col-span-2",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Cpu },
      { name: "LLMs & GenAI", icon: Sparkles },
      { name: "NLP", icon: Languages },
      { name: "Computer Vision", icon: Bot },
      { name: "PyTorch & Scikit", icon: Code },
      { name: "Prompt Eng.", icon: Workflow },
    ],
  },
  {
    title: "Frontend",
    span: "",
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
    span: "",
    skills: [
      { name: "Django", icon: Server },
      { name: "Python", icon: Hash },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "RESTful APIs", icon: Globe },
      { name: "Flask", icon: Terminal },
    ],
  },
  {
    title: "DevOps & Tools",
    span: "md:col-span-2",
    skills: [
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Vercel", icon: Cloud },
      { name: "CI/CD", icon: Workflow },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl"
        >
          <p className="section-kicker mb-3">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Tooling I reach for
          </h2>
          <p className="text-muted-foreground text-lg">
            My tech stack from models to deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className={`depth-card p-6 ${category.span}`}
            >
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 rounded-xl bg-secondary/70 px-3 py-2.5"
                  >
                    <skill.icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

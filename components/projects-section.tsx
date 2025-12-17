"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  stars?: number
}

const projects: Project[] = [
  {
    title: "Student Fest",
    description:
      "Beginner-friendly introduction to coding and open source experience with coding challenges & real world projects.",
    image: "/student_fest.png",
    tech: ["Python", "Open Source"],
    liveUrl: "https://sehmaluva.github.io/student-fest",
    githubUrl: "https://github.com/sehmaluva/student-fest",
  },
  {
    title: "GitWrapped",
    description:
      "2025 GitHub Contributions Wrapped: visualize your yearly activity and highlights.",
    image: "/gitwrapped_screenshot.png",
    tech: ["TypeScript", "Next.js"],
    liveUrl: "https://gitwrapped.sehmaluva.me",
    githubUrl: "https://github.com/sehmaluva/gitwrapped",
  },
  {
    title: "Personal Portfolio",
    description:
      "Software Engineer Portfolio using Next.js. A showcase of my skills and projects.",
    image: "/portfolio_screenshot.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sehmaluva.me",
    githubUrl: "https://github.com/sehmaluva/portfolioV2",
  },
  {
    title: "Minija Management System",
    description:
      "An advanced broiler project management system using Python and TypeScript.",
    image: "/task-management-dashboard.png",
    tech: ["Python", "TypeScript", "Django"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/minija",
  },
  {
    title: "WhatIf Imagination World",
    description:
      "The Imagination World. A creative platform for exploring ideas.",
    image: "/ai-content-generator-interface.png",
    tech: ["JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/whatif",
  },
  {
    title: "Budget Buddy",
    description:
      "Budget management frontend application for tracking expenses and managing finances.",
    image: "/weather-analytics-dashboard-with-charts.jpg",
    tech: ["TypeScript", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/budget-buddy-frontend",
  },
]

export function ProjectsSection() {
  const [starsMap, setStarsMap] = useState<Record<string, number>>({})

  const repos = useMemo(() => {
    return projects
      .map((p) => {
        try {
          const url = new URL(p.githubUrl)
          const [, owner, repo] = url.pathname.split("/")
          if (!owner || !repo) return null
          return { key: p.githubUrl, owner, repo }
        } catch {
          return null
        }
      })
      .filter(Boolean) as { key: string; owner: string; repo: string }[]
  }, [])

  useEffect(() => {
    let cancelled = false
    async function fetchStars() {
      try {
        const results = await Promise.all(
          repos.map(async ({ key, owner, repo }) => {
            try {
              const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
                headers: {
                  // If a token is later provided via env, we can inject it here.
                },
                next: { revalidate: 3600 },
              })
              if (!res.ok) throw new Error("GitHub API error")
              const data = await res.json()
              const stars = typeof data?.stargazers_count === "number" ? data.stargazers_count : undefined
              return { key, stars }
            } catch {
              return { key, stars: undefined }
            }
          })
        )
        if (!cancelled) {
          const map: Record<string, number> = {}
          for (const r of results) {
            if (typeof r.stars === "number") map[r.key] = r.stars
          }
          setStarsMap(map)
        }
      } catch {
        // swallow; UI will use fallback
      }
    }
    fetchStars()
    return () => {
      cancelled = true
    }
  }, [repos])

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="glass-effect" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="glass-effect" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors"
                      title="GitHub Stars"
                    >
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span>{typeof starsMap[project.githubUrl] === "number" ? starsMap[project.githubUrl] : project.stars ?? 0} Stars</span>
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

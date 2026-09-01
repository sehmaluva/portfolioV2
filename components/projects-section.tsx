"use client"

import { motion } from "framer-motion"
import { Github, Star, ArrowUpRight } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

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
    title: "Credit Risk Intelligence",
    description:
      "Production-grade credit risk platform for emerging-market lenders — LightGBM default prediction, SHAP explainability, loan officer workflows, portfolio analytics, and audit logging.",
    image: "/weather-analytics-dashboard-with-charts.jpg",
    tech: ["Python", "Django", "React", "LightGBM", "SHAP", "MLOps"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/credit-risk-intelligence",
  },
  {
    title: "ScholarProof",
    description:
      "Privacy-preserving scholarship eligibility on Midnight — students prove GPA, income, and enrollment without exposing private data.",
    image: "/task-management-dashboard.png",
    tech: ["Python", "Django", "React", "Web3"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/scholarproof",
  },
  {
    title: "Pet Image Classifier",
    description:
      "CNN-based pet image classifier comparing ResNet, AlexNet, and VGG architectures for dog detection and breed accuracy.",
    image: "/ai-content-generator-interface.png",
    tech: ["Python", "PyTorch", "Deep Learning", "Computer Vision"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/pet-image-classifier",
  },
  {
    title: "ADTC Shona Coding Tutor",
    description:
      "Offline AI coding mentor for the ADTC Laptop LLM Challenge — local quantized LLM with RAG over a CS syllabus and bilingual English/Shona explanations.",
    image: "/ai-content-generator-interface.png",
    tech: ["Python", "LLMs", "RAG", "NLP"],
    liveUrl: "#",
    githubUrl: "https://github.com/sehmaluva/adtc-shona-coding-tutor",
  },
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
]

function ProjectLinks({
  liveUrl,
  githubUrl,
  compact = false,
}: {
  liveUrl: string
  githubUrl: string
  compact?: boolean
}) {
  const cls = compact
    ? "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors"
    : "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors"

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          compact
            ? cls
            : `${cls} bg-primary text-primary-foreground hover:opacity-90`
        }
      >
        {compact ? "Demo" : "Live demo"}
        <ArrowUpRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          compact
            ? cls
            : `${cls} border border-border bg-card hover:bg-secondary`
        }
      >
        <Github className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        {compact ? "Code" : "Source"}
      </a>
    </div>
  )
}

export function ProjectsSection() {
  const [starsMap, setStarsMap] = useState<Record<string, number>>({})
  const [featured, ...rest] = projects

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
      const results = await Promise.all(
        repos.map(async ({ key, owner, repo }) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
            if (!res.ok) throw new Error("fail")
            const data = await res.json()
            return {
              key,
              stars: typeof data?.stargazers_count === "number" ? data.stargazers_count : undefined,
            }
          } catch {
            return { key, stars: undefined }
          }
        }),
      )
      if (!cancelled) {
        const map: Record<string, number> = {}
        for (const r of results) {
          if (typeof r.stars === "number") map[r.key] = r.stars
        }
        setStarsMap(map)
      }
    }
    fetchStars()
    return () => {
      cancelled = true
    }
  }, [repos])

  const starsOf = (p: Project) => starsMap[p.githubUrl] ?? p.stars ?? 0

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-xl"
        >
          <p className="section-kicker mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Selected work
          </h2>
          <p className="text-muted-foreground text-lg">
            Highlighted builds first — the rest are easy to scan.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_16px_50px_rgba(20,32,43,0.08)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-[360px] bg-secondary">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-3.5 w-3.5 text-primary fill-primary/25" />
                <span className="tabular-nums">{starsOf(featured)}</span>
                <span>stars</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ProjectLinks liveUrl={featured.liveUrl} githubUrl={featured.githubUrl} />
            </div>
          </div>
        </motion.article>

        {/* Compact grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.04, 0.2) }}
              viewport={{ once: true }}
              className="depth-card group overflow-hidden flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg leading-snug">{project.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 mt-1">
                    <Star className="h-3 w-3 text-primary fill-primary/20" />
                    {starsOf(project)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} compact />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

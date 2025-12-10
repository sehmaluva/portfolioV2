"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="block text-muted-foreground text-lg md:text-xl font-normal mb-4">Hello World!</span>
            I'm Malvin
          </h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-6 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building bugs professionally since… yesterday
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           Software Engineer exploring the full stack of digital innovation from AI and cybersecurity to mobile and web development.
           With a strong foundation in languages including Java, Python, and C++, I build solutions that are both technically sound and creatively inspired.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg animate-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>

            <div className="flex gap-4">
              <a href="https://github.com/sehmaluva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/malvin-t-machingura"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:sehmaluva@gmail.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}

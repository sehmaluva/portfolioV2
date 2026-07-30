"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Cloud, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useState } from "react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error")
      setErrorMessage(
        "Contact form is not configured yet. Please email sehmaluva@gmail.com instead.",
      )
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio contact from ${formData.name}`,
          from_name: "sehmaluva.me",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message")
      }
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly.",
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50"

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl"
        >
          <p className="section-kicker mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Let&apos;s talk
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to collaboration, roles, and interesting problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="depth-card p-6 md:p-8"
          >
            <h3 className="font-semibold text-xl mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  disabled={status === "loading"}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to build?"
                  rows={5}
                  required
                  disabled={status === "loading"}
                  className={`${fieldClass} resize-y min-h-[120px]`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground shadow-md shadow-primary/15 disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-primary text-center" role="status">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive text-center" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="depth-card p-6 md:p-8">
              <h3 className="font-semibold text-xl mb-4">Elsewhere</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sehmaluva@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary">
                    <Mail className="h-4 w-4 text-primary" />
                  </span>
                  sehmaluva@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/malvin-t-machingura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://builder.aws.com/community/@sehmaluva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary">
                    <Cloud className="h-4 w-4 text-primary" />
                  </span>
                  AWS Builder Community
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary">
                    <MapPin className="h-4 w-4 text-primary" />
                  </span>
                  Harare, Zimbabwe
                </div>
              </div>
            </div>
            <div className="depth-card p-5 flex flex-wrap gap-2">
              <a
                href="https://github.com/sehmaluva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="mailto:sehmaluva@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

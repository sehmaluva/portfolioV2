"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Send Message
          </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                I'm currently open to collaborating on exciting projects. Whether you're looking for a freelance partner, 
                a full-time contributor, or just someone to brainstorm with about technology and ideas, feel free to reach 
                out I'd love to connect.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
              >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">sehmaluv@gmail.com.com</p>
          </div>
              </motion.div>

              <motion.div
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
              >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">+263 77 510 1044</p>
          </div>
              </motion.div>

              <motion.div
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
              >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground">Harare, Zimbabwe</p>
          </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            <a
              href="https://github.com/sehmaluva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            <a
              href="https://www.linkedin.com/in/malvin-t-machingura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            <a
              href="mailto:sehmaluva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

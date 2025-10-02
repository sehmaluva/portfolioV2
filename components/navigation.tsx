"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="glass-effect rounded-full p-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "block w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
                  activeSection === item.href.slice(1)
                    ? "bg-primary border-primary shadow-lg shadow-primary/50"
                    : "border-muted-foreground/50 hover:border-primary",
                )}
                title={item.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

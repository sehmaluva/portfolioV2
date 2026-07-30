"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const current = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      if (height > 0) setProgress((current / height) * 100)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-0.5 z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

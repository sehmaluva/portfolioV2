"use client"

import React, { useEffect, useRef } from "react"

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "0123456789"
    const alphabet = katakana + latin + nums

    const fontSize = 16
    let columns = Math.floor(canvas.width / fontSize)

    const rainDrops: number[] = []
    for (let i = 0; i < columns; i++) {
      rainDrops[i] = 1
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)"
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.fillStyle = "#0F0" // Green text
      context.font = `${fontSize}px monospace`

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      setCanvasDimensions()
      columns = Math.floor(window.innerWidth / fontSize)
      for (let i = 0; i < columns; i++) {
        if (rainDrops[i] === undefined) {
          rainDrops[i] = 1
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.2,
      }}
    />
  )
}

export default MatrixBackground
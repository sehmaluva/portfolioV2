"use client"

import { motion } from "framer-motion"
import { Download, Expand, X } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Certificate = {
  title: string
  issuer: string
  date: string
  description: string
  image: string
  pdf: string
}

const certificates: Certificate[] = [
  {
    title: "GCI World April 2026",
    issuer: "Matsuo-Iwasawa Laboratory, University of Tokyo",
    date: "31 August 2026",
    description:
      "Fundamental theories and implementations of data science, with final assessment passed.",
    image: "/GCI_Certificate.png",
    pdf: "/GCI_Certificate.pdf",
  },
  {
    title: "Africa Computational Linguistics Summer School",
    issuer: "Linguistics Island · Africompilings",
    date: "15 August 2026",
    description:
      "Summer course in computational linguistics for African languages and NLP foundations.",
    image: "/Africompilings.png",
    pdf: "/Certificate_Malvin_T._Machingura.pdf",
  },
]

function CertificateLightbox({
  certificate,
  onClose,
}: {
  certificate: Certificate
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close certificate preview"
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold truncate">{certificate.title}</p>
            <p className="text-sm text-muted-foreground truncate">{certificate.issuer}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-secondary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1 overflow-auto rounded-2xl border border-border bg-[#faf6ee] p-3 shadow-2xl dark:bg-[#1a1814]">
          <div className="relative aspect-[4/3] w-full min-h-[200px]">
            <Image
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <a
            href={certificate.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download official PDF
          </a>
        </div>
      </div>
    </div>
  )
}

function CertificateCard({
  certificate,
  index,
  onOpen,
}: {
  certificate: Certificate
  index: number
  onOpen: () => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="depth-card group flex flex-col overflow-hidden"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`View ${certificate.title} certificate`}
      >
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden",
            "bg-gradient-to-br from-[#faf6ee] via-[#f5efe3] to-[#ebe3d4]",
            "dark:from-[#1f1b16] dark:via-[#1a1814] dark:to-[#14120f]",
            "border-b border-border/60",
          )}
        >
          <div className="absolute inset-3 rounded-xl border border-[#c4a574]/30 shadow-inner" />
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate preview`}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Expand className="h-3.5 w-3.5" />
            View full size
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-primary mb-1">
            {certificate.date}
          </p>
          <h3 className="font-display text-xl font-semibold tracking-tight mb-1">
            {certificate.title}
          </h3>
          <p className="text-sm font-medium text-accent">{certificate.issuer}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {certificate.description}
        </p>
        <a
          href={certificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="h-3.5 w-3.5" />
          Official PDF
        </a>
      </div>
    </motion.article>
  )
}

export function CertificatesGallery() {
  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <>
      <div className="container mx-auto max-w-6xl px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="section-kicker mb-2">Featured</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            Academic certificates
          </h3>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Data science and computational linguistics programs — click a certificate to view it
            full size.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
              onOpen={() => setActive(certificate)}
            />
          ))}
        </div>
      </div>

      {active && (
        <CertificateLightbox certificate={active} onClose={() => setActive(null)} />
      )}
    </>
  )
}

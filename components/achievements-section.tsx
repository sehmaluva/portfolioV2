"use client"

import { motion } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Script from "next/script"
import { useRef } from "react"
import { CertificatesGallery } from "@/components/certificates-gallery"

const certCards = [
  {
    title: "Postman Student Expert",
    issuer: "Postman",
    img: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
    href: "https://www.linkedin.com/in/malvin-t-machingura/details/certifications/",
  },
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    img: "https://www.udacity.com/favicon.ico",
    href: "https://www.udacity.com/certificate/e/ba775522-30a6-11f1-a56c-4b7a5d9528d1",
  },
  {
    title: "Complete Intro to React, v9",
    issuer: "Frontend Masters",
    img: "https://frontendmasters.com/favicon-32x32.png",
    href: "https://static.frontendmasters.com/ud/c/2fbade59af/hixpadIGiV/complete-react-v9.pdf",
  },
  {
    title: "Microsoft Learn Credential",
    issuer: "Microsoft",
    img: "https://learn.microsoft.com/favicon.ico",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/sehmaluva/2DD7B16EDF8697AA?sharingId",
  },
]

const credlyBadges = [
  { id: "3f4f7a9f-b470-49c0-a80f-fc9b8c584976", title: "Python Essentials 1 — Cisco" },
  { id: "e0b6d724-15e4-473a-b8e8-ff22d50b7409", title: "Introduction to Cybersecurity — Cisco" },
  {
    id: "81443fec-9e25-4199-af1d-24c0b3433fee",
    title: "MongoDB Indexing Design Fundamentals — MongoDB",
  },
  {
    id: "9d99b397-b635-4f45-84b4-4ac2da1b6746",
    title: "MongoDB Aggregation Fundamentals — MongoDB",
  },
]

export function AchievementsSection() {
  const rowRef = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" })
  }

  return (
    <section id="achievements" className="py-24 scroll-mt-20">
      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />

      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="max-w-xl">
            <p className="section-kicker mb-3">Achievements</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-3">
              Recognition
            </h2>
            <p className="text-muted-foreground text-lg">
              Open-source badges and certifications — scroll the gallery.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <CertificatesGallery />

      <div className="container mx-auto max-w-6xl px-6 mb-10">
        <div className="depth-card p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="relative aspect-[2/1] w-full md:max-w-md rounded-xl overflow-hidden bg-secondary/50">
              <img
                src="https://holopin.me/sehmaluva"
                alt="Hacktoberfest and Open Source Badges"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2">Open source</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Badges collected through contributions during Hacktoberfest 2025.
              </p>
              <a
                href="https://holopin.io/@sehmaluva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                View Holopin <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <p className="container mx-auto max-w-6xl px-0 pr-6 mb-4 text-sm text-muted-foreground">
          Credly: Python Essentials 1 (Cisco), Introduction to Cybersecurity (Cisco), MongoDB
          Indexing &amp; Aggregation. Also Postman, Udacity AWS AI Practitioner, Frontend Masters
          React v9, Microsoft Learn.
        </p>
        <div ref={rowRef} className="scroll-row pr-6 items-stretch">
          {credlyBadges.map((badge) => (
            <div
              key={badge.id}
              className="depth-card p-3 w-[170px] flex flex-col items-center"
              title={badge.title}
            >
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={badge.id}
                data-share-badge-host="https://www.credly.com"
              />
            </div>
          ))}
          {certCards.map((cert) => (
            <div
              key={cert.title}
              className="depth-card w-[170px] h-[280px] flex flex-col items-center justify-between p-4"
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={cert.img} alt={cert.title} className="w-14 h-14 object-contain" />
              </div>
              <div className="text-center w-full">
                <h4 className="font-semibold text-sm mb-1 leading-snug">{cert.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-secondary"
                >
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 mt-6">
        <a
          href="https://www.credly.com/users/sehmaluva/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:underline"
        >
          View all on Credly <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}

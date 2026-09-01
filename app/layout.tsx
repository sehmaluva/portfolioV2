import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const siteUrl = "https://sehmaluva.me"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    template: "%s | Malvin T. Machingura",
  },
  description:
    "Malvin T. Machingura (sehmaluva) — Software Engineering student and part-time Software Engineer in Zimbabwe. Full-stack, AI/ML, data science (GCI World, University of Tokyo), computational linguistics (Africompilings), and AI safety research. Python, Django, React, Next.js.",
  keywords: [
    "Malvin T. Machingura",
    "Malvin Machingura",
    "Malvin Tinotenda Machingura",
    "sehmaluva",
    "Software Engineer Zimbabwe",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "AI Developer",
    "Data Science",
    "Computational Linguistics",
    "GCI World",
    "University of Tokyo",
    "Africompilings",
    "AI Safety",
    "Django",
    "React",
    "Next.js",
    "Python",
    "Harare",
    "Bindura University of Science Education",
  ],
  authors: [{ name: "Malvin T. Machingura", url: siteUrl }],
  creator: "Malvin T. Machingura",
  publisher: "Malvin T. Machingura",
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    description:
      "Software Engineering student and part-time Software Engineer in Zimbabwe — full-stack, AI/ML, data science (GCI World, University of Tokyo), computational linguistics, and AI safety research.",
    url: siteUrl,
    siteName: "Malvin T. Machingura Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    description:
      "Software Engineering student and part-time Software Engineer in Zimbabwe — full-stack, AI/ML, data science (GCI World, University of Tokyo), computational linguistics, and AI safety research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <JsonLd />
          <Suspense>
            {children}
            <SpeedInsights />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

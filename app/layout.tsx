import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import MatrixWrapper from "../components/matrix-wrapper"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"

const siteUrl = "https://sehmaluva.me"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    template: "%s | Malvin T. Machingura",
  },
  description:
    "Malvin T. Machingura (Tinotenda) is a Software Engineering student and part-time Software Engineer specializing in full-stack architecture, Artificial Intelligence, and Machine Learning. Building scalable applications with Python, Django, React, and modern web frameworks.",
  keywords: [
    "Malvin T. Machingura",
    "Malvin Machingura",
    "Malvin Tinotenda Machingura",
    "sehmaluva",
    "Software Engineer Zimbabwe",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "AI Developer",
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    description:
      "Software Engineering student and part-time Software Engineer specializing in full-stack, AI, and Machine Learning. Open to global collaboration.",
    url: siteUrl,
    siteName: "Malvin T. Machingura Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malvin T. Machingura (sehmaluva) | Software Engineer",
    description:
      "Software Engineering student and part-time Software Engineer specializing in full-stack, AI, and Machine Learning. Open to global collaboration.",
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
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <JsonLd />
        <MatrixWrapper />
        <Suspense>
          {children}
          <SpeedInsights />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

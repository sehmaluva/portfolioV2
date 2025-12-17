import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import MatrixBackground from "../components/matrix"
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteUrl = "https://sehmaluva.me"
export const metadata: Metadata = {
  title: "Malvin Machingura (sehmaluva)| Software Engineer in Zimbabwe",
  description:
    "I am Malvin Machingura , a Software Engineer based in Zimbabwe, specializing in building scalable web applications, AI and Machine Learning solutions. Passionate about open-source, collaboration, and crafting beautiful digital experiences.",
  keywords: [
    "Malvin Machingura",
    "Full-Stack Software Engineer",
    "Software Developer Zimbabwe",
    "Bindura University of Science Education",
    "BUSE",
    "Harare Developer",
    "Zimbabwe Software Engineer",
    "Africa Tech Talent",
    "Portfolio Website",
    "API Development",
    "sehmaluva",
    "malvin",
    "seh maluva",
    "seh",
    "maluva",
    "malvin-machingura",
    "malvin t machingura",
    "malvin t.",
    "machingura",
    "malvin machingura",
  ],
  authors: [{ name: "Malvin Machingura", url: siteUrl }],
  creator: "Malvin Machingura",
  openGraph: {
    title: "Malvin Machingura (sehmaluva)| Software Engineer",
    description:
      "Explore Malvin Machingura’s portfolio—expert expert Software Engineer based in Zimbabwe. Open to global collaboration and tech partnerships.",
    url: siteUrl,
    siteName: "Malvin Machingura Portfolio",
    images: [
      {
        url: "https://sehmaluva.me/public/profile.png",
        width: 1200,
        height: 630,
        alt: "Malvin Machingura Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: "Malvin Machingura (sehmaluva)| Software Engineer",
    description:
      "Explore Malvin Machingura’s (sehmaluva) portfolio—expert Software Engineer based in Zimbabwe. Open to global collaboration and tech partnerships.",
    images: [`${siteUrl}/public/profile.png`],
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
        <MatrixBackground />
        <Suspense>
          {children}
          <SpeedInsights />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

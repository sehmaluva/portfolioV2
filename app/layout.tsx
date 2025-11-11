import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Malvin Machingura | Software Engineer in Zimbabwe",
  description:
    "I am a Software Engineer based in Zimbabwe, specializing in building scalable web applications, AI and Machine Learning solutions. Passionate about open-source, collaboration, and crafting beautiful digital experiences.",
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
  authors: [{ name: "Malvin Machingura" }],
  openGraph: {
    title: "Malvin Machingura | Software Engineer in Zimbabwe",
    description:
      "Explore Malvin Machingura’s portfolio—expert in Django and scalable web development. Open to global collaboration and tech partnerships.",
    type: "website",
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
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

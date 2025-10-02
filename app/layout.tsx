import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Malvin - Software Engineer",
  description: "Passionate about building scalable and beautiful digital experiences. Software Engineer open to collaboration—specializing in React, Next.js, Django, and modern web technologies.",
keywords: [
  "Full-Stack Developer",
  "Web Development",
  "Collaboration",
  "Project Partner",
  "Software Engineer",
  "JavaScript",
  "TypeScript",
  "Portfolio",
  "Web Applications",
  "APIs",
  "Open Source",
  "Tech Enthusiast",
  "sehmaluva",
  "malvin",
  "seh maluva",
  "seh",
  "maluva",
  "malvin-machingura",
  "malvin t machingura",
  "malvin t.",
  "machingura",
  "bindura university of science education",
  "buse",
  "harare",
  "zimbabwe",
  "africa",
  "developer",
  "programmer",
  "software",
  "engineer",
  "programming",
  "software development",
  "web design",
],
authors: [{ name: "Malvin" }],
openGraph: {
  title: "Malvin - Software Engineer",
  description: "Open to collaboration. Crafting scalable and beautiful digital experiences with React, Next.js, Node.js, and more.",
  type: "website",
}

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

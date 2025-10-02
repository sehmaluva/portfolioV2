import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Malvin - Software Engineer",
  description: "Passionate about building scalable and beautiful digital experiences. Full-stack developer open to collaboration—specializing in React, Next.js, Node.js, and modern web technologies.",
keywords: [
  "Full-Stack Developer",
  "React",
  "Next.js",
  "Node.js",
  "Web Development",
  "Frontend",
  "Backend",
  "Collaboration",
  "Project Partner",
  "Software Engineer"
],
authors: [{ name: "Malvin" }],
openGraph: {
  title: "Malvin - Full-Stack Developer",
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

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ThemeToggle />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2025 sehmaluva. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

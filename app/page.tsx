import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ResearchSection } from "@/components/research-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ResearchSection />
      <ContactSection />
      <FaqSection />

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} @sehmaluva. Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}



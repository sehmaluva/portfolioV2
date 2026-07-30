import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ResearchSection } from "@/components/research-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative pt-16">
      <Navigation />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ResearchSection />
      <ContactSection />
      <FaqSection />

      <footer className="py-10 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Malvin T. Machingura · @sehmaluva
          </p>
        </div>
      </footer>
    </main>
  );
}

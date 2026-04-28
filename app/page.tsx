import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { DemoSection } from "@/components/demo-section"
import { TeamSection } from "@/components/team-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="problem">
        <ProblemSection />
      </section>
      <section id="solution">
        <SolutionSection />
      </section>
      <section id="demo">
        <DemoSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <FooterSection />
    </main>
  )
}

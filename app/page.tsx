import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  AdvancedFeatures,
  Contact,
  Footer,
} from "@/components/portfolio"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AdvancedFeatures />
      <Contact />
      <Footer />
    </main>
  )
}

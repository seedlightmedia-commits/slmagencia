import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { WorkShowcase } from "@/components/work-showcase"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      {/* <WorkShowcase /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

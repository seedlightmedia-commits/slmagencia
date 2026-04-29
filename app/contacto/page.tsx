import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contactanos | Seed Light Media",
  description: "Contactanos para cotizar tu proyecto audiovisual. Estamos listos para hacer realidad tu vision.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

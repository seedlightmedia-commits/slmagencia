import { Navbar } from "@/components/navbar"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Nuestro Trabajo | Seed Light Media",
  description: "Explora nuestro portafolio de producciones audiovisuales: videos comerciales, corporativos, musicales, bodas y fotografia profesional.",
}

export default function NuestroTrabajo() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

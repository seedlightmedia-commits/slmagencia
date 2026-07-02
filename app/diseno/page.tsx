"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type DesignCategory = {
  title: string
  description: string
  image: string
  gallery: string[]
}

// ⚠️ Reemplaza estas rutas por tus imágenes reales (en /public) o URLs de blob storage,
// igual que hiciste con photoCategories en Portfolio.
const designCategories: DesignCategory[] = [
  {
    title: "Publicidad",
    description: "Piezas gráficas para campañas digitales e impresas",
    image: "/Publicidad1.jpg",
    gallery: ["Publicidad1.jpg", "Publicidad2.jpg", "Publicidad3.jpg", "Publicidad4.jpg"],
  },
  {
    title: "Panfletos y Volantes",
    description: "Material impreso para promociones y eventos",
    image: "/Panfleto1.jpg",
    gallery: ["Panfleto1.jpg", "Panfleto2.jpg", "Panfleto3.jpg"],
  },
  {
    title: "Diseño de Páginas Web",
    description: "Interfaces y sitios web a medida",
    image: "/Web1.png",
    gallery: ["Web1.jpg", "Web2.jpg", "Web3.jpg", "Web4.jpg"],
  },
]

export default function DisenoPage() {
  const [selectedGallery, setSelectedGallery] = useState<{
    images: string[]
    title: string
  } | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-secondary/20 relative">
      {/* Background decorativo, igual que en Portfolio */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comercial2-HFqZlQYmls1dKIer8rZU1BxWXUuZQl.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Volver */}
          <Link
            href="/#nuestro-trabajo"
            className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition mb-8"
          >
            ← Volver a Nuestro Trabajo
          </Link>

          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Diseño <span className="text-primary">Creativo</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Publicidad, panfletos y páginas web pensados para comunicar tu marca.
            </p>
          </div>

          {/* Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designCategories.map((category) => (
              <div
                key={category.title}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-6 transition">
                  <h4 className="text-white mb-2 font-bold text-xl">{category.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{category.description}</p>

                  <button
                    onClick={() =>
                      setSelectedGallery({
                        images: category.gallery,
                        title: category.title,
                      })
                    }
                    className="bg-primary text-white px-6 py-2 rounded-full"
                  >
                    Ver Galería
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* MODAL - mismo patrón que en Portfolio */}
      {selectedGallery && (
        <div
          className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
          onClick={() => setSelectedGallery(null)}
        >
          <div
            className="relative max-w-5xl w-full p-4 mx-auto my-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              ✕
            </button>

            <h3 className="text-white text-xl text-center mb-4 font-bold">
              {selectedGallery.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
              {selectedGallery.images.map((img, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={`/${img}`}
                    alt={`img-${index}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

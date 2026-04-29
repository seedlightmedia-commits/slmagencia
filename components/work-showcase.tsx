"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const workItems = [
  {
    title: "Fotografía",
    link: "https://www.instagram.com/reel/DIMVUzUJvUJ/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotoboda-o5W4vKFSQhIrsQmMNSu9tECKeo1c8o.jpg",
  },
  {
    title: "Streaming",
    link: "https://www.instagram.com/reel/DSDJPyukail/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Otras4-jFdEof649CMHnUZIabxxPtOe86wSZI.jpg",
  },
  {
    title: "Video Clips",
    link: "https://www.instagram.com/reel/C_0kTIsO2Sg/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comercial2-HFqZlQYmls1dKIer8rZU1BxWXUuZQl.jpg",
  },
  {
    title: "Comerciales",
    link: "https://www.instagram.com/reel/C1FHks5OBiu/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comercial-mc5pGzneIiJUqgX4UA9Yhzv9Y0mMAi.jpg",
  },
  {
    title: "Cubrimientos",
    link: "https://www.instagram.com/reel/CzJ0IhxuTAd/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comercial4-KsygOAeh0ChBtLulddeUfOW4jLcD8d.jpg",
  },
]

export function WorkShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ¿Cómo lo <span className="text-primary">hacemos?</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Explora nuestro portafolio de proyectos audiovisuales en instagram y descubre cómo transformamos ideas en contenido visual de alta calidad.
          </p>
        </div>

        {/* Work Grid - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {workItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[16/9] lg:aspect-[3/4] overflow-hidden rounded-xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Title - Transparent style */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-white/90 backdrop-blur-sm bg-black/20 px-6 py-3 rounded-lg border border-white/10 group-hover:bg-primary/80 group-hover:border-primary transition-all duration-500">
                  {item.title}
                </span>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-primary/90 transition-all animate-pulse-glow"
          >
            Quiero una Cotización
          </Link>
        </div>
      </div>
    </section>
  )
}

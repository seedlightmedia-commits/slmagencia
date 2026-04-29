"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const teamImages = [
  "Juan.jpg",
  "Juan4.jpg",
  "Somos17.jpg",
  "Somos1.jpg",
  "Somos7.jpg",
  "Somos16.jpg",
  "SomosDani.jpg",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % teamImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="quienes-somos" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo1-78AmKrrkwsz2HGguizukelxVauPRfr.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {teamImages.map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt="Equipo Seed Light Media"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl shadow-primary/30">
              <p className="text-3xl font-bold">+5</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Quiénes <span className="text-primary">Somos</span>?
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              <span className="text-primary font-bold">Seed Light Media</span> es una agencia de marketing audiovisual que apoya a empresas y emprendedores a lanzar su marca, posicionarla y sostenerla en el mercado con éxito.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              Su principal fundador <span className="text-white font-semibold">Juan Urrutia</span> es un productor audiovisual especializado en fotografía y color, graduado como profesional en Cine y Televisión.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">+100</p>
                <p className="text-white/60 text-sm">Proyectos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">+50</p>
                <p className="text-white/60 text-sm">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">+5</p>
                <p className="text-white/60 text-sm">Años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

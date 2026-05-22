"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const backgroundImages = [
  "Fondo3.jpg",
  "Portada12.jpg",
  "Portada2.jpg",
  "Fondo2.jpg",
  "Portada5.jpg",
  "Portada14.jpg",
]

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentBg === index ? "opacity-30" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Background"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Tagline - Tamaño agrandado a 6xl y margen superior eliminado */}
        <h1
          className={`text-3xl md:text-6xl font-light text-white mt-0 tracking-widest uppercase transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Produccion <span className="text-primary font-bold">Audiovisual</span>
        </h1>

        <p
          className={`text-white/70 mt-6 max-w-xl text-base md:text-lg transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Transformamos tu vision en contenido visual de alta calidad
        </p>

        {/* Social Media Links */}
        <div
          className={`flex gap-4 mt-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="https://www.instagram.com/slmagencia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary/60 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@seedlightmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary/60 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

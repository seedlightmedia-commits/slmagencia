"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const clients = [
  {
    name: "ULA Idiomas",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ulaLogo-imDb74rqtIRLkHSthqST0bSNEnrBkV.png",
  },
  {
    name: "Jumbo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JumboLogo-V0cnUsSWSPD4J0kie4ZsEzMTwzNZDu.png",
  },
  {
    name: "Metro",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metro-mwzkwDJPdSOMi3aXzaEoBBpH1bVGzX.png",
  },
  {
    name: "Easy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EasyLogo-WwrmOSyuVHV2WayQc0Oxuafz3GSN5v.png",
  },
  {
    name: "Cencosud",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cencosud-dyaouxVwE7fBKM5UOnJoCtRlLqxza6.png",
  },
]

export function Clients() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50 relative overflow-hidden">
      {/* Animated Background Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestros <span className="text-primary">Clientes</span>
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`flex-shrink-0 w-32 h-24 md:w-40 md:h-28 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index % clients.length) * 100}ms` }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

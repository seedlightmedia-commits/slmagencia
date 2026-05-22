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
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)
  const isPausedRef = useRef(false)
  const isDraggingRef = useRef(false)
  const animationFrame = useRef<number | null>(null)

  const normalizeScroll = (value: number, max: number) => {
    if (max === 0) return 0
    return ((value % max) + max) % max
  }

  const clientsRepeated = [...clients, ...clients]

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
    isPausedRef.current = isPaused
  }, [isPaused])

  useEffect(() => {
    isDraggingRef.current = isDragging
  }, [isDragging])

  useEffect(() => {
    const speed = 0.05
    let lastTime = 0

    const tick = (time: number) => {
      const node = marqueeRef.current
      if (node && !isPausedRef.current && !isDraggingRef.current) {
        if (lastTime === 0) lastTime = time
        const delta = time - lastTime
        lastTime = time
        const maxScroll = node.scrollWidth / 2
        if (maxScroll > 0) {
          const nextScroll = normalizeScroll(node.scrollLeft + speed * delta, maxScroll)
          node.scrollLeft = nextScroll
        }
      } else {
        lastTime = time
      }

      animationFrame.current = requestAnimationFrame(tick)
    }

    animationFrame.current = requestAnimationFrame(tick)
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!marqueeRef.current) return
    event.preventDefault()
    marqueeRef.current.setPointerCapture(event.pointerId)
    dragStartX.current = event.clientX
    scrollStartX.current = marqueeRef.current.scrollLeft
    setIsDragging(true)
    setIsPaused(true)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !marqueeRef.current) return
    const deltaX = dragStartX.current - event.clientX
    const node = marqueeRef.current
    node.scrollLeft = scrollStartX.current + deltaX
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!marqueeRef.current) return
    marqueeRef.current.releasePointerCapture(event.pointerId)
    setIsDragging(false)
    setIsPaused(false)
  }

  const handlePointerLeave = () => {
    if (!isDragging) {
      setIsPaused(false)
    }
  }

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
          <div
            ref={marqueeRef}
            className="logo-marquee flex gap-16 items-center whitespace-nowrap"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isDragging && setIsPaused(false)}
            style={{ cursor: isDragging ? "grabbing" : "grab", overflowX: "auto", overflowY: "hidden" }}
          >
            {clientsRepeated.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`flex-shrink-0 w-32 h-24 md:w-40 md:h-28 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
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
        <style jsx>{`
          .logo-marquee {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .logo-marquee::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}

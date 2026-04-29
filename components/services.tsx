  "use client"

  import { useEffect, useRef, useState } from "react"
  import Image from "next/image"
  import Link from "next/link"

  const services = [
    {
      title: "Fotografía",
      link: "/nuestro-trabajo#fotografia",
      images: ["/Foto1.jpg", "/Foto2.jpg", "/Foto3.jpg", "/Foto4.jpg"],
    },
    {
      title: "Comerciales",
      link: "/nuestro-trabajo#video-comerciales",
      images: ["/Comercial1.jpg", "/Comercial2.jpg", "/Comercial3.jpg"],
    },
    {
      title: "Streaming",
      link: "/nuestro-trabajo#video",
      images: ["/Streaming1.jpg", "/Streaming3.jpg", "/Streaming12.jpg"],
    },
    {
      title: "Contenido para Redes Sociales",
      link: "/nuestro-trabajo#video-redes",
      images: ["/Red1.jpg", "/Red2.jpg", "/Red3.jpg"],
    },
    {
      title: "Corporativo",
      link: "/nuestro-trabajo#video-corporativo",
      images: ["/CorporativoFoto3.jpg", "/CorporativoFoto.jpg", "/CorporativoFoto2.jpg"],
    },
    {
      title: "Postproducción",
      link: "/nuestro-trabajo#video-musicales",
      images: ["/Posproduccion.jpg", "/Posproduccion2.jpg", "/Posproduccion3.jpg"],
    },
  ]

  function ServiceCard({ service, index }: { service: any; index: number }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      }, { threshold: 0.2 })
      if (cardRef.current) observer.observe(cardRef.current)
      return () => observer.disconnect()
    }, [])

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % service.images.length)
      }, 3000 + index * 500)
      return () => clearInterval(interval)
    }, [service.images.length, index])

    return (
      <Link href={service.link}>
        <div 
          ref={cardRef} 
          className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} 
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {service.images.map((img: string, imgIndex: number) => (
            <Image 
              key={`${service.title}-${imgIndex}`} 
              src={img} 
              alt={service.title} 
              fill 
              className={`object-cover object-top transition-all duration-1000 ${currentImage === imgIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"} group-hover:scale-110`} 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
            <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500 mt-2" />
          </div>
        </div>
      </Link>
    )
  }

  export function Services() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      }, { threshold: 0.1 })
      if (sectionRef.current) observer.observe(sectionRef.current)
      return () => observer.disconnect()
    }, [])

    return (
      <section ref={sectionRef} id="servicios" className="py-20 md:py-32 bg-black/80 relative overflow-hidden">
        
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <div className="relative w-[120%] h-[120%]">
            <Image 
              src="/LogoWatermark.png" 
              alt="SLM Watermark" 
              fill
              className="object-contain filter grayscale brightness-150"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-8xl font-bold text-white mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Ofrecemos soluciones audiovisuales completas para llevar tu marca al siguiente nivel
            </p>
          </div>

          {/* CAMBIO CLAVE: grid-cols-3 para el diseño de 3 y 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    )
  }
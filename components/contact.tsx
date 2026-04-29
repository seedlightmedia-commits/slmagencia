"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link or formspree submission
    const subject = encodeURIComponent(`Cotización: ${formData.service || 'General'}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\n\nMensaje:\n${formData.message}`
    )
    window.location.href = `mailto:SeedLightMedia@gmail.com?subject=${subject}&body=${body}`
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/slmagencia",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@seedlightmedia",
      color: "hover:bg-red-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/SeedLightMedia",
      color: "hover:bg-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/573192146693",
      color: "hover:bg-green-500",
    },
  ]

  return (
    <section ref={sectionRef} id="contacto" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fondo3-ciFreEcjtRhdPLzJirIYwarCdru5Uj.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu proyecto audiovisual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Teléfono</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="+57 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Servicio</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Video Comercial">Video Comercial</option>
                    <option value="Video Corporativo">Video Corporativo</option>
                    <option value="Fotografía">Fotografía</option>
                    <option value="Streaming">Streaming</option>
                    <option value="Redes Sociales">Contenido Redes Sociales</option>
                    <option value="Bodas">Video/Foto de Bodas</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all animate-pulse-glow"
              >
                <Send size={20} />
                Quiero una Cotización
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>

              <div className="space-y-6">
                <a
                  href="mailto:SeedLightMedia@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="font-medium">SeedLightMedia@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+573192146693"
                  className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Teléfono</p>
                    <p className="font-medium">+57 319 214 6693</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Ubicación</p>
                    <p className="font-medium">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-white/50 text-sm mb-4">Síguenos en redes</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white transition-all ${social.color}`}
                    >
                      <social.icon size={22} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/573192146693?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20audiovisual"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-6 rounded-full font-bold hover:bg-green-600 transition-all w-full"
            >
              <MessageCircle size={24} />
              Escríbenos por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

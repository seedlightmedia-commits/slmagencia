"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo1-78AmKrrkwsz2HGguizukelxVauPRfr.png"
                alt="Seed Light Media"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/50 text-sm text-center md:text-left">
              Producción Audiovisual Profesional
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="/nuestro-trabajo" className="text-white/60 hover:text-primary transition-colors text-sm">
                Nuestro Trabajo
              </Link>
              <Link href="/contacto" className="text-white/60 hover:text-primary transition-colors text-sm">
                Contacto
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/slmagencia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/20 transition-all"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/@seedlightmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/20 transition-all"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/SeedLightMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/20 transition-all"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="mailto:SeedLightMedia@gmail.com"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/20 transition-all"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Seed Light Media. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

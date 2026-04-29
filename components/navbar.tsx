"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Instagram, Youtube } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/nuestro-trabajo", label: "Nuestro Trabajo" },
    { href: "/#quienes-somos", label: "Quienes Somos" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Links to Quienes Somos */}
          <Link href="/#quienes-somos" className="flex-shrink-0 relative w-16 h-16">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo1-78AmKrrkwsz2HGguizukelxVauPRfr.png"
              alt="Seed Light Media"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center gap-2 ml-2">
              <Link
                href="https://www.instagram.com/slmagencia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/60 hover:bg-primary rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="https://www.youtube.com/@seedlightmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/60 hover:bg-primary rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all"
              >
                <Youtube size={16} />
              </Link>
            </div>

            <Link
              href="/contacto"
              className="bg-primary text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider font-bold hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              Contactanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md absolute top-full left-0 right-0 py-4 px-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Social Links Mobile */}
            <div className="flex gap-4 py-3">
              <Link
                href="https://www.instagram.com/slmagencia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-primary"
              >
                <Instagram size={18} />
                <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@seedlightmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-primary"
              >
                <Youtube size={18} />
                <span className="text-sm">YouTube</span>
              </Link>
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 bg-primary text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider font-bold text-center"
            >
              Contactanos
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

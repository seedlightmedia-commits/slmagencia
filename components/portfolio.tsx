"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type VideoItem = {
  id: string
  title: string
  isShort?: boolean
}

type VideoCategory = {
  id: string
  title: string
  videos: VideoItem[]
}

const videoCategories: VideoCategory[] = [
  {
    id: "video-comerciales",
    title: "Videos Comerciales",
    videos: [
      { id: "tWVEf2ZexXg", title: "Comercial 1" },
      { id: "k1AXKYm4Iq0", title: "Comercial 2" },
      { id: "PMu7mnqmx9g", title: "Comercial 3" },
    ],
  },
  {
    id: "video-corporativo",
    title: "Videos Corporativos",
    videos: [
      { id: "x4_jgtd1A74", title: "Corporativo 1" },
      { id: "JlcH6eYKDZw", title: "Corporativo 2" },
    ],
  },
  {
    id: "video-redes",
    title: "Videos para Redes Sociales",
    videos: [
      { id: "LQeIOx8nEmk", title: "Redes 1", isShort: true },
      { id: "vpcwGDIZICM", title: "Redes 2", isShort: true },
      { id: "_2_XvBK0Po8", title: "Redes 3", isShort: true },
    ],
  },
  {
    id: "video-musicales",
    title: "Videos Musicales",
    videos: [
      { id: "ms_i1EOx2MA", title: "Musical 1" },
      { id: "t3UZ3E2YSHk", title: "Musical 2" },
    ],
  },
  {
    id: "video-bodas",
    title: "Videos de Bodas",
    videos: [
      { id: "AIAZdZmpHro", title: "Boda 1" },
      { id: "UH5dtrYofII", title: "Boda 2" },
    ],
  },
]

const photoCategories = [
  {
    title: "Fotografia Corporativa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FotoCorporativa.jpg-bII9NuXMLVZIEr2gyI0tYNO34p5RLk.jpg",
    gallery: ["CorporativoFoto.jpg", "CorporativoFoto2.jpg", "CorporativoFoto3.jpg", "CorporativoFoto4.jpg", "CorporativoFoto5.jpg", "CorporativoFoto6.jpg", "CorporativoFoto7.jpg", "CorporativoFoto8.jpg", "CorporativoFoto9.jpg"],  },
  {
    title: "Fotografia de Producto",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FotoProducto.jpg-cJ73PlyV6KDburaOZ3k7WVSIq5xBBJ.jpg",
    gallery: ["Producto1.jpg", "Producto2.jpg", "Producto3.jpg","Producto4.jpg","Producto5.jpg", "Producto6.jpg", "Producto7.jpg", "Producto8.jpg"], // ⚠️ revisa mayúsculas reales
  },
  {
    title: "Fotografia de Bodas",
    image: "Bodas.jpg",
    gallery: ["Fotoboda.jpg", "Fotoboda2.jpg", "Fotoboda3.jpg", "Fotoboda4.jpg", "Fotoboda5.jpg", "Fotoboda6.jpg", "Fotoboda7.jpg", "Fotoboda8.jpg"],
  },
]

function VideoCard({ videoId, title, isShort }: { videoId: string; title: string; isShort?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="group relative">
      <div className={`relative ${isShort ? 'aspect-[9/16]' : 'aspect-video'} rounded-xl overflow-hidden bg-secondary`}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                ▶
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'video' | 'foto'>('video')
  const sectionRef = useRef<HTMLElement>(null)

  const [selectedGallery, setSelectedGallery] = useState<{
    images: string[]
    title: string
  } | null>(null)

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#fotografia') setActiveTab('foto')
      else if (hash.includes('video')) setActiveTab('video')
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
  <section ref={sectionRef} id="nuestro-trabajo" className="py-20 md:py-32 bg-secondary/20 relative">
    
    {/* ✅ Background BIEN ubicado */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comercial2-HFqZlQYmls1dKIer8rZU1BxWXUuZQl.jpg"
        alt="background"
        fill
        className="object-cover"
      />
    </div>

    {/* CONTENIDO */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Nuestro <span className="text-primary">Trabajo</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button onClick={() => setActiveTab('video')} className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'video' ? 'bg-primary text-white' : 'bg-secondary text-white/70 hover:bg-primary/60 hover:text-white'}`}>
          Video
        </button>
        <button onClick={() => setActiveTab('foto')} className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'foto' ? 'bg-primary text-white' : 'bg-secondary text-white/70 hover:bg-primary/60 hover:text-white'}`}>
          Fotografia
        </button>
        <Link
          href="/diseno"
          className="px-8 py-3 rounded-full font-bold bg-secondary text-white/70 hover:bg-primary/60 hover:text-white transition"
        >
          Diseño
        </Link>
      </div>

        {/* VIDEO */}
        {activeTab === 'video' && (
          <div className="space-y-16">
            {videoCategories.map((category) => (
              <div key={category.title} id={category.id}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div
                  className={`grid gap-6 ${
                    category.videos[0]?.isShort
                      ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {category.videos.map((video) => (
                    <VideoCard
                      key={video.id}
                      videoId={video.id}
                      title={video.title}
                      isShort={video.isShort}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOTOGRAFÍA */}
        {activeTab === 'foto' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoCategories.map((photo) => (
              <div key={photo.title} className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={photo.image} alt={photo.title} fill className="object-cover group-hover:scale-110 transition" />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                  <h4 className="text-white mb-4 font-bold">{photo.title}</h4>

                  <button
                    onClick={() =>
                      setSelectedGallery({
                        images: photo.gallery,
                        title: photo.title,
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
        )}
      </div>

      {/* MODAL */}
      {selectedGallery && (
          <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
          onClick={() => setSelectedGallery(null)}
        >
          <div className="relative max-w-5xl w-full p-4 mx-auto my-10"
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
    </section>
  )
}

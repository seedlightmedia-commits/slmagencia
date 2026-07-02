import type { Metadata } from 'next'
import { Montserrat, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  // --- CONFIGURACIÓN TÉCNICA AGREGADA PARA POSICIONAR EN BOGOTÁ Y COLOMBIA ---
  metadataBase: new URL("https://slmagencia.com"),
  alternates: {
    canonical: "/",
  },
  // ------------------------------------------------------------------------

  title: 'Seed Light Media | Producción Audiovisual',
  description: 'Agencia de marketing audiovisual que apoya a empresas y emprendedores a lanzar su marca, posicionarla y sostenerla en el mercado con éxito.',
  // SE ELIMINÓ LA LÍNEA DEL GENERADOR DE V0 PARA QUITAR SU LOGOTIPO DE LOS BUSCADORES
  keywords: ['producción audiovisual', 'video corporativo', 'fotografía', 'streaming', 'comerciales', 'Colombia', 'Bogotá', 'marketing digital', 'contenido para redes sociales', 'postproducción' ],
  icons: {
    icon: [
      // Agregado el tamaño 48x48 requerido por Google para indexar el logo correctamente
      {
        url: '/icon-48x48.png',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-light-32x32.png',
        type: 'image/png',
      },
    ],
    // Ajustado el formato de Apple con tamaño óptimo de alta resolución
    apple: [
      {
        url: '/icon-apple-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  // --- CONFIGURACIÓN METADATOS GEO-LOCALIZADOS ---
  openGraph: {
    title: 'Seed Light Media | Producción Audiovisual',
    description: 'Agencia de marketing audiovisual que apoya a empresas y emprendedores a lanzar su marca, posicionarla y sostenerla en el mercado con éxito.',
    url: 'https://slmagencia.com',
    siteName: 'Seed Light Media',
    locale: 'es_CO', // Indica a los buscadores prioridad absoluta para Colombia
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Objeto JSON-LD totalmente corregido en su sintaxis interna
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seed Light Media",
    "image": "https://slmagencia.com",
    "@id": "https://slmagencia.com",
    "url": "https://slmagencia.com",
    "telephone": "+573192146693", 
    "priceRange": "$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bogotá, Colombia", // Requerido por Google. Puedes cambiarlo por tu calle real si deseas.
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "postalCode": "110111",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.60971,
      "longitude": -74.08175
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com",
      "https://facebook.com", // Agregada la coma corregida
      "https://youtube.com"   // Agregada la coma corregida
    ]
  }

  return (
    <html lang="es" className="dark">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {/* Inyección segura del Script de SEO Local y Nacional sin alterar el DOM visual */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

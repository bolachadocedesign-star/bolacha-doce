import type { Metadata } from "next";
import "./globals.css";
import { GTMProvider } from "@/components/GTMProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Bolacha Doce - Convites Personalizados",
    template: "%s | Bolacha Doce"
  },
  description: "Criamos convites personalizados para casamentos, aniversários e eventos especiais. Design único, qualidade excepcional e preço justo. Transforme seu evento em uma lembrança eterna.",
  keywords: [
    "convites personalizados",
    "convites de casamento",
    "convites de aniversário",
    "convites elegantes",
    "design de convites",
    "eventos especiais",
    "Bolacha Doce"
  ],
  authors: [{ name: "Bolacha Doce" }],
  creator: "Bolacha Doce",
  publisher: "Bolacha Doce",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bolachadoce.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bolachadoce.com.br",
    title: "Bolacha Doce - Convites Personalizados",
    description: "Criamos convites personalizados para casamentos, aniversários e eventos especiais. Design único, qualidade excepcional e preço justo.",
    siteName: "Bolacha Doce",
    images: [
      {
        url: "/images/bolacha-doce-logo.png",
        width: 1200,
        height: 630,
        alt: "Bolacha Doce - Convites Personalizados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolacha Doce - Convites Personalizados",
    description: "Criamos convites personalizados para casamentos, aniversários e eventos especiais.",
    images: ["/images/bolacha-doce-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Substitua pelo código real do Google Search Console
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/images/bolacha-doce-logo.png" />
        <link rel="apple-touch-icon" href="/images/bolacha-doce-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fce6d4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload de recursos críticos */}
        <link rel="preload" href="/fontes/ttSarsA/TTTsarsA-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fontes/gothan/Gotham-Book.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/images/bolacha-doce-logo.png" as="image" />
        
        {/* Schema.org - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bolacha Doce",
              "description": "Criamos convites personalizados para casamentos, aniversários e eventos especiais em Belo Horizonte. Aquarela digital, design exclusivo e acabamentos especiais.",
              "url": "https://bolachadoce.com.br",
              "telephone": "+55-31-97175-0654",
              "email": "contato@bolachadoce.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-19.9167",
                "longitude": "-43.9345"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "image": "https://bolachadoce.com.br/images/bolacha-doce-logo.png",
              "logo": "https://bolachadoce.com.br/images/bolacha-doce-logo.png",
              "sameAs": [
                "https://instagram.com/bolachadoce",
                "https://facebook.com/bolachadoce"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "-19.9167",
                  "longitude": "-43.9345"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Convites Personalizados",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Convites de Casamento Personalizados",
                      "description": "Convites de casamento únicos com aquarela digital e acabamentos especiais"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Convites de Aniversário Personalizados",
                      "description": "Convites de aniversário personalizados com design exclusivo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Convites de Eventos Especiais",
                      "description": "Convites personalizados para diversos tipos de eventos especiais"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-gotham">
        <GTMProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fce6d4',
                color: '#5f4b3b',
                border: '1px solid #5f4b3b',
              },
            }}
          />
        </GTMProvider>
      </body>
    </html>
  );
}
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { convitesList } from '@/data/convitesData';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return convitesList.map((convite) => ({
    slug: encodeURIComponent(convite.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const convite = convitesList.find(
    (c) => encodeURIComponent(c.name) === slug
  );

  if (!convite) {
    return {
      title: 'Convite não encontrado | Bolacha Doce',
    };
  }

  return {
    title: `Convite ${convite.principal} ${convite.secundaria} - ${convite.name} | Bolacha Doce BH`,
    description: `Convite ${convite.principal} ${convite.secundaria} com acabamento ${convite.acabamento} criado para ${convite.name}. ${convite.description} Veja mais trabalhos da Bolacha Doce em Belo Horizonte.`,
    keywords: [
      `convite ${convite.principal}`,
      `convite ${convite.secundaria}`,
      `acabamento ${convite.acabamento}`,
      'convites personalizados BH',
      'Bolacha Doce',
      'aquarela digital',
      'design convites casamento'
    ],
    openGraph: {
      title: `Convite ${convite.principal} ${convite.secundaria} - ${convite.name} | Bolacha Doce BH`,
      description: `Convite ${convite.principal} ${convite.secundaria} com acabamento ${convite.acabamento} criado para ${convite.name}.`,
      images: [
        {
          url: convite.images[0],
          width: 1200,
          height: 630,
          alt: `Convite ${convite.principal} ${convite.secundaria} - ${convite.name} - Bolacha Doce`,
        }
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    alternates: {
      canonical: `https://bolachadoce.com.br/convites/${encodeURIComponent(convite.name)}`,
    },
  };
}

export default async function ConviteDetail({ params }: Props) {
  const { slug } = await params;
  const convite = convitesList.find(
    (c) => encodeURIComponent(c.name) === slug
  );

  if (!convite) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-4">
        {/* Schema.org - Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": `Convite ${convite.principal} ${convite.secundaria} - ${convite.name}`,
              "description": convite.description,
              "image": convite.images,
              "brand": {
                "@type": "Brand",
                "name": "Bolacha Doce"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "BRL",
                "price": "Sob consulta",
                "seller": {
                  "@type": "Organization",
                  "name": "Bolacha Doce",
                  "url": "https://bolachadoce.com.br"
                }
              },
              "category": "Convites Personalizados",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Tipo",
                  "value": convite.principal
                },
                {
                  "@type": "PropertyValue",
                  "name": "Estilo",
                  "value": convite.secundaria
                },
                {
                  "@type": "PropertyValue",
                  "name": "Acabamento",
                  "value": convite.acabamento
                }
              ]
            })
          }}
        />
        
        {/* Schema.org - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bolachadoce.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Convites",
                  "item": "https://bolachadoce.com.br/convites"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": convite.name,
                  "item": `https://bolachadoce.com.br/convites/${encodeURIComponent(convite.name)}`
                }
              ]
            })
          }}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-[#5f4b3b]">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li><Link href="/convites" className="hover:underline">Convites</Link></li>
              <li>/</li>
              <li className="font-semibold">{convite.name}</li>
            </ol>
          </nav>

          {/* H1 e informações principais */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#5f4b3b] mb-6">
              Convite {convite.principal} {convite.secundaria} - {convite.name}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-[#fce6d4] text-[#5f4b3b] px-4 py-2 rounded-full text-sm font-semibold">
                {convite.principal}
              </span>
              <span className="bg-[#5f4b3b] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {convite.secundaria}
              </span>
              <span className="bg-[#fce6d4] text-[#5f4b3b] px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#5f4b3b]">
                {convite.acabamento}
              </span>
            </div>

            <p className="text-lg text-[#5f4b3b] max-w-3xl mx-auto leading-relaxed">
              {convite.description}
            </p>
          </div>

          {/* Galeria de imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {convite.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Convite ${convite.principal} ${convite.secundaria} com acabamento ${convite.acabamento} - ${convite.name} - Imagem ${index + 1} - Bolacha Doce BH`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#5f4b3b] mb-6">
              Quer um convite personalizado como este?
            </h2>
            <p className="text-lg text-[#5f4b3b] mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos criar algo único para o seu evento especial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform"
              >
                Solicitar Orçamento
              </Link>
              
              <Link 
                href="/convites"
                className="bg-transparent text-[#5f4b3b] border-2 border-[#5f4b3b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5f4b3b] hover:text-white transition-colors duration-300 hover:scale-105 transform"
              >
                Ver Mais Convites
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

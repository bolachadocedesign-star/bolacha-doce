import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Presentation from '@/components/Presentation';
import PhotoPanel from '@/components/PhotoPanel';
import AboutProfessional from '@/components/AboutProfessional';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: 'Convites Personalizados BH | Bolacha Doce - Aquarela Digital',
  description: 'Criamos convites personalizados únicos em Belo Horizonte. Aquarela digital, design exclusivo e acabamentos especiais para casamentos, aniversários e eventos. Orçamento sem compromisso.',
  keywords: [
    'convites personalizados BH',
    'convites casamento Belo Horizonte',
    'aquarela digital convites',
    'convites artesanais',
    'papelaria casamento BH',
    'convites exclusivos',
    'design convites personalizados',
    'Bolacha Doce'
  ],
  openGraph: {
    title: 'Convites Personalizados BH | Bolacha Doce - Aquarela Digital',
    description: 'Criamos convites personalizados únicos em Belo Horizonte. Aquarela digital, design exclusivo e acabamentos especiais para casamentos, aniversários e eventos.',
    images: [
      {
        url: '/images/bolacha-doce-logo.png',
        width: 1200,
        height: 630,
        alt: 'Bolacha Doce - Convites Personalizados em Belo Horizonte',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convites Personalizados BH | Bolacha Doce',
    description: 'Criamos convites personalizados únicos em Belo Horizonte. Aquarela digital e design exclusivo.',
    images: ['/images/bolacha-doce-logo.png'],
  },
  alternates: {
    canonical: 'https://bolachadoce.com.br',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* H1 principal para SEO */}
        <div className="sr-only">
          <h1>Convites Personalizados em Belo Horizonte | Bolacha Doce - Aquarela Digital e Design Exclusivo</h1>
        </div>
        <Presentation />
        <PhotoPanel />
        <Banner />
        <AboutProfessional />
      </main>
      <Footer />
    </div>
  );
}
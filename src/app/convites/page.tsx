import { Metadata } from 'next';
import ConvitesClient from './ConvitesClient';

export const metadata: Metadata = {
  title: 'Portfólio de Convites Personalizados | Bolacha Doce BH',
  description: 'Explore nosso portfólio de convites personalizados criados para casamentos, aniversários e eventos em Belo Horizonte. Aquarela digital, acabamentos especiais e design único.',
  keywords: [
    'portfólio convites personalizados',
    'galeria convites casamento BH',
    'convites aquarela digital',
    'convites artesanais Belo Horizonte',
    'exemplos convites personalizados',
    'trabalhos Bolacha Doce',
    'convites elegantes BH'
  ],
  openGraph: {
    title: 'Portfólio de Convites Personalizados | Bolacha Doce BH',
    description: 'Explore nosso portfólio de convites personalizados criados para casamentos, aniversários e eventos em Belo Horizonte.',
    images: [
      {
        url: '/images/bolacha-doce-logo.png',
        width: 1200,
        height: 630,
        alt: 'Portfólio de Convites Personalizados - Bolacha Doce',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bolachadoce.com.br/convites',
  },
};

export default function Convites() {
  return <ConvitesClient />;
}


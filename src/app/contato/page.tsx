import { Metadata } from 'next';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: 'Contato Bolacha Doce | Orçamento Convites Personalizados BH',
  description: 'Entre em contato com a Bolacha Doce para orçamento de convites personalizados em Belo Horizonte. WhatsApp (31) 97175-0654 ou email contato@bolachadoce.com.br',
  keywords: [
    'contato Bolacha Doce',
    'orçamento convites personalizados BH',
    'WhatsApp convites casamento',
    'contato designer convites',
    'Bolacha Doce telefone',
    'orçamento aquarela digital',
    'convites personalizados Belo Horizonte'
  ],
  openGraph: {
    title: 'Contato Bolacha Doce | Orçamento Convites Personalizados BH',
    description: 'Entre em contato com a Bolacha Doce para orçamento de convites personalizados em Belo Horizonte.',
    images: [
      {
        url: '/images/bolacha-doce-logo.png',
        width: 1200,
        height: 630,
        alt: 'Contato Bolacha Doce - Convites Personalizados',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bolachadoce.com.br/contato',
  },
};

export default function Contato() {
  return <ContatoClient />;
}

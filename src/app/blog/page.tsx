import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog Bolacha Doce | Dicas e Inspirações para Convites Personalizados',
  description: 'Descubra dicas, tendências e inspirações para convites personalizados. Guias completos sobre aquarela digital, acabamentos especiais e muito mais.',
  keywords: [
    'blog convites personalizados',
    'dicas convites casamento',
    'tendências convites 2025',
    'aquarela digital convites',
    'acabamentos especiais',
    'guia convites personalizados',
    'inspiração convites BH'
  ],
  openGraph: {
    title: 'Blog Bolacha Doce | Dicas e Inspirações para Convites Personalizados',
    description: 'Descubra dicas, tendências e inspirações para convites personalizados. Guias completos sobre aquarela digital e acabamentos especiais.',
    images: [
      {
        url: '/images/bolacha-doce-logo.png',
        width: 1200,
        height: 630,
        alt: 'Blog Bolacha Doce - Dicas para Convites Personalizados',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bolachadoce.com.br/blog',
  },
};

// Dados dos artigos do blog (em produção)
const blogPosts = [
  {
    id: 1,
    title: 'Aquarela Digital: Transformando Seu Convite em Uma Obra de Arte Única',
    excerpt: 'Descubra como a técnica de aquarela digital pode criar convites únicos e personalizados que contam sua história de amor.',
    slug: 'aquarela-digital-convites-personalizados',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Técnicas',
    image: '/logo.png'
  },
  {
    id: 2,
    title: 'Guia de Acabamentos: Qual o Detalhe Perfeito para o Seu Convite?',
    excerpt: 'Explore diferentes tipos de acabamentos e descubra qual combina melhor com o estilo do seu evento especial.',
    slug: 'guia-acabamentos-convites-casamento',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Guias',
    image: '/logo.png'
  },
  {
    id: 3,
    title: 'Tendências de Convites de Casamento 2025: O Que Está em Alta',
    excerpt: 'Conheça as principais tendências para convites de casamento em 2025 e inspire-se para criar algo único.',
    slug: 'tendencias-convites-casamento-2025',
    date: '2024-01-05',
    readTime: '6 min',
    category: 'Tendências',
    image: '/logo.png'
  },
  {
    id: 4,
    title: 'Como Escolher o Convite de Casamento Perfeito: Guia Completo',
    excerpt: 'Um guia passo a passo para ajudar noivos a escolherem o convite ideal para sua celebração especial.',
    slug: 'como-escolher-convite-casamento-perfeito',
    date: '2024-01-01',
    readTime: '8 min',
    category: 'Guias',
    image: '/logo.png'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* H1 e introdução */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#5f4b3b] mb-6">
              Blog Bolacha Doce - Dicas e Inspirações
            </h1>
            <p className="text-lg text-[#5f4b3b] max-w-3xl mx-auto leading-relaxed">
              Descubra dicas, tendências e inspirações para criar convites personalizados únicos. 
              Nossos artigos te ajudam a entender melhor o processo criativo e escolher o estilo perfeito.
            </p>
          </div>

          {/* Grid de artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-[#fce6d4] flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#5f4b3b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#5f4b3b] mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[#5f4b3b] font-semibold hover:underline"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA para contato */}
          <div className="bg-[#fce6d4] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#5f4b3b] mb-4">
              Pronto para criar seu convite personalizado?
            </h2>
            <p className="text-lg text-[#5f4b3b] mb-6">
              Entre em contato conosco e vamos transformar suas ideias em realidade.
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
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

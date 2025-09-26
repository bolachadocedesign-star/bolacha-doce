import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sobre a Bolacha Doce | Processo Criativo de Convites Personalizados BH',
  description: 'Conheça Julia e o processo criativo da Bolacha Doce. Criamos convites personalizados únicos em Belo Horizonte com aquarela digital e acabamentos especiais. Transformamos sua história em arte.',
  keywords: [
    'sobre Bolacha Doce',
    'Julia designer convites',
    'processo criativo convites',
    'aquarela digital BH',
    'história Bolacha Doce',
    'designer convites Belo Horizonte',
    'ateliê convites personalizados'
  ],
  openGraph: {
    title: 'Sobre a Bolacha Doce | Processo Criativo de Convites Personalizados BH',
    description: 'Conheça Julia e o processo criativo da Bolacha Doce. Criamos convites personalizados únicos em Belo Horizonte com aquarela digital e acabamentos especiais.',
    images: [
      {
        url: '/images/bolacha-doce-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sobre a Bolacha Doce - Processo Criativo de Convites',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bolachadoce.com.br/sobre',
  },
};

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#fce6d4] px-8 py-4 rounded-full mb-8">
              <span className="text-2xl font-bold text-[#5f4b3b]">Sobre</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#5f4b3b] mb-6">
              Sobre a Bolacha Doce - Processo Criativo de Convites Personalizados
            </h1>
          </div>
          
          {/* Processo Steps */}
          <div className="space-y-12">
            {/* Primeiro passo */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#fce6d4] to-[#5f4b3b] p-8 rounded-2xl text-center text-white shadow-lg">
                  <h3 className="text-xl font-bold leading-relaxed">
                    Produção<br/>e<br/>criatividade
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 h-1 bg-[#5f4b3b] rounded-full"></div>
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-lg text-[#5f4b3b]">
                  Cada convite é uma obra de arte única, criada com criatividade e atenção aos detalhes.
                </p>
              </div>
            </div>
            
            {/* Segundo passo */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#5f4b3b] to-[#4a3a2f] p-8 rounded-2xl text-center text-white shadow-lg">
                  <h3 className="text-xl font-bold leading-relaxed">
                    O que faz<br/>sua data<br/>ser única
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 h-1 bg-[#5f4b3b] rounded-full"></div>
              <div className="w-full lg:w-1/3 text-center lg:text-right">
                <p className="text-lg text-[#5f4b3b]">
                  Personalizamos cada detalhe para refletir a personalidade e o estilo do seu evento.
                </p>
              </div>
            </div>
            
            {/* Terceiro passo */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#fce6d4] to-[#5f4b3b] p-8 rounded-2xl text-center text-white shadow-lg">
                  <h3 className="text-xl font-bold leading-relaxed">
                    Como nós<br/>vamos<br/>criar uma<br/>lembrança<br/>eterna
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 h-1 bg-[#5f4b3b] rounded-full"></div>
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-lg text-[#5f4b3b]">
                  Utilizamos materiais de alta qualidade e técnicas artesanais para criar lembranças duradouras.
                </p>
              </div>
            </div>
            
            {/* Quarto passo */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#5f4b3b] to-[#4a3a2f] p-8 rounded-2xl text-center text-white shadow-lg">
                  <h3 className="text-xl font-bold leading-relaxed">
                    Aqui é feito<br/>com carinho<br/>e amor<br/>para você
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 h-1 bg-[#5f4b3b] rounded-full"></div>
              <div className="w-full lg:w-1/3 text-center lg:text-right">
                <p className="text-lg text-[#5f4b3b]">
                  Cada projeto é tratado com carinho especial, como se fosse para nossa própria família.
                </p>
              </div>
            </div>
            
            {/* Quinto passo */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gradient-to-br from-[#fce6d4] to-[#5f4b3b] p-8 rounded-2xl text-center text-white shadow-lg">
                  <h3 className="text-xl font-bold leading-relaxed">
                    Conhecendo<br/>a cliente e<br/>colhendo<br/>suas idéias
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 h-1 bg-[#5f4b3b] rounded-full"></div>
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-lg text-[#5f4b3b]">
                  Nossa abordagem é personalizada, começando com uma conversa para entender suas necessidades.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform">
              Quero conhecer melhor
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}


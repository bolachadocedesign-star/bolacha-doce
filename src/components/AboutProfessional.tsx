'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutProfessional() {
  const router = useRouter();

  const handleSaibaMais = () => {
    router.push('/sobre');
  };

  const handleAtendimento = () => {
    router.push('/contato');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-[#fce6d4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto da profissional */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/Julia/bolacha-doce-julia.jpeg"
                  alt="Julia, designer e fundadora da Bolacha Doce - Especialista em convites personalizados com aquarela digital"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#5f4b3b] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
          </div>

          {/* Texto da história */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#5f4b3b] mb-6">
              Sobre Julia
            </h3>
            
            <p className="text-lg text-[#5f4b3b] leading-relaxed mb-8">
              Julia é apaixonada por criar convites personalizados que fazem parte dos 
              momentos mais especiais da vida de nossos clientes. Com anos de experiência, 
              ela combina criatividade e atenção aos detalhes em cada projeto.
            </p>

            <p className="text-lg text-[#5f4b3b] leading-relaxed mb-8">
              Sua missão é transformar suas ideias em convites únicos e memoráveis, 
              garantindo que cada detalhe reflita a personalidade e o estilo do seu evento.
            </p>

            {/* Botões para as páginas */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleSaibaMais}
                className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform"
              >
                Saiba Mais...
              </button>
              
              <button 
                onClick={handleAtendimento}
                className="bg-transparent text-[#5f4b3b] border-2 border-[#5f4b3b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5f4b3b] hover:text-white transition-colors duration-300 hover:scale-105 transform"
              >
                Atendimento Personalizado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Presentation() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#fce6d4] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo: GIF */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/gifs/logo_bolacha_doce_optimized.gif"
                alt="Logo animado Bolacha Doce - Convites personalizados em Belo Horizonte com aquarela digital"
                fill
                className="object-contain"
                loading="eager"
                unoptimized
              />
            </div>
          </div>

          {/* Lado direito: conteúdo de texto */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#5f4b3b] mb-6 leading-tight font-ttsars">
              Criamos convites e toda a identidade visual do seu evento
            </h2>
            
            <div className="space-y-4 text-lg text-[#5f4b3b] leading-relaxed">
              <p>
                Casamento, bodas, aniversário ou evento especial. Pensamos em cada detalhe, 
                mas também no seu orçamento. A partir de uma conversa, já dá para saber 
                direitinho o que você quer: um convite personalizado e feito à mão ou um 
                convite lindo e por um preço acessível.
              </p>
              
              <p className="font-medium">
                Enquanto escolhe, já fique sabendo: tudo vai sair do jeito que você sempre sonhou.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link 
                href="/contato"
                className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform text-center"
              >
                Atendimento personalizado
              </Link>
              <Link 
                href="/convites"
                className="bg-transparent text-[#5f4b3b] border-2 border-[#5f4b3b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5f4b3b] hover:text-white transition-colors duration-300 hover:scale-105 transform text-center"
              >
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


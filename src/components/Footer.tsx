import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#fce6d4] text-[#5f4b3b] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <Image
              src="/images/bolacha-doce-logo.png"
              alt="Bolacha Doce - Convites personalizados em Belo Horizonte com aquarela digital"
              width={120}
              height={120}
              className="mx-auto md:mx-0 mb-4"
              quality={90}
            />
            <p className="text-sm font-medium">
              Criamos convites personalizados que fazem parte dos momentos mais especiais da sua vida.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p>📧 contato@bolachadoce.com.br</p>
              <p>📱 (31) 97175-0654</p>
              <p>📍 Belo Horizonte - MG</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com/bolachadoce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5f4b3b] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/bolachadoce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5f4b3b] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linha de separação */}
        <div className="border-t border-[#5f4b3b]/20 mt-8 pt-6">
          <div className="text-center text-sm">
            <p>&copy; 2024 Bolacha Doce. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com ❤️ para tornar seus momentos especiais únicos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


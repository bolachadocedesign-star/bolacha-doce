import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-beige-rose text-foreground py-6 sm:py-8 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div className="text-center md:text-left">
            <Link href="/">
            <Image
              src="/images/bolacha-doce-logo.png"
                alt="Bolacha Doce"
              width={120}
              height={120}
              className="mx-auto md:mx-0 mb-4"
            />
            </Link>
            <p className="text-sm font-medium">
              criando e imprimindo amor • desde 2012
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p>📧 contato@bolachadoce.com.br</p>
              <p>📱 (31) 97175-0654</p>
              <p>📍 Belo Horizonte - MG</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
            <div className="flex flex-col justify-center md:items-end items-center gap-3">
              <a 
                href="https://instagram.com/bolachadoce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Siga-nos no Instagram"
              >
                <Image
                  src="/icon/bolacha-doce-logo-Instagram.png"
                  alt="Instagram - Bolacha Doce"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </a>
              <div 
                className="transition-transform hover:scale-110 cursor-not-allowed opacity-60"
                title="Em breve"
                aria-label="Facebook - Em breve"
              >
                <Image
                  src="/icon/bolacha-doce-logo-Facebook.png"
                  alt="Facebook - Em breve"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="text-center text-sm">
            <p>&copy; 2024 Bolacha Doce. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

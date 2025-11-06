'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Pencil, MessageCircle, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages, getNextImages } from "@/data/galleryImages";

const Home = () => {
  const [currentImages, setCurrentImages] = useState<typeof galleryImages>([]);
  const [nextImages, setNextImages] = useState<typeof galleryImages>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Inicializar imagens
  useEffect(() => {
    if (galleryImages.length > 0) {
      const initial = getNextImages(0, 5);
      setCurrentImages(initial);
      const next = getNextImages(5, 5);
      setNextImages(next);
    }
  }, []);

  // Loop automático a cada 8 segundos
  useEffect(() => {
    if (currentImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Após a animação, trocar as imagens
      setTimeout(() => {
        const newIndex = (currentIndex + 5) % galleryImages.length;
        setCurrentIndex(newIndex);
        setCurrentImages(nextImages);
        setNextImages(getNextImages(newIndex + 5, 5));
        setIsTransitioning(false);
      }, 1500); // Duração da animação
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, [currentIndex, currentImages.length, nextImages]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex-1">
              <h1 className="font-serif text-9xl tracking-wider text-beige-rose leading-none">
                AM<br className="block mb-0.5" />OR<br />
                <span className="text-primary text-5xl block mb-1">+DESIGN</span>
              </h1>
            </div>
            
            <div className="flex-1 text-right space-y-4">
              <h2 className="font-serif text-2xl font-semibold tracking-wide text-foreground">
                AMOR É O CONVITE.
              </h2>
              <h3 className="font-serif text-xl tracking-wide text-foreground">
                E É NO CONVITE QUE TUDO COMEÇA.
              </h3>
              <p className="font-serif text-lg tracking-widest text-primary uppercase">
                Identidade visual e papelaria exclusivas.
              </p>
              <p className="text-sm tracking-widest text-muted-foreground uppercase">
                Criando e imprimindo amor desde 2012
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keywords Section */}
      <section className="py-8 px-6 bg-muted/30">
        <div className="container mx-auto">
          <p className="text-center text-xs tracking-[0.3em] text-muted-foreground uppercase">
            design • atendimento exclusivo • personalizado • qualidade premium • feito com amor
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((index) => {
              const currentImg = currentImages[index];
              const nextImg = nextImages[index];
              
              return (
                <div key={index} className="aspect-[4/5] rounded-lg relative overflow-hidden">
                  {currentImg ? (
                    <>
                      <Image
                        src={currentImg.src}
                        alt={currentImg.src}
                        fill
                        className={`object-cover absolute inset-0 transition-all ease-in-out ${
                          isTransitioning ? 'opacity-0 scale-110 blur-sm duration-1000' : 'opacity-100 scale-100 blur-0 duration-1000'
                        }`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {nextImg && isTransitioning && (
                        <Image
                          src={nextImg.src}
                          alt={nextImg.src}
                          fill
                          className="object-cover absolute inset-0 opacity-0 scale-90 blur-sm transition-all duration-1000 ease-in-out"
                          style={{ 
                            animation: isTransitioning ? 'fadeScale 2s ease-in-out forwards' : 'none'
                          }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          onLoad={(e) => {
                            // Força o fade in após carregar
                            const target = e.target as HTMLElement;
                            target.style.opacity = '1';
                            target.style.transform = 'scale(1)';
                            target.style.filter = 'blur(0)';
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-muted/50 animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[3, 4].map((index) => {
              const currentImg = currentImages[index];
              const nextImg = nextImages[index];
              
              return (
                <div key={index} className={`${index === 3 ? 'aspect-[16/10]' : 'aspect-[16/10]'} rounded-lg relative overflow-hidden`}>
                  {currentImg ? (
                    <>
                      <Image
                        src={currentImg.src}
                        alt={currentImg.src}
                        fill
                        className={`object-cover absolute inset-0 transition-all ease-in-out ${
                          isTransitioning ? 'opacity-0 scale-110 blur-sm duration-1000' : 'opacity-100 scale-100 blur-0 duration-1000'
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {nextImg && isTransitioning && (
                        <Image
                          src={nextImg.src}
                          alt={nextImg.src}
                          fill
                          className="object-cover absolute inset-0 opacity-0 scale-90 blur-sm transition-all duration-1000 ease-in-out"
                          style={{ 
                            animation: isTransitioning ? 'fadeScale 2s ease-in-out forwards' : 'none'
                          }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onLoad={(e) => {
                            // Força o fade in após carregar
                            const target = e.target as HTMLElement;
                            target.style.opacity = '1';
                            target.style.transform = 'scale(1)';
                            target.style.filter = 'blur(0)';
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-muted/50 animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/convites">
              <Button variant="outline" className="font-serif tracking-[0.2em] uppercase border-primary text-primary hover:bg-primary hover:text-white">
                +convites
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <Pencil className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-sm tracking-[0.2em] uppercase">Design<br/>Exclusivo</h3>
            </div>
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-sm tracking-[0.2em] uppercase">Atendimento<br/>Personalizado</h3>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-sm tracking-[0.2em] uppercase">Qualidade<br/>Premium</h3>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-sm tracking-[0.2em] uppercase">Feito com<br/>Amor</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-foreground">
                Ei Ju (e equipe da Bolacha)! Muito obrigada por tudo! Vocês foram incríveis! De todos os mínimos detalhes vocês cuidaram! Tudo impecável! Muito obrigada de coração! Desculpa por qualquer coisa, especialmente pelos atrasos, pela correria, enfim! Agradeço demais pela paciência também! MUITO sucesso pra vocês! Vocês merecem todo reconhecimento, de BH, do Brasil e do mundo!
              </p>
              <p className="font-serif text-sm font-semibold text-right text-primary">PRI E JEAN</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-foreground">
                Meninas, Estou mandando essa mensagem para agradecer o trabalho impecável de vcs! Não tinha visto a papelaria antes do casamento, mas fiquei encantada com a qualidade das impressões e ficou tudo do jeitinho que queria! Agradeço também toda a paciência ao longo do processo (que não foi pouca), mas ficou exatamente como sonhei!
              </p>
              <p className="font-serif text-sm font-semibold text-right text-primary">LUISA E MARCUS</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;

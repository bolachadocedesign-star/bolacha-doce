'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Pencil, MessageCircle, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { galleryImages, getNextImages } from "@/data/galleryImages";

const Home = () => {
  const [currentImages, setCurrentImages] = useState<typeof galleryImages>([]);
  const [nextImages, setNextImages] = useState<typeof galleryImages>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextImagesRef = useRef<typeof galleryImages>([]);

  // Inicializar imagens
  useEffect(() => {
    if (galleryImages.length > 0) {
      const initial = getNextImages(0, 5);
      setCurrentImages(initial);
      const next = getNextImages(5, 5);
      setNextImages(next);
      nextImagesRef.current = next;
    }
  }, []);

  // Atualizar ref quando nextImages mudar
  useEffect(() => {
    nextImagesRef.current = nextImages;
  }, [nextImages]);

  // Loop automático a cada 8 segundos
  useEffect(() => {
    if (currentImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Após a animação, trocar as imagens
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 5) % galleryImages.length;
          const newNextImages = getNextImages(newIndex + 5, 5);
          // Usar ref para acessar o valor atual sem causar re-renders
          setCurrentImages(nextImagesRef.current);
          setNextImages(newNextImages);
          setIsTransitioning(false);
          return newIndex;
        });
      }, 1500); // Duração da animação
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, [currentImages.length]); // Removido nextImages das dependências usando ref

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between max-w-5xl mx-auto gap-8 md:gap-0">
            <div className="flex-1 w-full md:w-auto text-center md:text-left">
              <div className="relative inline-block w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
                <Image
                  src="/images/amor+dsg-bolacha-doce.png"
                  alt="AMOR +DESIGN - Bolacha Doce"
                  width={700}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            
            <div className="flex-1 w-full md:w-auto text-center md:text-right space-y-3 sm:space-y-4">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-foreground">
                AMOR É O CONVITE.
              </h2>
              <h3 className="font-serif text-base sm:text-lg md:text-xl tracking-wide text-foreground">
                E É NO CONVITE QUE TUDO COMEÇA.
              </h3>
              <p className="font-serif text-sm sm:text-base md:text-lg tracking-widest text-primary uppercase">
                Identidade visual e papelaria exclusivas.
              </p>
              <p className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
                Criando e imprimindo amor desde 2012
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keywords Section */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto">
          <p className="text-center text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase">
            design • atendimento exclusivo • personalizado • qualidade premium • feito com amor
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={85}
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
                          loading="lazy"
                          quality={85}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                        loading="lazy"
                        quality={85}
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
                          loading="lazy"
                          quality={85}
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
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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

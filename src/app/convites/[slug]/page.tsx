'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getConviteDetail } from "@/data/convitesDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function ConviteDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [convite, setConvite] = useState(getConviteDetail(slug));

  useEffect(() => {
    if (slug) {
      const conviteData = getConviteDetail(slug);
      setConvite(conviteData);
    }
  }, [slug]);

  if (!convite) {
    return (
      <div className="min-h-screen bg-background font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Convite não encontrado</h1>
          <Link href="/convites">
            <Button variant="outline">Voltar para Convites</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const phoneNumber = "5531971750654";
    const message = `Olá! Gostaria de saber mais sobre o convite "${convite.nome}". Vi na galeria e fiquei interessado(a)!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Link 
            href="/convites"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif text-sm tracking-[0.2em] uppercase">Voltar</span>
          </Link>
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] uppercase mb-4">
              {convite.nome}
            </h1>
            <p className="text-sm sm:text-base tracking-[0.1em] uppercase opacity-90">
              {convite.tags}
            </p>
          </div>
        </div>
      </section>

          {/* Gallery Carousel */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {convite.fotos.length > 0 ? (
            <ImageCarousel 
              imagePaths={convite.fotos} 
              alt={convite.nome}
              className="mb-12"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Carregando imagens...</p>
            </div>
          )}

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-beige-rose/30 rounded-lg p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base leading-relaxed text-foreground text-center">
                {convite.descricao}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-primary/5 rounded-lg p-8 sm:p-10 md:p-12 max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase mb-4 text-foreground">
                Gostou do que viu?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto">
                Entre em contato conosco e vamos criar o convite dos seus sonhos!
              </p>
              <Button
                onClick={handleWhatsApp}
                className="font-serif tracking-[0.2em] uppercase px-8 sm:px-12 bg-primary hover:bg-terracota-dark text-white"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



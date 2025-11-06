'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Pencil, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/gifs/logo_bolacha_doce_optimized.gif"
                alt="Bolacha Doce - Criando e imprimindo amor desde 2012"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <Pencil className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Trabalhamos com um layout e ilustrações exclusivas e personalizadas para cada evento, criaremos tudo do zero seguindo os seus gostos!
                </p>
            </div>
            
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Com atendimento dedicado e individualizado, estaremos ao seu lado em cada etapa, desde o momento de escolher cada detalhe do convite dos seus sonhos até o dia do evento, garantindo que tudo seja perfeito e inesquecível.
                </p>
            </div>
            
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Conte conosco para tornar seu casamento um verdadeiro conto de fadas! Será um prazer participar desse momento tão feliz!
                </p>
              </div>
            </div>
          </div>
          
          {/* Julia Section */}
         {/*  <div className="bg-beige-rose py-20 -mx-6 px-6">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="w-64 h-64 rounded-full mx-auto mb-8 overflow-hidden relative">
                <Image
                  src="/images/Julia/bolacha-doce-julia.jpeg"
                  alt="Julia Horta - Criadora da Bolacha Doce"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2 className="font-serif text-2xl tracking-[0.3em] uppercase mb-6 text-foreground">
                Julia Horta
              </h2>
              
              <p className="text-sm leading-relaxed max-w-2xl mx-auto text-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              </p>
          </div>
          </div>*/}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sobre;

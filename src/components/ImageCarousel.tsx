'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
  imagePaths: string[];
  alt: string;
  className?: string;
}

// Componente de carrossel que mostra 3 imagens por vez com zoom no hover
export function ImageCarousel({ imagePaths, alt, className = '' }: ImageCarouselProps) {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    setValidImages(imagePaths);
    setFailedImages(new Set());
    setCurrentIndex(0); // Reset ao mudar as imagens
  }, [imagePaths]);

  // Fechar lightbox com ESC - deve estar antes de qualquer retorno condicional
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  const handleImageError = (path: string) => {
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(path);
      return newSet;
    });
    setValidImages(prev => prev.filter(img => img !== path));
  };

  // Filtra imagens válidas
  const imagesToRender = validImages.filter(path => !failedImages.has(path));

  // Calcula quantas imagens mostrar (máximo 3)
  const imagesPerView = 3;
  const totalSlides = imagesToRender.length > 0 ? Math.ceil(imagesToRender.length / imagesPerView) : 0;

  // Função para obter as imagens do slide atual
  const getCurrentSlideImages = () => {
    if (imagesToRender.length === 0) return [];
    const start = currentIndex * imagesPerView;
    return imagesToRender.slice(start, start + imagesPerView);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const openLightbox = (imagePath: string, index: number) => {
    setSelectedImage(imagePath);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNextLightbox = () => {
    if (imagesToRender.length === 0) return;
    const nextIndex = (lightboxIndex + 1) % imagesToRender.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(imagesToRender[nextIndex]);
  };

  const goToPreviousLightbox = () => {
    if (imagesToRender.length === 0) return;
    const prevIndex = (lightboxIndex - 1 + imagesToRender.length) % imagesToRender.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(imagesToRender[prevIndex]);
  };

  // Retorno condicional deve estar DEPOIS de todos os hooks
  if (imagesToRender.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nenhuma imagem encontrada</p>
      </div>
    );
  }

  const currentImages = getCurrentSlideImages();

  return (
    <div className={`relative ${className}`}>
      {/* Carrossel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentImages.map((path, index) => {
            const globalIndex = currentIndex * imagesPerView + index;
            return (
              <div
                key={`${path}-${currentIndex}-${index}`}
                className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted/30 group cursor-pointer transition-all duration-300"
                onClick={() => openLightbox(path, globalIndex)}
              >
                <Image
                  src={path}
                  alt={`${alt} - Foto ${globalIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                  onError={() => handleImageError(path)}
                />
                {/* Overlay sutil no hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Ícone de lupa no canto esquerdo */}
                <div className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border border-border/50">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Preencher espaços vazios se houver menos de 3 imagens */}
          {currentImages.length < imagesPerView && 
            Array.from({ length: imagesPerView - currentImages.length }).map((_, index) => (
              <div key={`empty-${index}`} className="hidden lg:block" />
            ))
          }
        </div>
      </div>

      {/* Navegação - Setas */}
      {imagesToRender.length > imagesPerView && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 bg-background/90 hover:bg-background shadow-lg z-10 rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-border/50 hover:border-primary transition-all"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 bg-background/90 hover:bg-background shadow-lg z-10 rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-border/50 hover:border-primary transition-all"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </Button>
        </>
      )}

      {/* Indicadores de slide (dots) */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imagens */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          {currentIndex * imagesPerView + 1} - {Math.min((currentIndex + 1) * imagesPerView, imagesToRender.length)} de {imagesToRender.length}
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Botão Fechar */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-background/20 hover:bg-background/40 text-white border border-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 z-10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Navegação Lightbox */}
          {imagesToRender.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPreviousLightbox();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white border border-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextLightbox();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white border border-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </>
          )}

          {/* Imagem no Lightbox com Zoom Interativo */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setZoomPosition({ x, y });
              setIsZooming(true);
            }}
            onMouseLeave={() => setIsZooming(false)}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] overflow-hidden cursor-zoom-in">
              <Image
                src={selectedImage}
                alt={`${alt} - Foto ${lightboxIndex + 1}`}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isZooming ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
                sizes="90vw"
                quality={90}
                priority
              />
              {/* Indicador de zoom (lupa) quando está zoomando */}
              {isZooming && (
                <div 
                  className="absolute pointer-events-none z-10"
                  style={{
                    left: `${zoomPosition.x}%`,
                    top: `${zoomPosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border border-white/20">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contador no Lightbox */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-background/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm sm:text-base">
            {lightboxIndex + 1} / {imagesToRender.length}
          </div>
        </div>
      )}
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  imagePaths: string[];
  alt: string;
  className?: string;
}

// Componente que filtra imagens que realmente existem
export function ImageGallery({ imagePaths, alt, className = '' }: ImageGalleryProps) {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Inicialmente assume que todas as imagens são válidas
    // O componente Image do Next.js vai lidar com erros de carregamento
    setValidImages(imagePaths);
    setFailedImages(new Set()); // Reset failed images quando paths mudam
  }, [imagePaths]);

  const handleImageError = (path: string) => {
    // Adiciona à lista de imagens que falharam
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(path);
      return newSet;
    });
    // Remove da lista de imagens válidas
    setValidImages(prev => prev.filter(img => img !== path));
  };

  if (validImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nenhuma imagem encontrada</p>
      </div>
    );
  }

  // Filtra imagens que já falharam antes de renderizar
  const imagesToRender = validImages.filter(path => !failedImages.has(path));

  if (imagesToRender.length === 0 && validImages.length > 0) {
    // Se todas as imagens falharam, mostra mensagem
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Carregando imagens...</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {imagesToRender.map((path, index) => (
        <div 
          key={`${path}-${index}`} 
          className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted/30"
        >
          <Image
            src={path}
            alt={`${alt} - Foto ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
            onError={() => handleImageError(path)}
          />
        </div>
      ))}
    </div>
  );
}


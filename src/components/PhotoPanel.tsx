'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { convitesList } from '@/data';

export default function PhotoPanel() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [nextImages, setNextImages] = useState<string[]>([]);
  const [featureImage, setFeatureImage] = useState<string>('');
  const [nextFeatureImage, setNextFeatureImage] = useState<string>('');
  const [isChanging, setIsChanging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Função para obter 8 imagens aleatórias dos convites (7 para o grid + 1 para o feature)
  const getRandomImages = useCallback(() => {
    const allImages: string[] = [];
    convitesList.forEach(convite => {
      convite.images.forEach(image => {
        allImages.push(image);
      });
    });
    
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }, []);
  
  // Inicializa as imagens
  useEffect(() => {
    // Pequeno delay para melhorar a percepção de carregamento
    const timer = setTimeout(() => {
      const randomImages = getRandomImages();
      if (randomImages.length > 0) {
        setFeatureImage(randomImages[0]);
        setImages(randomImages.slice(1, 8));
      }
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [getRandomImages]);
  
  // Configura o intervalo para trocar as imagens
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      const randomImages = getRandomImages();
      if (randomImages.length > 0) {
        setNextFeatureImage(randomImages[0]);
        setNextImages(randomImages.slice(1, 8));
        
        setIsChanging(true);
        
        // Transição mais rápida e suave
        setTimeout(() => {
          setFeatureImage(randomImages[0]);
          setImages(randomImages.slice(1, 8));
          setIsChanging(false);
        }, 1000); // Reduzido de 2000ms para 1000ms
      }
    }, 8000); // Aumentado de 6000ms para 8000ms para dar mais tempo para apreciar
    
    return () => clearInterval(interval);
  }, [getRandomImages, isLoading]);
  
  const handleRedirect = () => {
    router.push('/convites');
  };
  
  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-96">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f4b3b]"></div>
              <div className="text-[#5f4b3b] text-lg font-medium">Carregando galeria...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Quadrado maior à esquerda com imagem dinâmica */}
          <div className="lg:col-span-1">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              {/* Imagem atual */}
              {featureImage && featureImage.trim() !== '' && (
                <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <Image
                    src={featureImage}
                    alt="Convite personalizado em destaque - Bolacha Doce BH"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              )}
              
              {/* Próxima imagem */}
              {nextFeatureImage && (
                <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isChanging ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}>
                  <Image
                    src={nextFeatureImage}
                    alt="Próximo convite personalizado em destaque - Bolacha Doce BH"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Grid de imagens à direita */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={`current-${index}`} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                {/* Imagem atual */}
                {image && image.trim() !== '' && (
                  <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    <Image
                      src={image}
                      alt={`Convite personalizado ${index + 1} - Bolacha Doce BH`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}
                
                {/* Próxima imagem */}
                {nextImages[index] && nextImages[index].trim() !== '' && (
                  <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isChanging ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}>
                    <Image
                      src={nextImages[index]}
                      alt={`Próximo convite personalizado ${index + 1} - Bolacha Doce BH`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Botão centralizado abaixo */}
        <div className="text-center">
          <button 
            onClick={handleRedirect}
            className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform"
          >
            Veja Todos os Convites
          </button>
        </div>
      </div>
    </section>
  );
}


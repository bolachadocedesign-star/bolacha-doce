'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  convitesList, 
  getDistinctPrincipais, 
  getDistinctSecundarias, 
  getDistinctAcabamentos 
} from '@/data';

export default function ConvitesClient() {
  const router = useRouter();
  const [principalFilter, setPrincipalFilter] = useState('Todos');
  const [secundariaFilter, setSecundariaFilter] = useState('Todos');
  const [acabamentoFilter, setAcabamentoFilter] = useState('Todos');
  const [tiposPrincipais, setTiposPrincipais] = useState<string[]>([]);
  const [tiposSecundarios, setTiposSecundarios] = useState<string[]>([]);
  const [tiposAcabamentos, setTiposAcabamentos] = useState<string[]>([]);
  
  // Estados para carregamento progressivo
  const [visibleConvites, setVisibleConvites] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  // Função para carregar os filtros dinamicamente
  useEffect(() => {
    setTiposPrincipais(getDistinctPrincipais());
    setTiposSecundarios(getDistinctSecundarias());
    setTiposAcabamentos(getDistinctAcabamentos());
  }, []);

  // Função para carregar mais convites
  const loadMoreConvites = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simula um pequeno delay para suavizar o carregamento
    setTimeout(() => {
      setVisibleConvites(prev => {
        const filtered = convitesList.filter(convite =>
          (convite.principal === principalFilter || principalFilter === 'Todos') &&
          (convite.secundaria === secundariaFilter || secundariaFilter === 'Todos') &&
          (convite.acabamento === acabamentoFilter || acabamentoFilter === 'Todos')
        );
        const newCount = prev + 5;
        const hasMoreItems = newCount < filtered.length;
        setHasMore(hasMoreItems);
        setIsLoading(false);
        return Math.min(newCount, filtered.length);
      });
    }, 300);
  }, [isLoading, principalFilter, secundariaFilter, acabamentoFilter]);

  // Intersection Observer para detectar quando chegar ao final
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreConvites();
        }
      },
      { threshold: 0.1 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [loadMoreConvites, hasMore, isLoading]);

  // Reset do carregamento quando os filtros mudarem
  useEffect(() => {
    setVisibleConvites(5);
    setHasMore(true);
    setIsLoading(false);
  }, [principalFilter, secundariaFilter, acabamentoFilter]);

  const handlePrincipalChange = (filter: string) => {
    setPrincipalFilter(filter);
  };

  const handleSecundariaChange = (filter: string) => {
    setSecundariaFilter(filter);
  };

  const handleAcabamentoChange = (filter: string) => {
    setAcabamentoFilter(filter);
  };

  // Função para navegar para a página de detalhes
  const handleVerDetalhes = (clientName: string) => {
    router.push(`/convites/${encodeURIComponent(clientName)}`);
  };

  const filteredConvites = () => {
    return convitesList.filter(convite =>
      (convite.principal === principalFilter || principalFilter === 'Todos') &&
      (convite.secundaria === secundariaFilter || secundariaFilter === 'Todos') &&
      (convite.acabamento === acabamentoFilter || acabamentoFilter === 'Todos')
    );
  };

  const visibleConvitesList = () => {
    const filtered = filteredConvites();
    return filtered.slice(0, visibleConvites);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#5f4b3b] mb-6">
              Portfólio de Convites Personalizados - Bolacha Doce BH
            </h1>
            <p className="text-lg text-[#5f4b3b] max-w-3xl mx-auto leading-relaxed">
              Explore os convites que já criamos para nossos clientes. Cada um é único e personalizado,
              refletindo as características especiais de cada ocasião.
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-[#fce6d4] p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                  Tipos
                </label>
                <select 
                  className="w-full p-3 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                  value={principalFilter}
                  onChange={(e) => handlePrincipalChange(e.target.value)}
                >
                  <option value="Todos">Todos os tipos</option>
                  {tiposPrincipais.map((tipo) => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                  Estilos
                </label>
                <select 
                  className="w-full p-3 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                  value={secundariaFilter}
                  onChange={(e) => handleSecundariaChange(e.target.value)}
                >
                  <option value="Todos">Todos os estilos</option>
                  {tiposSecundarios.map((tipo) => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                  Acabamentos
                </label>
                <select 
                  className="w-full p-3 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                  value={acabamentoFilter}
                  onChange={(e) => handleAcabamentoChange(e.target.value)}
                >
                  <option value="Todos">Todos os acabamentos</option>
                  {tiposAcabamentos.map((tipo) => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Lista de Convites */}
          <div className="space-y-16">
            {visibleConvitesList().length > 0 ? (
              <>
                {visibleConvitesList().map((convite, index) => (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Imagens */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="grid grid-cols-3 gap-4">
                        {convite.images.slice(0, 3).map((image, i) => (
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                            <Image
                              src={image}
                              alt={`Convite ${convite.principal} ${convite.secundaria} com acabamento ${convite.acabamento} - ${convite.name} - Bolacha Doce BH`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              quality={85}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Informações */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-[#5f4b3b]">
                          {convite.name}
                        </h3>
                        
                        <p className="text-lg text-[#5f4b3b] leading-relaxed">
                          {convite.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-[#fce6d4] text-[#5f4b3b] px-4 py-2 rounded-full text-sm font-semibold">
                            {convite.principal}
                          </span>
                          <span className="bg-[#5f4b3b] text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {convite.secundaria}
                          </span>
                          <span className="bg-[#fce6d4] text-[#5f4b3b] px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#5f4b3b]">
                            {convite.acabamento}
                          </span>
                        </div>
                        
                        <button 
                          onClick={() => handleVerDetalhes(convite.name)}
                          className="bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform"
                        >
                          Saiba Mais
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Indicador de carregamento */}
                {isLoading && (
                  <div className="flex justify-center py-8">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5f4b3b]"></div>
                      <span className="text-[#5f4b3b] font-semibold">Carregando mais convites...</span>
                    </div>
                  </div>
                )}

                {/* Elemento para detectar quando chegar ao final */}
                <div ref={observerRef} className="h-4"></div>

                {/* Mensagem quando não há mais convites */}
                {!hasMore && filteredConvites().length > 5 && (
                  <div className="text-center py-8">
                    <p className="text-lg text-[#5f4b3b] font-semibold">
                      Todos os convites foram carregados! 🎉
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-[#5f4b3b]">
                  Nenhum convite encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

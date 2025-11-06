// Dados detalhados de cada convite para a página individual
// Cada convite tem: nome, descrição, todas as fotos da pasta, pasta e tags

export interface ConviteDetail {
  id: string;
  nome: string;
  folder: string; // Nome da pasta em fotosconvites
  descricao: string;
  fotos: string[]; // Array com TODAS as fotos da pasta
  tags: string;
}

// Função para obter TODAS as imagens de uma pasta específica
import { galleryImages } from './galleryImages';
import type { ConviteItem } from './convitesList';
import { convitesList } from './convitesList';

export function getAllFotosFromFolder(folder: string): string[] {
  // Primeiro tenta buscar no galleryImages
  const fotosDoGallery = galleryImages
    .filter(img => img.folder === folder)
    .map(img => img.src)
    .sort();
  
  if (fotosDoGallery.length > 0) {
    return fotosDoGallery;
  }
  
  // Se não encontrar, tenta gerar baseado na convitesList
  const convite = convitesList.find((c: ConviteItem) => {
    const imagePath = c.image;
    const folderMatch = imagePath.match(/\/fotosconvites\/([^\/]+)\//);
    return folderMatch && folderMatch[1] === folder;
  });
  
  if (convite) {
    const imagePath = convite.image;
    const fileName = imagePath.split('/').pop()?.replace('.jpg', '') || '';
    const baseName = fileName.replace(/\d+$/, '');
    
    // Limita a geração a um número mais razoável (máximo 5)
    // Isso evita muitos 404s desnecessários
    const maxImages = 5;
    
    // Se o arquivo não tem número, o baseName é o próprio nome
    if (fileName === baseName && !fileName.match(/\d+$/)) {
      // Tenta padrão: BaseName.jpg, BaseName1.jpg, BaseName2.jpg...
      const fotos: string[] = [`/fotosconvites/${folder}/${fileName}.jpg`];
      for (let i = 1; i <= maxImages; i++) {
        fotos.push(`/fotosconvites/${folder}/${baseName}${i}.jpg`);
      }
      return fotos;
    } else {
      // Padrão normal: BaseName1.jpg, BaseName2.jpg...
      // Começa do número que está no arquivo original
      const match = fileName.match(/(\d+)$/);
      const startNum = match ? parseInt(match[1], 10) : 1;
      const fotos: string[] = [];
      
      // Gera apenas algumas imagens a partir do número encontrado
      // Limita a 5 imagens para evitar muitos 404s
      const limit = 5;
      for (let i = startNum; i < startNum + limit; i++) {
        fotos.push(`/fotosconvites/${folder}/${baseName}${i}.jpg`);
      }
      return fotos;
    }
  }
  
  return [];
}

// Função auxiliar para gerar caminhos das fotos baseado no padrão (mantida para compatibilidade)
// Agora usamos getAllFotosFromFolder que busca todas as imagens reais da pasta
function getFotosFromFolder(folder: string, baseName: string, count?: number): string[] {
  // Busca todas as imagens da pasta primeiro
  const todasFotos = getAllFotosFromFolder(folder);
  
  // Se encontrar no galleryImages, retorna
  if (todasFotos.length > 0) {
    return todasFotos;
  }
  
  // Se não encontrar no galleryImages, tenta gerar pelo padrão (fallback)
  // Limita a um número mais razoável para evitar muitos 404s
  const fotos: string[] = [];
  const maxCount = count || 5; // Reduzido para 5 para evitar muitos 404s
  
  // Padrão 1: BaseName1.jpg, BaseName2.jpg, etc.
  for (let i = 1; i <= maxCount; i++) {
    fotos.push(`/fotosconvites/${folder}/${baseName}${i}.jpg`);
  }
  
  // Padrão 2: BaseName.jpg, BaseName1.jpg, BaseName2.jpg, etc. (se baseName não terminar com número)
  if (!baseName.match(/\d+$/)) {
    fotos.unshift(`/fotosconvites/${folder}/${baseName}.jpg`); // Adiciona no início
  }
  
  return fotos;
}

export const convitesDetails: ConviteDetail[] = [
  {
    id: "aida-daniel",
    nome: "Aída e Daniel",
    folder: "Aída e Daniel",
    descricao: "Convite personalizado com design exclusivo criado especialmente para Aída e Daniel. Uma peça única que reflete a personalidade do casal com acabamentos especiais e atenção aos mínimos detalhes.",
    fotos: getAllFotosFromFolder("Aída e Daniel"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "alice-victor",
    nome: "Alice e Victor",
    folder: "Alice e Victor",
    descricao: "Criação exclusiva para Alice e Victor, combinando elegância e sofisticação. Cada detalhe foi pensado para tornar este momento ainda mais especial e memorável.",
    fotos: getAllFotosFromFolder("Alice e Victor"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-carolina",
    nome: "Ana Carolina",
    folder: "Ana Carolina",
    descricao: "Convite único desenvolvido para Ana Carolina, com design personalizado que captura a essência deste momento especial. Qualidade premium em cada detalhe.",
    fotos: getAllFotosFromFolder("Ana Carolina"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-carolina-filipi",
    nome: "Ana Carolina e Filipi",
    folder: "Ana Carolina e Filipi",
    descricao: "Peça exclusiva criada para Ana Carolina e Filipi, refletindo o amor e a personalidade do casal através de um design único e acabamentos especiais.",
    fotos: getAllFotosFromFolder("Ana Carolina e Filipi"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-luisa-samuel",
    nome: "Ana Luisa e Samuel",
    folder: "Ana Luisa e Samuel",
    descricao: "Convite personalizado para Ana Luisa e Samuel, desenvolvido com carinho e atenção aos detalhes. Uma criação única que marca o início desta nova jornada.",
    fotos: getAllFotosFromFolder("Ana Luisa e Samuel"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-luiza-fernando",
    nome: "Ana Luiza e Fernando",
    folder: "Ana Luiza e Fernando",
    descricao: "Design exclusivo criado para Ana Luiza e Fernando, combinando sofisticação e elegância. Cada elemento foi pensado para tornar este momento inesquecível.",
    fotos: getAllFotosFromFolder("Ana Luiza e Fernando"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "andressa-caio",
    nome: "Andressa e Caio",
    folder: "Andressa e Caio",
    descricao: "Convite personalizado para Andressa e Caio, desenvolvido com muito amor e dedicação. Uma peça única que reflete a personalidade do casal.",
    fotos: getAllFotosFromFolder("Andressa e Caio"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "anna-bruno",
    nome: "Anna e Bruno",
    folder: "Anna e Bruno",
    descricao: "Criação exclusiva para Anna e Bruno, com design personalizado e acabamentos especiais. Cada detalhe foi pensado para tornar este momento ainda mais especial.",
    fotos: getAllFotosFromFolder("Anna e Bruno"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "arthur-rafael",
    nome: "Arthur e Rafael",
    folder: "Arthur e Rafael",
    descricao: "Convite único desenvolvido para Arthur e Rafael, combinando elegância e modernidade. Uma peça exclusiva que marca o início desta nova jornada.",
    fotos: getAllFotosFromFolder("Arthur e Rafael"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "betania",
    nome: "Betania",
    folder: "Betania",
    descricao: "Design personalizado criado especialmente para Betania, com atenção aos mínimos detalhes. Qualidade premium em cada elemento desta criação única.",
    fotos: getAllFotosFromFolder("Betania"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "bruna-vinicius",
    nome: "Bruna e Vinicius",
    folder: "Bruna e Vinicius",
    descricao: "Convite exclusivo para Bruna e Vinicius, desenvolvido com muito carinho. Uma criação única que reflete o amor e a personalidade do casal.",
    fotos: getAllFotosFromFolder("Bruna e Vinicius"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  // Adicionando mais alguns exemplos - você pode expandir depois
  {
    id: "camila-hebert",
    nome: "Camila e Hebert",
    folder: "Camila e Hebert",
    descricao: "Peça exclusiva criada para Camila e Hebert, combinando sofisticação e elegância. Cada detalhe foi pensado para tornar este momento inesquecível.",
    fotos: getAllFotosFromFolder("Camila e Hebert"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "clara-lucas",
    nome: "Clara e Lucas",
    folder: "Clara e Lucas",
    descricao: "Convite personalizado para Clara e Lucas, desenvolvido com muito amor e dedicação. Uma criação única que marca o início desta nova jornada.",
    fotos: getAllFotosFromFolder("Clara e Lucas"),
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
];

// Função helper para gerar detalhes automaticamente a partir de um nome e pasta
// Útil para expandir a lista rapidamente
// Agora busca TODAS as fotos da pasta automaticamente
export function generateConviteDetail(
  id: string,
  nome: string,
  folder: string,
  baseName?: string, // Opcional agora, pois vamos buscar todas as fotos
  tags: string = "Moderno | Lacre de Cera | Verde | Aquarela"
): ConviteDetail {
  // Tenta buscar todas as fotos da pasta primeiro
  let fotos = getAllFotosFromFolder(folder);
  
  // Se não encontrar, usa o fallback com baseName
  if (fotos.length === 0 && baseName) {
    fotos = getFotosFromFolder(folder, baseName);
  }
  
  return {
    id,
    nome,
    folder,
    descricao: `Convite personalizado exclusivo para ${nome}, desenvolvido com muito amor e atenção aos detalhes. Uma criação única que reflete a personalidade e o estilo do casal, com acabamentos especiais e qualidade premium em cada elemento.`,
    fotos,
    tags
  };
}

// Função para buscar detalhes de um convite pelo ID
// Se não encontrar nos detalhes manuais, tenta gerar automaticamente da lista básica
export function getConviteDetail(id: string): ConviteDetail | undefined {
  // Primeiro tenta encontrar nos detalhes manuais
  const detail = convitesDetails.find(convite => convite.id === id);
  if (detail) return detail;
  
  // Se não encontrar, tenta gerar automaticamente da lista básica
  const basic = convitesList.find((convite: ConviteItem) => convite.id === id);
  
  if (basic) {
    // Extrai o nome da pasta do caminho da imagem
    const imagePath = basic.image;
    const folderMatch = imagePath.match(/\/fotosconvites\/([^\/]+)\//);
    
    if (folderMatch) {
      const folder = folderMatch[1];
      // Busca todas as fotos da pasta
      const fotos = getAllFotosFromFolder(folder);
      
      // Se não encontrar fotos, tenta extrair baseName do arquivo e gerar lista
      if (fotos.length === 0) {
        const fileName = imagePath.split('/').pop()?.replace('.jpg', '') || '';
        // Tenta diferentes padrões de baseName
        const baseName = fileName.replace(/\d+$/, ''); // Remove números do final
        
        const fotosFallback = getFotosFromFolder(folder, baseName);
        return {
          id,
          nome: basic.nome,
          folder,
          descricao: `Convite personalizado exclusivo para ${basic.nome}, desenvolvido com muito amor e atenção aos detalhes. Uma criação única que reflete a personalidade e o estilo do casal, com acabamentos especiais e qualidade premium em cada elemento.`,
          fotos: fotosFallback,
          tags: basic.tags
        };
      }
      
      return {
        id,
        nome: basic.nome,
        folder,
        descricao: `Convite personalizado exclusivo para ${basic.nome}, desenvolvido com muito amor e atenção aos detalhes. Uma criação única que reflete a personalidade e o estilo do casal, com acabamentos especiais e qualidade premium em cada elemento.`,
        fotos,
        tags: basic.tags
      };
    }
  }
  
  return undefined;
}

// Função para obter todos os IDs (útil para geração estática)
export function getAllConviteIds(): string[] {
  return convitesDetails.map(convite => convite.id);
}

// Função para obter todos os detalhes (útil para expansão futura)
export function getAllConviteDetails(): ConviteDetail[] {
  return convitesDetails;
}


// Dados para os filtros da página de convites
// Opções disponíveis para Estilos, Acabamentos e Cores

export interface FilterOption {
  id: string;
  label: string;
}

export const estilosOptions: FilterOption[] = [
  { id: "moderno", label: "Moderno" },
  { id: "aquarela", label: "Aquarela" },
  { id: "classico", label: "Clássico" },
  { id: "romantico", label: "Romântico" },
  { id: "minimalista", label: "Minimalista" },
  { id: "rustico", label: "Rústico" },
  { id: "vintage", label: "Vintage" },
];

export const acabamentosOptions: FilterOption[] = [
  { id: "lacre-cera", label: "Lacre de Cera" },
  { id: "fita-seda", label: "Fita de Seda" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz Localizado" },
  { id: "corte-laser", label: "Corte a Laser" },
  { id: "hot-stamp", label: "Hot Stamp" },
];

export const coresOptions: FilterOption[] = [
  { id: "verde", label: "Verde" },
  { id: "rosa", label: "Rosa" },
  { id: "azul", label: "Azul" },
  { id: "dourado", label: "Dourado" },
  { id: "branco", label: "Branco" },
  { id: "bege", label: "Bege" },
  { id: "preto", label: "Preto" },
  { id: "todas", label: "Todas as Cores" },
];

// Função para extrair tags de uma string de tags
export function parseTags(tagsString: string): {
  estilos: string[];
  acabamentos: string[];
  cores: string[];
} {
  const tags = tagsString.split('|').map(tag => tag.trim().toLowerCase());
  
  const estilos: string[] = [];
  const acabamentos: string[] = [];
  const cores: string[] = [];
  
  // Mapeamento de tags para categorias
  const estiloMap: { [key: string]: string } = {
    'moderno': 'moderno',
    'aquarela': 'aquarela',
    'clássico': 'classico',
    'classico': 'classico',
    'romântico': 'romantico',
    'romantico': 'romantico',
    'minimalista': 'minimalista',
    'rústico': 'rustico',
    'rustico': 'rustico',
    'vintage': 'vintage',
  };
  
  const acabamentoMap: { [key: string]: string } = {
    'lacre de cera': 'lacre-cera',
    'lacre': 'lacre-cera',
    'fita de seda': 'fita-seda',
    'fita seda': 'fita-seda',
    'relevo': 'relevo',
    'verniz localizado': 'verniz-localizado',
    'verniz': 'verniz-localizado',
    'corte a laser': 'corte-laser',
    'corte laser': 'corte-laser',
    'hot stamp': 'hot-stamp',
    'hotstamp': 'hot-stamp',
  };
  
  const corMap: { [key: string]: string } = {
    'verde': 'verde',
    'rosa': 'rosa',
    'azul': 'azul',
    'dourado': 'dourado',
    'douro': 'dourado',
    'branco': 'branco',
    'bege': 'bege',
    'preto': 'preto',
  };
  
  tags.forEach(tag => {
    if (estiloMap[tag]) {
      estilos.push(estiloMap[tag]);
    }
    if (acabamentoMap[tag]) {
      acabamentos.push(acabamentoMap[tag]);
    }
    if (corMap[tag]) {
      cores.push(corMap[tag]);
    }
  });
  
  return { estilos, acabamentos, cores };
}

// Função para verificar se um convite corresponde aos filtros
export function matchesFilters(
  tagsString: string,
  selectedEstilo?: string,
  selectedAcabamento?: string,
  selectedCor?: string
): boolean {
  if (!selectedEstilo && !selectedAcabamento && !selectedCor) {
    return true; // Sem filtros, mostra todos
  }
  
  const { estilos, acabamentos, cores } = parseTags(tagsString);
  
  // Verifica estilo
  if (selectedEstilo && !estilos.includes(selectedEstilo)) {
    return false;
  }
  
  // Verifica acabamento
  if (selectedAcabamento && !acabamentos.includes(selectedAcabamento)) {
    return false;
  }
  
  // Verifica cor (exceto "todas")
  if (selectedCor && selectedCor !== 'todas' && !cores.includes(selectedCor)) {
    return false;
  }
  
  return true;
}


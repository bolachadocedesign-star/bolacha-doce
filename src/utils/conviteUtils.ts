import { ConviteData } from '../types/conviteTypes';
import { convitesList } from '../data/convitesData';

// Função auxiliar para encontrar um convite pelo nome
export const findConviteByName = (name: string): ConviteData | undefined => {
  if (!name) return undefined;
  
  const decodedName = decodeURIComponent(name);
  return convitesList.find((convite) => 
    convite.name.toLowerCase() === decodedName.toLowerCase()
  );
};

// Função para obter tipos principais distintos de convites
export const getDistinctPrincipais = (): string[] => {
  const principaisList = convitesList.map(convite => convite.principal);
  return [...new Set(principaisList)];
};

// Função para obter estilos secundários distintos
export const getDistinctSecundarias = (): string[] => {
  const secundariasList = convitesList.map(convite => convite.secundaria);
  return [...new Set(secundariasList)];
};

// Função para obter acabamentos distintos
export const getDistinctAcabamentos = (): string[] => {
  const acabamentosList = convitesList.map(convite => convite.acabamento);
  return [...new Set(acabamentosList)];
}; 
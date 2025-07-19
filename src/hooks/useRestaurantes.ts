// src/hooks/useRestaurantes.ts
import { useState, useEffect, type ReactNode } from 'react';

// Adicione a tipagem do Produto se ainda não existir
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
};

type RestauranteType = {
  capa: string | undefined;
  tipo: ReactNode;
  id: number;
  nome: string;
  pratos: Produto[]; // Agora usando a tipagem Produto
};

export const useRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Adicione tratamento de erro

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        if (!response.ok) throw new Error('Erro ao carregar dados');
        const data = await response.json();
        setRestaurantes(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { restaurantes, loading, error }; // Retorne também o erro
};
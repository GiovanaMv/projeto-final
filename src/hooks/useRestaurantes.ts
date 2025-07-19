import { useState, useEffect } from 'react';

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  /* outros campos da API */
}

export function useRestaurantes() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar');
        return res.json();
      })
      .then(data => {
        setProdutos(data.flatMap(r => r.pratos)); // assumindo propriedade "pratos"
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { produtos, loading, error };
}

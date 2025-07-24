/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';

type Props = {
  dadosEntrega: {
    nome: string;
    endereco: string;
    cidade: string;
    cep: string;
    numero: string;
    complemento?: string;
  };
};

const Payment = ({ dadosEntrega }: Props) => {
  const { cartItems } = useCart();

  const [pagamento, setPagamento] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPagamento({ ...pagamento, [name]: value });
  };

  const finalizarPagamento = async () => {
    const body = {
      ...dadosEntrega,
      numero: parseInt(dadosEntrega.numero),
      cep: parseInt(dadosEntrega.cep.replace('-', '')),
      produtos: cartItems.map((item: any) => ({
        id: item.id,
        preco: item.preco
      }))
    };

    try {
      const resposta = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const resultado = await resposta.json();
      console.log('Resposta da API:', resultado);
      alert('Pedido finalizado com sucesso!');
    } catch (erro) {
      console.error('Erro ao finalizar:', erro);
      alert('Erro ao finalizar o pagamento.');
    }
  };

  return (
    <div style={{ background: '#f55', padding: 20 }}>
      <h2>Pagamento</h2>
      <input name="nomeCartao" placeholder="Nome no cartão" value={pagamento.nomeCartao} onChange={handleChange} />
      <input name="numeroCartao" placeholder="Número do cartão" value={pagamento.numeroCartao} onChange={handleChange} />
      <input name="cvv" placeholder="CVV" value={pagamento.cvv} onChange={handleChange} />
      <input name="mes" placeholder="Mês de vencimento" value={pagamento.mes} onChange={handleChange} />
      <input name="ano" placeholder="Ano de vencimento" value={pagamento.ano} onChange={handleChange} />

      <button onClick={finalizarPagamento}>Finalizar pagamento</button>
    </div>
  );
};

export default Payment;
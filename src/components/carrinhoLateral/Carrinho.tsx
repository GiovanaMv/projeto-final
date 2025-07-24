/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { CarrinhoWrapper, Produto, ProdutoInfo, ProdutoImg, Footer } from './styled';
import { DivEntrega, LabelReceber, LabelEndereco, LabelNumber, LabelCidade, LabelCEP, LabelComplemento, ContinuarPagamento, VoltarCarrinho } from './styled';
import { DivPagamento, LabelCartao, LabelNumberCart, LabelCVV, LabelMes, LabelAno, Finalizar, VoltarEndereco } from './styled';

import PratoPizza from '../../assets/imagens/prato3-pizza.png';
import Mensagem from './confirmacao/Mensagem';

type Props = {
  aberto: boolean;
  onClose: () => void;
};

type DeliveryData = {
  nome: string;
  endereco: string;
  cidade: string;
  cep: string;
  numero: string;
  complemento?: string;
};

type PaymentData = {
  nomeCartao: string;
  numeroCartao: string;
  cvv: string;
  mes: string;
  ano: string;
};

type Etapa = 'carrinho' | 'entrega' | 'pagamento' | 'confirmacao' | '../../pages/pratos/Pratos.tsx';

export const CarrinhoLateral = ({ aberto }: Props) => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((acc: any, item: { preco: number }) => acc + item.preco, 0);

  const [etapa, setEtapa] = useState<Etapa>('carrinho');

  const [delivery, setDelivery] = useState<DeliveryData>({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  });

  const [payment, setPayment] = useState<PaymentData>({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: ''
  });

  const [confirmacao, setConfirmacao] = useState<any>(null);

  const handleSubmitCheckout = async () => {
    const body = {
      ...delivery,
      numero: parseInt(delivery.numero),
      cep: parseInt(delivery.cep.replace('-', '')),
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

      setConfirmacao({
  orderId: resultado.orderId,
  nome: delivery.nome,
  endereco: delivery.endereco + ', ' + delivery.numero + (delivery.complemento ? ' - ' + delivery.complemento : ''),
  total
});

      setEtapa('confirmacao');
    } catch (erro) {
      console.error('Erro ao finalizar:', erro);
      alert('Erro ao finalizar o pagamento.');
    }
  };

  return (
    <CarrinhoWrapper $aberto={aberto}>
      {etapa === 'carrinho' && (
        <>
          {cartItems.map((item, index) => (
            <Produto key={index}>
              <ProdutoImg src={PratoPizza} alt="Imagem" />
              <ProdutoInfo>
                <h4>{item.nome}</h4>
                <p>R$ {item.preco.toFixed(2)}</p>
              </ProdutoInfo>
              <button onClick={() => removeFromCart(index)}>
                <i className="bi bi-trash3" style={{ fontSize: '14px' }}></i>
              </button>
            </Produto>
          ))}

          <Footer>
            <div>
              <p>Valor total</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
            <button onClick={() => setEtapa('entrega')} style={{ marginTop: 10, padding: '10px 20px' }}>
              Continuar com a entrega
            </button>
          </Footer>
        </>
      )}

      {etapa === 'entrega' && (
        <DivEntrega>
          <h3>Entrega</h3>
          <LabelReceber>Quem irá receber <input  value={delivery.nome} onChange={(e) => setDelivery({ ...delivery, nome: e.target.value })} /> </LabelReceber>
          <LabelEndereco>Endereço<input value={delivery.endereco} onChange={(e) => setDelivery({ ...delivery, endereco: e.target.value })} /> </LabelEndereco>
          <LabelCidade>Cidade<input value={delivery.cidade} onChange={(e) => setDelivery({ ...delivery, cidade: e.target.value })} /></LabelCidade>
          <LabelCEP>CEP<input value={delivery.cep} onChange={(e) => setDelivery({ ...delivery, cep: e.target.value })} /></LabelCEP>
          <LabelNumber>Número<input value={delivery.numero} onChange={(e) => setDelivery({ ...delivery, numero: e.target.value })} /></LabelNumber>
          <LabelComplemento>Complemento (Opcional)<input value={delivery.complemento} onChange={(e) => setDelivery({ ...delivery, complemento: e.target.value })} /></LabelComplemento>

          <ContinuarPagamento onClick={() => setEtapa('pagamento')}> Continuar com o pagamento </ContinuarPagamento>
          <VoltarCarrinho onClick={() => setEtapa('carrinho')}>  Voltar para o carrinho  </VoltarCarrinho>
        </DivEntrega>
      )}

      {etapa === 'pagamento' && (
        <DivPagamento>
          <h3>Pagamento – Valor a pagar R$ {total.toFixed(2)}</h3>
          <LabelCartao>Nome do cartão<input value={payment.nomeCartao} onChange={(e) => setPayment({ ...payment, nomeCartao: e.target.value })} /></LabelCartao>
          <LabelNumberCart>Número do cartão<input value={payment.numeroCartao} onChange={(e) => setPayment({ ...payment, numeroCartao: e.target.value })} /></LabelNumberCart>
          <LabelCVV>CVV<input value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} /></LabelCVV>
          <LabelMes>Mês de vencimento<input value={payment.mes} onChange={(e) => setPayment({ ...payment, mes: e.target.value })} /></LabelMes>
          <LabelAno>Ano de vencimento<input value={payment.ano} onChange={(e) => setPayment({ ...payment, ano: e.target.value })} /></LabelAno>
          
          <Finalizar onClick={handleSubmitCheckout} style={{ marginTop: 10 }}>  Finalizar pagamento  </Finalizar>
          <VoltarEndereco onClick={() => setEtapa('entrega')} style={{ marginTop: 10 }}> Voltar para a edição de endereço</VoltarEndereco>
        </DivPagamento>
      )}

      {etapa === 'confirmacao' && confirmacao && (
      <Mensagem confirmacao={confirmacao} onClose={() => {
        setEtapa('carrinho');
        setConfirmacao(null);
      }} 
      />
    )}
    </CarrinhoWrapper>
  );
}; 
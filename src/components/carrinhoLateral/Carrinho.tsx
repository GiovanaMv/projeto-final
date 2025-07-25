/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { CarrinhoWrapper, Produto, ProdutoInfo, ProdutoImg, Footer } from './styles';
import { DivEntrega, ContinuarPagamento, VoltarCarrinho } from './styles';
import { DivPagamento, LabelNumberCart, LabelCVV, LabelAno, Finalizar, VoltarEndereco } from './styles';

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
    if (!payment.nomeCartao || !payment.numeroCartao || !payment.cvv || !payment.mes || !payment.ano) {
      alert('Por favor, preencha todos os campos obrigatórios de pagamento.');
      return;
    }
    const body = {
      products: cartItems.map((item: any) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: delivery.nome,
        address: {
          description: delivery.endereco,
          city: delivery.cidade,
          zipCode: delivery.cep,
          number: Number(delivery.numero),
          complement: delivery.complemento || ''
        }
      },
      payment: {
        card: {
          name: payment.nomeCartao,
          number: payment.numeroCartao,
          code: Number(payment.cvv),
          expires: {
            month: Number(payment.mes),
            year: Number(payment.ano)
          }
        }
      }
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
        delivery: {
          address: {
            description: delivery.endereco,
            city: delivery.cidade,
            zipCode: delivery.cep,
            number: delivery.numero,
            complement: delivery.complemento
          }
        },
          nome: delivery.nome,
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
          <label>Quem irá receber <input type='text'  value={delivery.nome} onChange={(e) => setDelivery({ ...delivery, nome: e.target.value })} /> </label>
          <label>Endereço<input type='text' value={delivery.endereco} onChange={(e) => setDelivery({ ...delivery, endereco: e.target.value })} /> </label>
          <label>Cidade<input type='text' value={delivery.cidade} onChange={(e) => setDelivery({ ...delivery, cidade: e.target.value })} /></label>
          <div>
            <label>CEP<input type='number' value={delivery.cep} onChange={(e) => setDelivery({ ...delivery, cep: e.target.value })} /></label>
          <label>Número<input type='number' value={delivery.numero} onChange={(e) => setDelivery({ ...delivery, numero: e.target.value })} /></label>
          </div>
          <label>Complemento (Opcional)<input value={delivery.complemento} onChange={(e) => setDelivery({ ...delivery, complemento: e.target.value })} /></label>

           <div className="buttonsentrega">
            <ContinuarPagamento
              onClick={() => {
                if (!delivery.nome || !delivery.endereco || !delivery.cidade || !delivery.cep || !delivery.numero) {
                  alert('Por favor, preencha todos os campos obrigatórios de entrega.');
                  return;
                }
                setEtapa('pagamento');
              }}
            >
              Continuar com o pagamento
            </ContinuarPagamento>
            <VoltarCarrinho onClick={() => setEtapa('carrinho')}>Voltar para o carrinho</VoltarCarrinho>
          </div>
        </DivEntrega>
      )}

      {etapa === 'pagamento' && (
        <DivPagamento>
          <h3>Pagamento – Valor a pagar R$ {total.toFixed(2)}</h3>
          <label>Nome no cartão<input type='text' value={payment.nomeCartao} onChange={(e) => setPayment({ ...payment, nomeCartao: e.target.value })} /></label>
          
          <div className="numberCVV">
            <LabelNumberCart>Número do cartão<input inputMode='numeric' value={payment.numeroCartao} onChange={(e) => setPayment({ ...payment, numeroCartao: e.target.value })} /></LabelNumberCart>
            <LabelCVV>CVV<input type='number' value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} /></LabelCVV>
          </div>

          <div className="mesAno">
            <label>Mês de vencimento<input type='number'  value={payment.mes} onChange={(e) => setPayment({ ...payment, mes: e.target.value })} /></label>
            <LabelAno>Ano de vencimento<input type='number' value={payment.ano} onChange={(e) => setPayment({ ...payment, ano: e.target.value })} /></LabelAno>
          </div>
          
           <Finalizar onClick={handleSubmitCheckout} style={{ marginTop: 10 }}>
            Finalizar pagamento
          </Finalizar>
          <VoltarEndereco onClick={() => setEtapa('entrega')} style={{ marginTop: 10 }}>
            Voltar para a edição de endereço
          </VoltarEndereco>
        </DivPagamento>
      )}

      {etapa === 'confirmacao' && confirmacao && (
        <Mensagem
          confirmacao={confirmacao}
          onClose={() => {
            setEtapa('carrinho');
            setConfirmacao(null);
          }}
      />
    )}
    </CarrinhoWrapper>
  );
}; 
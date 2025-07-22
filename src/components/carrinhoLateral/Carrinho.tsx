/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from '../../contexts/CartContext';
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { CarrinhoWrapper, Produto, ProdutoInfo, ProdutoImg, Footer } from './styles'
// , BotaoFechar

import PratoPizza from '../../assets/imagens/prato3-pizza.png'

type Props = {
  aberto: boolean;
  onClose: () => void;
};

export const CarrinhoLateral = ({ aberto }: Props) => {

  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc: any, item: { preco: any; }) => acc + item.preco, 0);

  return (
    <CarrinhoWrapper aberto={aberto}>
      {/* <BotaoFechar onClick={onClose}><i className="bi bi-x-lg"></i></BotaoFechar> */}
      {cartItems.map((item: { foto: string | undefined; nome: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; preco: number; }, index: Key | null | undefined) => (
        <Produto key={index}>
          <ProdutoImg src={PratoPizza} alt="Imagem" />
          <ProdutoInfo>
            <h4>{item.nome}</h4>
            <p>R$ {item.preco.toFixed(2)}</p>
          </ProdutoInfo>
          {typeof index === 'number' && (
            <button onClick={() => removeFromCart(index)}>
              <i className="bi bi-trash3" style={{ fontSize: '14px' }}></i>
            </button>
          )}
        </Produto>
      ))}

      <Footer>
        <div>
          <p>Valor total </p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <button style={{ marginTop: 10, padding: '10px 20px' }}>Continuar com a entrega</button>
      </Footer>
    </CarrinhoWrapper>
  );
};

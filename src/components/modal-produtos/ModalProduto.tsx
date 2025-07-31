import * as S from './styles';
import { useCart } from '../../contexts/CartContext';

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  porcao: string;
};

type ModalProdutoProps = {
  produto: Produto;
  onClose: () => void;
  onAddToCart: (produto: Produto) => void;
};

export const ModalProduto = ({ produto, onClose }: ModalProdutoProps) => {
  const { addToCart } = useCart();

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <button onClick={onClose}><i className="bi bi-x-lg"></i></button>
        </S.ModalHeader>
        <S.ModalContent>
          <img src={produto.foto} alt={produto.nome} />
          <div className="informacoes">
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <h3>Serve: {produto.porcao}</h3>
            <button onClick={() => addToCart(produto)}>
              Adicionar ao Carrinho - R$ {produto.preco.toFixed(2)}
            </button>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

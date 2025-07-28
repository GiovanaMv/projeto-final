import * as S from './styles';
import PratoPizza from '../../assets/imagens/prato3-pizza.png'
import { useCart } from '../../contexts/CartContext'

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

  const precoFixado = 60.90;
  const produtoAtualizado = {
    ...produto,
    preco: precoFixado
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
            <button onClick={onClose}><i className="bi bi-x-lg"></i></button>
        </S.ModalHeader>
        <S.ModalContent>
          <img src={PratoPizza} alt={produto.nome} />
          <div className="informacoes">
            <h2>{produto.nome}</h2>
            <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
            <h3>Serve: {produto.porcao}</h3>
            <button onClick={() => {
              addToCart(produtoAtualizado);
            }}>
              Adicionar ao Carrinho - R$ {precoFixado.toFixed(2)}
            </button>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
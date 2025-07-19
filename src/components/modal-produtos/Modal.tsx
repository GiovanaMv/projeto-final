import React from 'react';
import { Overlay, Content } from './ProdutoModal.styles';
import { type Produto } from '../../hooks/useRestaurantes';

interface ModalProps {
  produto: Produto;
  onClose: () => void;
  onAddToCart: (produto: Produto) => void;
}

export default function ProdutoModal({ produto, onClose, onAddToCart }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        <h2>{produto.nome}</h2>
        <img src={produto.foto} alt={produto.nome} style={{ width: '100%' }} />
        <p>{produto.descricao}</p>
        <p><strong>R$ {produto.preco.toFixed(2)}</strong></p>
        <button onClick={() => { onAddToCart(produto); onClose(); }}>
          Confirmar
        </button>
        <button onClick={onClose}>Cancelar</button>
      </Content>
    </Overlay>
  );
}

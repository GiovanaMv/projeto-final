// import React, { useState } from 'react';
import * as S from './ModalProduto.styles';

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
};

type ModalProdutoProps = {
  produto: Produto;
  onClose: () => void;
  onAddToCart: (produto: Produto) => void;
};

export const ModalProduto = ({ produto, onClose, onAddToCart }: ModalProdutoProps) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>{produto.nome}</h2>
          <button onClick={onClose}>×</button>
        </S.ModalHeader>
        <S.ModalContent>
          <img src={produto.foto} alt={produto.nome} />
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco.toFixed(2)}</p>
        </S.ModalContent>
        <S.ModalFooter>
          <button onClick={() => onAddToCart(produto)}>Adicionar ao Carrinho</button>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
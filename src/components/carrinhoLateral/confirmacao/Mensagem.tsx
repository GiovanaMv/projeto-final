import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
  }

  button {
    padding: 10px;
    background-color: #e66767;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }
`;
  


type Props = {
  confirmacao: {
    orderId: number;
    nome: string;
    endereco: string;
    total: number;
  };
  onClose: () => void;
};

const Mensagem = ({ confirmacao, onClose }: Props) => {
  return (
    <Container >
      <h2>Pedido confirmado!</h2>
      <p>Pedido nº: <strong>{confirmacao.orderId}</strong></p>
      <p>Entregar para: {confirmacao.nome}</p>
      <p>Endereço: {confirmacao.endereco}</p>
      <p>Total: R$ {confirmacao.total.toFixed(2)}</p>
        <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
      <p>Lembre-se de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
      <p>Esperamos que você desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>

        <button onClick={onClose}>Concluir</button>
    </Container>
  );
};

export default Mensagem;
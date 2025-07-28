import styled from 'styled-components';

const Container = styled.div`
  color: #FFEBD9;
  font-family: 'Roboto';

  h2 {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    margin-top: 12px;
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  button {
    font-family: 'Roboto';
    padding: 3px; 
    background-color: #FFEBD9; 
    border: none;
    color: #e66767;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
  }
`;

type Props = {
  confirmacao: {
    orderId: number;
    receiver: string;
    address: {
      description: string;
      number: string | number;
      complement?: string;
      city: string;
      zipCode: string;
    };
    total: number;
    produtos: number[];
  };
  onClose: () => void;
};

const Mensagem = ({ confirmacao, onClose }: Props) => {
  const idFormatado = confirmacao.orderId ? String(confirmacao.orderId).padStart(2, '0') : '00';

  return (
    <Container>
      <h2>Pedido realizado – <strong>{idFormatado}</strong></h2>

       {/* <p><strong>IDs dos produtos:</strong> {confirmacao.produtos.join(', ')}</p> */}

      <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
      <p>Lembre-se de higienizar as mãos após o recebimento do pedido.</p>
      <p>Esperamos que você desfrute de uma deliciosa experiência gastronômica. Bom apetite!</p>

      <button onClick={onClose}>Concluir</button>
    </Container>
  );
};

export default Mensagem;
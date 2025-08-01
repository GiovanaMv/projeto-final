import styled from 'styled-components';

export const Entrega = styled.div`
  position: fixed;
  top: 0;
  width: 360px;
  height: 100vh;
  background-color: #e66767;
  color: white;
  padding: 10px;
  box-shadow: -2px 0 10px rgba(0,0,0,0.3);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
`;

export const Produto = styled.div`
  display: flex;
  align-items: center;
  background: #FFEBD9;
  color: #e66767;
  margin-bottom: 10px;
  overflow: hidden;
  margin-top: 3px;

  button {
    border: none;
    background-color: transparent;
    color: #e66767;
    cursor: pointer;
    margin-right: 8px;
    margin-top: 68px;
    }
`;

export const ProdutoInfo = styled.div`
  flex: 1;
  padding: 12px;
  width: 344px;
  height: 100px;

  h4 {
    font-size: 18px;
    font-weight: 800;
    font-family: 'Roboto';
  }

  p {
    margin-top: 14px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ProdutoImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-left: 8px;
`;

export const Footer = styled.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: right;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  button {
    width: 340px;
    height: 28px;
    background: #FFEBD9;
    border: none;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

  padding: 0;
  line-height: normal;
  cursor: pointer;
  }
`;

// export const BotaoFechar = styled.button`
//   background: none;
//   color: white;
//   font-size: 1.5rem;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   top: 3px;
//   right: 20px;
// `;
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: block;
  background: #E66767;
  color: #FFFFFF;
  padding: 12px;
  height: 344px;
  max-width: 1024px;
  z-index: 999;  
`;
export const ModalHeader = styled.header`
  button {
    margin-left: 980px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: white;
    cursor:pointer;
  }
`;
export const ModalContent = styled.div`
  display : flex;
  margin-left: 16px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .informacoes {
    margin-left: 20px;

    h2 {
      font-size: 18px;
      font-weight: 900;

    }

    p, h3 {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      width: 656px;
      height: 176px;
      margin-top: 18px;
    }
    h3 {
    margin-top: -18px;
    margin-bottom: 18px;
    height: 18px;
    }

    button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    font-size: 14px;
    font-weight: 700;
    width: 230px;
    height: 24px;
    cursor: pointer;
    }
  }
`;

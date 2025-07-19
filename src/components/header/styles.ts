import styled from "styled-components";
import Fundo from '../../assets/imagens/fundo.png';

export const HomeHeader = styled.div`
    background-image: url(${Fundo});
    height: 302px;
    display: flex;
    margin: 0 auto;
    justify-content: center;

    .informacoes {
    img {
    Width: 115px;
    Height: 57.5px;
    display: flex;
    justify-content: center;
    margin: 40px auto;
    }
    h2 {
    width: 539px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    margin-top: 82px;
    }
    }
`;

export const PratosHeader = styled.div`
    background-image: url(${Fundo});
    height: 132px;
    padding-top: 32px;

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
      margin-left: 48px;
      }

      button {
      background-color: transparent;
      border: none;

      a {
        text-decoration: none;
        color: #E66767;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 900;
      }
    }
    
    }
    
`;

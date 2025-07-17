import styled from "styled-components";
import Fundo from '../../assets/imagens/fundo.png';

export const Banner = styled.div`
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

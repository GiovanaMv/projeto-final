import styled from "styled-components";

export const Restaurantes = styled.section`
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .sombra {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
        z-index: 1;
    }
    .texto {
        position: absolute;
        left: 170px;
        top: 20px;
        bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: sapce-between;
        color: white;
        z-index: 2;

        p {
            font-weight: 100;
            font-size: 32px;
        }

        h3 {
            margin-top: 162px;
            font-size: 32px;
            font-weight: 900;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    margin-top: 56px;    
`;

export const Card = styled.div`
Width: 320px;
Height: 420px;
background-color: #E66767;
color: #FFEBD9;
font-family: 'Roboto';
padding: 9px;

    header {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;

        img {
        Width: 304px;
        Height: 167px;
        object-fit: cover;
        }
    }
    
    div {
        h3 {
        margin: 8px auto;
        font-size: 16px;
        font-weight: 800;
        font-family: 'Roboto';
    }

    p {
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        width: 304px;
        height: 88px;
    }
    
    button {
        Width: 298px;
        height: 24px;
        margin: 86px auto;
        background-color: #FFEBD9;
        color: #E66767;
        border: none;
        cursor: pointer;
        font-weight: 700;
        font-family: Roboto;
        font-size: 14px;
    }
    }
`


export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const LoadingText = styled.p`
  background-color: #fff;
  padding: 18px 28px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
`;

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 52px;
    justify-content: center;
    margin-top: 56px;
    
`;

export const Restaurantes = styled.section`
`;

export const Card = styled.div`
Width: 320px;
Height: 338px;
background-color: #E66767;
color: #FFEBD9;
font-family: 'Roboto';
padding: 12px;

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
    
    main {
        
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
        margin: 0 auto;
        background-color: #FFEBD9;
        color: #E66767;
        border: none;

        a {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 700;
        }
    }
    }
`;
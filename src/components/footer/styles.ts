import styled from "styled-components";

 export const Contatos = styled.footer`
    background-color: #FFEBD9;
    width: 100%;
    height: 298px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 82px;

    img {
       display: flex;
       justify-content: center;
        align-items: center;
        margin: 32px auto;
        margin-top: -10px;
        width: 125px;
    }
    
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px; 
        margin-bottom: 82px;

        li {
            cursor: pointer;
        }
    }

    p {
        width: 480px;
        font-weight: 400;
        font-size: 10px;
        text-align: center;
        bottom: 10;
        font-family: 'Roboto';
    }
    
`;
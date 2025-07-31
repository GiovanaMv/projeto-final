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
  width: 472px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;

  header {
  position: relative;

    .tag-container {
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      gap: 4px;
      
    }

    .tag {
      background-color: #E66767;
      color: #fff;
      font-size: 12px;
      padding: 4px 8px;
      font-weight: 600;
      font-family: Roboto;
    }

    .tag.secondary {
      background-color: #E66767;
      margin-left: 6px;
      font-family: Roboto;
    }
  }

    img {
      width: 100%;
      height: 217px;
      object-fit: cover;
      display: block;
    }
  }

  main {
    border: 1px solid #E66767;
    border-top: none;
    height: 181px;
    padding: 6px;

    display: flex;
    flex-direction: column;

    h3 {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: space-between;

      strong {
      align-item: end;
        i {
            color: #FFB800;
            margin: 5px;
        }
    }
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 8px;
    }

    button {
      background-color: #E66767;
      width: 82px;
      height: 24px;
      border: none;
      cursor:pointer;

      a {
        color: #FFEBD9;
        font-family: Roboto;
        font-size: 14px;
        text-decoration: none;
        line-weight: 100%;
        font-weight: 600;
      }
    }
  }
`;

import styled from "styled-components";

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: rgba(16, 145, 50, 0.6);
  border-radius: 20px;

  h1 {
    font-size: 50px;
    font-family: 'Young Serif', serif;
    text-align: center; 
  }

  h4 {
    padding: 5px;
    font-size: 18px;
    font-family: 'Young Serif', serif;
    font-weight: 300;
    text-align: center;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 30px;
    }
  }
`;

import { createGlobalStyle } from "styled-components";
import Sorte from "../../assets/images/trevosorte.png"
export const GlobalStyles = createGlobalStyle`

html{
    font-size: 62.5%;

  }
 body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url(${Sorte}); /* Defina a imagem como plano de fundo */
  background-size: cover; /* Garante que a imagem cubra todo o corpo */
  background-position: top center; /* Posicione a imagem no topo */
  background-attachment: fixed; /* Fixe a imagem para que ela não role com a página */
    
 }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
`
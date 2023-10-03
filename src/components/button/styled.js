import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 790px) {
    margin-right: -16px; /* Adiciona a margem quando a largura da tela for igual ou inferior a 790px */
}
`

export const BoxNumber = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #d4db44;
border: solid 1px black;
border-radius: 20px;
padding: 10px;
margin-top: 25px;
justify-content: center;
margin-right: 15px;

p {
    font-size: 25px;
    font-family: 'Young Serif', serif;
    font-weight: 300;
    text-align: center;
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    align-items: center;
    justify-content: center;
}

li {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 25px;
    font-style: italic;
    background-color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 70%;
    border: solid 1px #000;
}
`



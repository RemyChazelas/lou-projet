import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

canvas{
    display: block;
    width: auto;
    height: 100vh;
}


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
  --light-bg: #f0f0f0;
  --gray-1: #cacaca;
  --deep-dark: #1E1E1E;
  --gray-2: #acacac;
  --white : white;
  --black: black;
}

  html{
    font-size: 10px;
    font-family: 'Valkyrie Regular';
    background-color: var(--white);
    color: #BCB4B4;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    
  }  
`;
export default GlobalStyles;

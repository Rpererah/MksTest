import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-600']};
    -webkit-font-smoothing:antialiased
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-600']};
}

body,input,button{
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1rem;

}

`

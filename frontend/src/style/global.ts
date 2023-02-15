import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  :root{
    --white-color: #FFFFFF;
    --header-color: #EBEBEB;
    --input-color :#E0E0E0;
  }

  *{
    margin:0 ;
    padding: 0 ;
  }

  body{
    font-family: 'Rubik', sans-serif;
    font-weight:400;
    h1{
      font-weight:500;
    }
    .link{
      text-decoration:none ;
      color:#000 ;
    }
  }


`
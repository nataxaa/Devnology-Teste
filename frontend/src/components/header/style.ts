import styled from "styled-components";

export const Container = styled.header`

    background-color: var(--header-color) ;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 20px -20px;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    padding:20px 15rem ;
    margin-bottom:4rem ;
   
    @media (max-width: 1024px) {
    padding: 20px 2rem ;
    }
  @media (max-width: 720px) {
      padding:20px 1rem ;
  }

    ul{
        display:flex ;
        align-items:center ;
        gap:20px;
        list-style:none ;
        font-size:20px ;
    }
    span.dev{
        color:#D1C6E6 ;
    }
    span.go{
        color: #6E4BAA;
    }



`
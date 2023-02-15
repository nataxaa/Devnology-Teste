import styled from "styled-components";

export const Container = styled.div`

    display:flex ;
    flex-direction:row ;
    align-items:center ; 
    justify-content:center ;

    h1{
        margin:0 auto ;
    }

`

export const AreaArticles = styled.div`
display:grid ;
grid-template-columns:1fr 1fr 1fr ;

padding: 80px ;

@media (max-width: 1024px) {
    grid-template-columns:1fr 1fr ;
    padding:20px ;
  }
  @media (max-width: 720px) {
    grid-template-columns:1fr ;
    padding:10px ;
    p.price{
        font-size:12px ;
    }
  }

gap:20px;
justify-content:center ;

a{
    text-decoration:none ;
    color:#000 ;
    z-index:0 ;
}

div.item{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:5px ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding:20px ;
    width:20rem ;
    height:13rem ;
    
    button{
        background:none ;
        font-size:16px ;
        border:none ;
        position:absolute ;
        
        margin-left:20rem ;
        margin-top:-0.5rem ;
        color:red ;
        cursor: pointer;
        z-index:3 ;
        
       
        height:fit-content ;

    }
    
}

img{
    width:18rem;
    height:9rem ;
    margin-top:20px ;
}

`
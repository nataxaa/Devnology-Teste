import styled from "styled-components";

export const Container = styled.div`

    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content:center ;
    @media (max-width: 720px) {
        padding-inline:20px;
    }

    div.area-inputs{
        display:flex ;
        flex-direction:column ;
        border-radius:5px ;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width:35rem;
        padding: 50px 65px 50px 50px ;
        button{
            padding:10px ;
            border-radius:5px ;
            width:fit-content ;
            margin: 10px auto 1rem ;
            background-color:#55BBF1 ;
            font-size:16px ;
            border:none ;
            cursor: pointer;
            transition:0.2s ;
            :hover{
                opacity:0.9 ;
            }
        }
        label{
            font-size:25px ;
        }
        input{
            padding:16px 10px;
            border-radius:5px ;
            width:100% ;
            border:none ;
            background-color:var(--input-color) ;
            outline:none ;
        }
    }

`
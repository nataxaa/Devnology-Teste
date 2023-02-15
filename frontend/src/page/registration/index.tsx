import { useState } from "react";
import { api } from "../../service/api";
import { Container } from "./style";
import {useNavigate} from 'react-router-dom'

export function Registration(){
    const [url, setUrl] = useState<string>()
    const navigate = useNavigate()

    async function handleAddArticle(e:any){
        e.preventDefault()
        if(!url){
            alert("Digite a URL")
            return
        }else{
            api.post('Articles/', {
                url: url
            })
            alert("Produto Adicionado! Alguns instantes ele sera adicionaddo!")
            navigate('/')
        }
    }
    
    return(
        <Container>
            <div className="area-inputs">
                <label htmlFor="input">URL</label>
                <input 
                    type="text" 
                    placeholder="Cole a url do artigo..." 
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />
                <button onClick={handleAddArticle}>Adicionar</button>
            </div>
        </Container>
    )
}
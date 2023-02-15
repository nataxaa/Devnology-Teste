import { useEffect, useState } from "react";
import { AnimationLoading } from "../../components/loading";
import { api } from "../../service/api";
import { AreaArticles, Container } from "./style";

interface articleProps{
    id:number;
    name: string;
    image: string;
    url: string;
}

export function Home(){

    const [article, setArticle] = useState<articleProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            (async ()=>{ 
                const response = await api.get('Articles/');
                setArticle(response.data) 
            })();
        }, 6000);
        },[article])

        console.log(article)
        async function handleRemove(id:number){
            api.delete(`Articles/${id}`)
            alert("Produto Removido!")
        }
        
    return(
        <Container>
            {loading ? (
                <h1><AnimationLoading/></h1>
                ):(
                    <AreaArticles>
                    {article.map((props)=>(
                        <div className="item">
                        <button onClick={()=>handleRemove(props.id)}>X</button>
                        <a href={props.url} target={'_blank'}>
                        <p>{props.name}</p>
                            <img src={props.image} alt="" />
                        </a>
                        </div>
                    ))}
                    </AreaArticles>
            
                    )}
        </Container>
    )
}
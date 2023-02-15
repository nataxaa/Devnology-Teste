import { Container } from "./style";
import {Link} from 'react-router-dom'


export function Header(){
    return(
        <Container>
            <h1>Artigos da <span className="dev">Dev</span><span className="go">Go</span></h1>
            <ul>
                <Link className="link" to={'/'}>Home</Link>
                <Link className="link" to={'/registration'}>Adicionar Artigo</Link>
                
            </ul>
        </Container>
    )
}
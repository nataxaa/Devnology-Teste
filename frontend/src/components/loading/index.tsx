import { Container } from "./style";


export function AnimationLoading(){
    return(
        <Container>
            <div className="loading">
                <div className="loading-spinner" />
            </div>
        </Container>
    )
}
import illustrationImg from '../../assets/images/illustration.svg'

import { Aside } from './styles'

export function AsideComponent() {
    return(
        <Aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas de sua audiência em tempo-real</p>
        </Aside>
    )
}

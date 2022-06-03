import illustrationImg from 'assets/images/illustration.svg'

import { Aside, Image, Strong, Text } from './styles'

export function AsideBanner() {
    return(
        <Aside>
            <Image src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <Strong>Crie salas de Q&amp;A ao-vivo</Strong>
            <Text>Tire as dúvidas de sua audiência em tempo-real</Text>
        </Aside>
    )
}

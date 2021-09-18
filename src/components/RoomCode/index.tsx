import copyImg from '../../assets/images/copy.svg';

import { CodeWrapper } from './styles'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <CodeWrapper onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar código da sala" />
            </div>
            <span>Sala #{props.code}</span>
        </CodeWrapper>
    )
}
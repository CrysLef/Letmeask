import * as S from './styles'

import { useHistory, useParams } from 'react-router'
import { database } from '../../services/firebase'

type RoomParams = {
    id: string;
}

export function ModalEndRoom({ onClose = () => {} }) {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const history = useHistory();
    
    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endAt: new Date(),
        })
        history.push('/')
    }
    return(
        <S.Container>
            <S.Modal>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.66 18.3398L18.34 29.6598" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.66 29.6598L18.34 18.3398" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2>Encerrar sala</h2>
                <p>Tem certeza que você deseja encerrar esta sala?</p>
                <S.ButtonsWrapper>
                    <button onClick={onClose}>Cancelar</button>
                    <button className="redButton" onClick={handleEndRoom}>Sim, Encerrar</button>
                </S.ButtonsWrapper>
            </S.Modal>
        </S.Container>
    )
}
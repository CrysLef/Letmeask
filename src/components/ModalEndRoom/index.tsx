import * as S from './styles'

import { useNavigate, useParams } from 'react-router'
import { database } from '../../services/firebase'
import { Button } from 'components/Button';

type RoomParams = {
    id: string;
}

export function ModalEndRoom({ onClose = () => {} }) {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const navigate = useNavigate();
    
    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endAt: new Date(),
        })
        navigate('/')
    }
    return(
        <S.Container>
            <S.Modal>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.66 18.3398L18.34 29.6598" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.66 29.6598L18.34 18.3398" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <S.Title>Encerrar sala</S.Title>
                <S.Description>Tem certeza que você deseja encerrar esta sala?</S.Description>
                <S.ButtonsWrapper>
                    <Button variant='cancel' onClick={onClose}>Cancelar</Button>
                    <Button variant='danger' onClick={handleEndRoom}>Sim, Encerrar</Button>
                </S.ButtonsWrapper>
            </S.Modal>
        </S.Container>
    )
}
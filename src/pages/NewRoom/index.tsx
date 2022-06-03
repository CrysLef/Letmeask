import { FormEvent, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { database } from 'services/firebase'
import { useNavigate } from 'react-router'


import { Button } from 'components/Button';
import { notifyRoomName } from 'common/utils/toast';
import { Form } from 'components/Form';
import { InputRoom } from 'components/InputRoom';
import { PinkLink, Text, Title } from './styles';


export function NewRoom() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [ newRoom, setNewRoom ] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === '') {
            notifyRoomName()
            return;
        }
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        navigate(`/rooms/admin/${firebaseRoom.key}`)
    }

    return (
        <>
            <Title>Crie uma nova sala</Title>
            <Form onSubmit={handleCreateRoom}>
                <InputRoom 
                    type="text"
                    placeholder="Nome da sala"
                    onChange={event => setNewRoom(event.target.value)}
                    value={newRoom}
                />
                <Button type="submit">
                    Criar sala
                </Button>
            </Form>
            <Text>
                Quer entrar em uma sala já existente? <PinkLink to="/">Clique aqui</PinkLink>
            </Text>
        </>
    )
}
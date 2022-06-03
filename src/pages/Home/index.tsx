import { useNavigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';

import { ReactComponent as GoogleIcon } from 'assets/images/googleIcon.svg';
import { ReactComponent as LogInIcon } from 'assets/images/logIn.svg';


import * as S from './styles';

import { Button } from 'components/Button';

import { FormEvent, useState } from 'react';
import { database } from 'services/firebase';
import { notifyClosedRoom, notifyError, notifyRoomName } from 'common/utils/toast';
import { InputRoom } from 'components/InputRoom';
import { Form } from 'components/Form';

export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle} = useAuth();
    const [ roomCode, setRoomCode ] = useState('');

    async function handleCreateNewRoom() {
        if(!user) {
           await signInWithGoogle();
        }
        navigate('/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();
        

        if(roomCode.trim() === '') {
            notifyRoomName();
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            notifyError();
            return;
        }

        if(roomRef.val().endAt) {
            notifyClosedRoom();
            return;
        }

        const roomAuthor = await database.ref(`rooms/${roomCode}/authorId`).get();
        
        if(user?.id === roomAuthor.val()) {
            return navigate(`/rooms/admin/${roomCode}`);
        }

        navigate(`/rooms/${roomCode}`);

    }

    return (
        <>
            <Button variant='google' onClick={handleCreateNewRoom}>
                <GoogleIcon />
                Crie sua sala com o Google
            </Button>

            <S.Separator>ou entre em uma sala</S.Separator>

            <Form onSubmit={handleJoinRoom}>
                <InputRoom 
                    type="text"
                    placeholder="Digite o código da sala"
                    onChange={event => setRoomCode(event.target.value)}
                    value={roomCode}
                />
                <Button type="submit">
                    <LogInIcon />
                    Entrar na sala
                </Button>
            </Form>
        </>

    )
}
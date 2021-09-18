import { useHistory } from 'react-router';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import toast, { Toaster } from 'react-hot-toast';

import * as S from '../styles/auth';

import { Button } from '../components/Button';
import { AsideComponent } from '../components/AsideComponent';

import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle} = useAuth()
    const [ roomCode, setRoomCode ] = useState('')

    const notifyRoomName = () => toast('Enter the room name',{
        icon: '😊'
    })
    const notifyError = () => toast.error('This room does not exist')
    const notifyClosedRoom = () => toast('This room already closed.',{
        icon: '😢',
    })

    async function handleCreateNewRoom() {
        if(!user) {
           await signInWithGoogle();
        }
        history.push('/rooms/new');
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
            return history.push(`/admin/rooms/${roomCode}`);
        }

        history.push(`/rooms/${roomCode}`);

    }

    return (
        <S.AuthContainer>
            <AsideComponent />
            <main>
                <S.Content>
                    <img src={logoImg} alt="Logo da Letmeask" />
                    <S.ButtonCreateRoom onClick={handleCreateNewRoom}>
                        <img src={googleIconImg} alt="Ícone do Google" />
                        Crie sua sala com o Google
                    </S.ButtonCreateRoom>

                    <S.Separator className="separator">ou entre em uma sala</S.Separator>

                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>

                    <Toaster />

                </S.Content>
            </main>

        </S.AuthContainer>
    )
}
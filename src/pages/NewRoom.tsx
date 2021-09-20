import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase'
import { useHistory } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import DarkModeToggle from "react-dark-mode-toggle";
import GlobalStyle from '../styles/globalStyle';

import logoImg from '../assets/images/logo.svg';

import * as S from '../styles/auth'

import { Button } from '../components/Button';
import { AsideComponent } from '../components/AsideComponent';
import { usePersistedState } from '../hooks/usePersistedState';


export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const [ newRoom, setNewRoom ] = useState('');
    const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme',light);

    const darkTitle = theme.title === 'dark';

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    const notifyRoomName = () => toast('Enter the room name',{
        icon: '😊'
    })

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

        history.push(`/admin/rooms/${firebaseRoom.key}`)
    }

    return (
        <S.AuthContainer>
            <ThemeProvider theme={theme}>
                <AsideComponent />
                <main>
                    <DarkModeToggle
                        className="toggle" 
                        onChange={toggleTheme}
                        checked={darkTitle}
                        size={60}
                    />
                    <S.Content className={darkTitle ? 'darkDiv' : ''}>
                        <img src={logoImg} alt="Logo da Letmeask" />
                        <h2>Crie uma nova sala</h2>
                        <form onSubmit={handleCreateRoom}>
                            <input 
                                type="text"
                                placeholder="Nome da sala"
                                onChange={event => setNewRoom(event.target.value)}
                                value={newRoom}
                            />
                            <Button type="submit">
                                Criar sala
                            </Button>
                        </form>
                        <p>
                            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                        </p>
                    </S.Content>
                    <Toaster />    
                </main>
                <GlobalStyle />
            </ThemeProvider>

        </S.AuthContainer>
    )
}
import { Link, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import emptyQuestionsImg from '../assets/images/empty-questions.svg';

import * as S from '../styles/room'

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { ModalRemoveQuestion } from '../components/ModalRemoveQuestion';
import { ModalEndRoom } from '../components/ModalEndRoom'

import { useRoom } from '../hooks/useRoom';
import { useState } from 'react';
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { title, questions } = useRoom(roomId);
    const [ isModalDeleteOpen, setIsModalDeleteOpen ] = useState<boolean>(false)
    const [ isModalEndRoomOpen, setIsModalEndRoomOpen ] = useState<boolean>(false)

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        })
    }
    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true,
        })
    }

    return(
        <div>
            <S.Header>
                <div className="content">
                    <Link to="/">
                        <img className="logo" src={logoImg} alt="Logo Letmeask" />
                    </Link>
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={() => setIsModalEndRoomOpen(true)} >Encerrar sala</Button>
                    </div>
                </div>
            </S.Header>
    
            <S.Main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>
                {questions.length > 0 ? (
                    <div className="question-list">
                        { questions.map(question => {
                            return(
                                <Question
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighlighted={question.isHighlighted}
                                >
                                {!question.isAnswered && (
                                    <>
                                        <button 
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                            <img src={checkImg} alt="Marcar como lida" />
                                        </button>
        
                                        <button 
                                            type="button"
                                            onClick={() => handleHighlightQuestion(question.id)}
                                        >
                                            <img src={answerImg} alt="Dar destaque à pergunta" />
                                        </button>
                                    </>
                                )}
                                        
                                        <button 
                                            type="button"
                                            onClick={() => setIsModalDeleteOpen(true)}
                                        >
                                            <img src={deleteImg} alt="Remover pergunta" />
                                        </button>
        
                                        { isModalDeleteOpen && <ModalRemoveQuestion onClose={async () => setIsModalDeleteOpen(false)} questionId={question.id} /> }
                                </Question>
                            )
                        })}
                        </div>
                )   :  (
                        <S.WithoutQuestions>
                            <img src={emptyQuestionsImg} alt="Sem perguntas no momento" />
                            <h2>Nenhuma pergunta por aqui...</h2>
                            <p>Envie o código desta sala para seus amigos e<br/>comece a responder perguntas!</p>
                        </S.WithoutQuestions>
                )}
                {isModalEndRoomOpen && <ModalEndRoom onClose={async () => setIsModalEndRoomOpen(false)} />}
            </S.Main>
        </div>
    )
}
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import * as S from './styles'

import { ModalEndRoom } from 'components/ModalEndRoom'
import { RoomCode } from 'components/RoomCode';


export type RoomParams = {
  id: string;
}


export const Header = () => {
  const [ isModalEndRoomOpen, setIsModalEndRoomOpen ] = useState<boolean>(false)
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const isAdmin =  () => {
    const url = window.location.href
    if(url.split('/')[4] === 'admin'){
      return true
    }
    return false
  }

  return(
    <S.Header>
      <S.Content>
          <Link to="/">
            <S.LogoImg />
          </Link>
          <S.CodeWrapper>
            <RoomCode code={roomId}/>
           { isAdmin() ? <S.StyledButton variant='outlined' onClick={() => setIsModalEndRoomOpen(true)} >Encerrar sala</S.StyledButton> : <></> }
          </S.CodeWrapper>
      </S.Content>
      { isModalEndRoomOpen && <ModalEndRoom onClose={() => setIsModalEndRoomOpen(false)} /> }
    </S.Header>
  )
}
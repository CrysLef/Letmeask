import { Header } from "components/Header";
import { RoomTitle } from "components/RoomTitle"
import { useRoom } from "hooks/useRoom";
import { Outlet, useParams } from "react-router-dom";
import { Main } from './styles'

type RoomParams = {
  id: string;
}

export const DefaultRoom = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  return(
    <>
      <Header />
      <Main>
        <RoomTitle title={title} questions={questions} />
        <Outlet />
      </Main>
    </>
  )
}
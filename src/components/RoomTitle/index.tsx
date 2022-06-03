import { QuestionType } from "hooks/useRoom";
import * as S from './styles'

interface RoomTitleProps {
  title: string;
  questions: QuestionType[];
}

export const RoomTitle = ({ title, questions }: RoomTitleProps) => {
  return(
    <S.Container >
      <S.Title>Sala {title}</S.Title>
      { questions.length > 0 && <S.Span>{questions.length} pergunta(s)</S.Span>}
    </S.Container>
  )
}
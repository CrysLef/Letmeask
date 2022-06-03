import * as S from './styles'

export const WithoutQuestions = () => {
  
  const isAdmin =  () => {
    const url = window.location.href
    if(url.split('/')[3] === 'admin'){
      return true
    }
    return false
  }

  return (
    <S.WithoutQuestions>
      <S.EmptyQuestions />
      <S.Title>Nenhuma pergunta por aqui...</S.Title>
      {
        isAdmin() ?
        <S.Description>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</S.Description> : 
        <S.Description>Envie o código desta sala para seus amigos e comece a responder perguntas!</S.Description>

      }
    </S.WithoutQuestions>
  )
}
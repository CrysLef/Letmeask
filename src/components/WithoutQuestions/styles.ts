import { styled } from 'styles/theme';
import { ReactComponent as EmptyQuestionsImg } from 'assets/images/empty-questions.svg';

export const WithoutQuestions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '45%',
  margin: '0 auto',

  '@media (max-width: 700px)': {
      width: '80%',
  }
})

export const EmptyQuestions = styled(EmptyQuestionsImg, {
  maxWidth: 150,
  marginTop: 64,
  marginBottom: 16,

})

export const Title = styled('h2', {
  fontSize: '2.4rem',
  textAlign: 'center',
})

export const Description = styled('p', {
  fontSize: '1.6rem',
  color: '#c1c1c1',
  marginTop: 8,
  textAlign: 'center',
})
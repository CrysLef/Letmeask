import { styled } from "styles/theme";

export const Container = styled('div', {
  margin: '32px 0 24px',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width:500px)': {
    flexDirection: 'column',
    gap: 8,
  },
  
  '@media (max-width: 900px)': {
    justifyContent: 'center',
  }

})


export const Title = styled('h1', {
  fontFamily: '$poppins',
  fontSize: '2.4rem',
  color: '$text',
})


export const Span = styled('span', {
  marginLeft: 16,
  backgroundColor: '$pink',
  borderRadius: 9999,
  padding: '8px 16px',
  color: '$white',
  fontWeight: 500,
  fontSize: '1.4rem',
})
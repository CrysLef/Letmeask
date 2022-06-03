import { Link } from 'react-router-dom'
import { styled } from 'styles/theme'

export const Title = styled('h2', {
  fontSize: '2.4rem',
  fontFamily: '$poppins',
})

export const Text = styled('p', {
  fontSize: '1.4rem',
  color: '$grayDark',
})

export const PinkLink = styled(Link, {
  color: '$pink'
})
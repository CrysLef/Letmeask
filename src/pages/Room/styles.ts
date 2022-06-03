import { Button } from 'components/Button'
import { css, styled } from 'styles/theme'


export const Form = styled('form', {
  marginBottom: 32,

  '@media (max-width: 900px)': {
    width: '80%',
    margin: '0 auto',
  }
})

export const TextArea = styled('textarea', {
  fontSize: '1.6rem',
  width: '100%',
  border: 0,
  padding: 16,
  borderRadius: 8,
  backgroundColor: '',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
  resize: 'vertical',
  minHeight: 130,
  color: '$text',
  outline: 'none',

  '&::placeholder': {
      color: '$grayDark'
  },

  '&:focus': {
    border: '1px solid $primary'
  }

})

export const FormFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 16,

  '@media (max-width:500px)': {
    flexDirection: 'column',
    gap: 8,
  }
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '@media (max-width:500px)': {
    display: 'none',
  }
})

export const Avatar = styled('img', {
  width: 32,
  height: 32,
  borderRadius: '50%',
})

export const UserName = styled('span', {
  marginLeft: 8,
  color: '$text',
  fontWeight: 500,
  fontSize: '1.4rem',
})

export const Span = styled('span', {
  fontSize: '1.4rem',
  color: '$grayDark',
  fontWeight: 500,
})

export const Link = styled('a', {
  color: '$primary',
  fontSize: '1.4rem',
  fontWeight: 500,
})

export const StyledButton = styled(Button, {
  px: 32
})

export const LikeButton = styled('button', {
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'filter 0.2s',
  display: 'flex',
  alignItems: 'flex-end',
  color: '$grayDark',
  gap: 8,

  '&:hover': {
    filter: 'brightness(0.7)',
  },

})

export const Liked = css({
  color: '$primary',
  stroke: '$primary'
})
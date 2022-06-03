import { styled } from 'styles/theme'

export const Icon = styled('button', {
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
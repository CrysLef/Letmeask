import { styled } from "styles/theme"

export const Separator = styled('div', {
  display: 'flex',
  alignItems: 'center',

  color: '$grayMedium',
  fontSize: '1.4rem',

  '&::before': {
      content: '',
      flex: 1,
      backgroundColor: '$grayMedium',
      height: 1,
      marginRight: 16,
  },

  '&::after': {
      content: '',
      flex: 1,
      backgroundColor: '$grayMedium',
      height: 1,
      marginLeft: 16,
  },

  '@media (max-width: 400px)': {
      fontSize: `1.4rem`,
  }
})


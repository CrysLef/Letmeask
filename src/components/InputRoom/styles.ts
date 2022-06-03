import { styled } from "styles/theme";

export const StyledInput = styled('input', {
  height: 50,
  borderRadius: 8,
  px: 16,
  backgroundColor: 'white',
  border: '1px solid $grayMedium',
  fontSize: '1.6rem',
  outline: 'none',

  '&:focus': {
    border: '1px solid $primary'
  }
})
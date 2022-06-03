import { Button } from 'components/Button';
import { styled } from 'styles/theme';
import { ReactComponent as Logo } from 'assets/images/logo.svg';


export const Header = styled('header', {
  padding: 24,
  borderBottom: '1px solid $grayLight',
})

export const Content = styled('div', {
  maxWidth: 1120,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (max-width: 600px)': {
    flexDirection: 'column',
    gap: 8,
  }
})

export const CodeWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: 8,
  }

})

export const StyledButton = styled(Button, {
  height: 40,
  px: 24
})

export const LogoImg = styled(Logo, {
  maxHeight: 45,
  cursor: 'pointer',
})
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { styled } from 'styles/theme'

export const AuthContainer = styled('div', {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
})

export const Main = styled('main', {
  flex: 8,
  px: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 320,
  textAlign: 'center',
  gap: 32

})

export const StyledLogo = styled(Logo, {
    margin: '0 auto',
    width: 155,
    height: 69,
})

/* .darkDiv {
     background: rgba( 254, 254, 254, 0.1 ),
     box-shadow: 0 8px 32px 0 rgba( 80, 38, 135, 0.37 ),
     backdrop-filter: blur( 11px ) saturate(180%),
     -webkit-backdrop-filter: blur( 11px ) saturate(180%),
     border-radius: 10px,
     border: 1px solid rgba( 255, 255, 255, 0.18 ),
     max-width: 500px,
     padding: 90px,

     @media (max-width: 500px) {
         padding: 30px,
     }
}
*/
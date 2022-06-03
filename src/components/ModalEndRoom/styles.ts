import { styled } from 'styles/theme'


export const Container = styled('div', {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(4, 9, 17, .8)',
    display: 'flex',
})

export const Modal = styled('div', {
    width: 590,
    backgroundColor: '$white',
    margin: 'auto',
    borderRadius: 8,
    fontFamily: '$poppins',
    textAlign: 'center',
    py: 64,

    '@media (max-width: 700px)': {
        width: '80%',
    }

})

export const Title = styled('h2', {
    fontSize: '2.4rem',
    fontWeight: 700,
    marginBottom: 12,
    color: '$text',
})

export const Description = styled('p', {
    fontSize: '1.6rem',
    marginBottom: 24,
    color: '$grayDark',
})

export const ButtonsWrapper = styled('div', {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 550px)': {
        flexDirection: 'column',
    }
})
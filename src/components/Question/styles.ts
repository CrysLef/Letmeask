import { styled } from 'styles/theme'


export const Container = styled('div', {
    backgroundColor: '$whiteDetails',
    borderRadius: 8,
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.09)',
    padding: 24,

    '& + &': {
        marginTop: 8,
    },

    '@media (max-width: 900px)': {
        width: '80%',
        margin: '0 auto',
    },

    variants: {
        type: {
            primary: {
                backgroundColor: '$whiteDetails',
                border: 'none'
            },
            highlighted: {
                backgroundColor: '#F4F0FF',
                border: '1px solid $primary',
            },
            answered: {
                backgroundColor: '$grayLight',
                border: 'none',
            }
        }
    },
    defaultVariants: {
        type: 'primary'
    }

})

export const Text = styled('p', {
    fontSize: '1.6rem',
    textAlign: 'justify',
    color: '$text',
})

export const Footer = styled('footer', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,

    '@media (max-width: 500px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
    }
})

export const UserInfo = styled('div', {
    display: 'flex',
    alignItems: 'center',
})

export const Avatar = styled('img', {
    width: 32,
    height: 32,
    borderRadius: '50%',
})

export const UserName = styled('span', {
    marginLeft: 8,
    color: '$text',
    fontSize: '1.4rem',
})

export const Icons = styled('div', {
    display: 'flex',
    gap: 16,
    
    '@media (max-width: 500px)': {
        alignSelf: 'flex-end',
    }
})
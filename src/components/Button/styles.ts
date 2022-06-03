import { styled } from "styles/theme";

export const Button = styled('button', {
    fontSize: '1.6rem',
    height: 50,
    borderRadius: 8,
    fontWeight: 500,
    px: 32,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    cursor: 'pointer',
    border: 0,

    transition: 'filter 0.2s',


    '&:not(:disabled):hover': {
        filter: 'brightness(0.9)'
    },

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: '$primary',
                color: '#FFF',
            },
            google: {
                backgroundColor: 'transparent',
                color: '$text',
                border: '1px solid $grayMedium'
            },
            danger: {
                backgroundColor: '$danger',
                color: '$whiteDetails'
            },
            cancel: {
                backgroundColor: '$grayLight',
                color: '$grayDark'
            },
            outlined: {
                backgroundColor: 'transparent',
                color: '$primary',
                border: '1px solid $primary'
            }
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})
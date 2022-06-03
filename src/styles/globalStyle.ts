import { globalCss } from 'styles/theme'


export const GlobalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    'html': {
        fontSize: '62.5%',
    },
    
    'body': {
        backgroundColor: '$background',
        color: '$text',
    },
    
   'body, input, button, textarea': {
        fontWeight: 400,
        fontFamily: '$roboto',
    }
})
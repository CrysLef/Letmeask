import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    body, input, button, textarea {
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }

    .toggle {
            position: fixed;
            top: 0;
            right: 0;
            margin: 15px;

            @media (max-width: 1400px) {
                display: none;
            }
        }
`
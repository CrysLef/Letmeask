import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(4, 9, 17, .8);
    display: flex;
`

export const Modal = styled.div`
    width: 590px;
    background-color: ${props => props.theme.colors.background};
    margin: auto;
    border-radius: 8px;
    font-family: 'Poppins',sans-serif;
    text-align: center;
    padding: 64px 0;
        
        svg {
            width: 48px;
            height: 48px;
            
            path {
                stroke: #E73F5D;
            }
        } 
        h2 {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: ${props => props.theme.colors.text};
        }
        
        p {
            font-size: 1.6rem;
            margin-bottom: 24px;
            color: ${props => props.theme.colors.grayDark};
        }

        @media (max-width: 700px) {
            width: 80%;
        }

`

export const ButtonsWrapper = styled.div`

    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    button {
        font-size: 1.6rem;
        padding: 13px 32px;
        border-radius: 8px;
        border: 0;
        background-color: #DBDCDD;
        color: #737380;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .redButton {
        background-color: #E73F5D;
        color: #F8F8F8;
    }

    @media (max-width: 550px) {
        flex-direction: column;
    }
`
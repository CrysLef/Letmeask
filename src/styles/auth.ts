import styled from 'styled-components';


export const AuthContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        .darkDiv {
            background: rgba( 254, 254, 254, 0.1 );
            box-shadow: 0 8px 32px 0 rgba( 80, 38, 135, 0.37 );
            backdrop-filter: blur( 11px ) saturate(180%);
            -webkit-backdrop-filter: blur( 11px ) saturate(180%);
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            max-width: 500px;
            padding: 90px;
        }
    }
` 

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    max-width: 320px;
    text-align: center;

    > img {
        align-self: center;
    }

    h2 {
        font-size: 24px;
        margin: 56px 0 24px;
        font-family: 'Poppins', sans-serif;
    }

    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background-color: ${props => props.theme.colors.white};
            border: 1px solid ${props => props.theme.colors.grayMedium};
        }

        button {
            margin-top:16px
        }

        button, input {
            width:100%;
        }
    }

    p {
        font-size: 14px;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.grayDark : props.theme.colors.grayLight};
        margin-top: 16px;

        a {
            color: #E559F9;
        }
    }
`

export const ButtonCreateRoom = styled.button`

    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: #EA4335;
    color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9);
    }

`

export const Separator = styled.div`
    
    display: flex;
    align-items: center;
    margin: 32px 0;

    color: ${props => props.theme.colors.grayMedium};
    font-size: 14px;

    &::before {
        content: '';
        flex: 1;
        background-color: ${props => props.theme.colors.grayMedium};
        height: 1px;
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        background-color: ${props => props.theme.colors.grayMedium};
        height: 1px;
        margin-left: 16px;
    }
`
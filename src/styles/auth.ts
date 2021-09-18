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
            background-color: #FFF;
            border: 1px solid #A8A8B3;
        }

        button {
            margin-top:16px
        }

        button, input {
            width: 100%;
        }
    }

    p {
        font-size: 14px;
        color: #737380;
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
    color: #FFF;

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

    color: #A8A8B3;
    font-size: 14px;

    &::before {
        content: '';
        flex: 1;
        background-color: #A8A8B3;
        height: 1px;
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        background-color: #A8A8B3;
        height: 1px;
        margin-left: 16px;
    }
`
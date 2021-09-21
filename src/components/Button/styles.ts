import styled from 'styled-components';


export const Button = styled.button`
    font-size: 1.6rem;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: #835afd;
    color: #FFF;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

        img {
            margin-right: 8px;
        }

        &.outlined {
            background-color: transparent;
            color: #835AFD;
            border: 1px solid #835AFD;
        }

        &:not(:disabled):hover {
            filter: brightness(0.9);
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
`
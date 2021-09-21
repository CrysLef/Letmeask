import styled from 'styled-components'


export const Aside = styled.aside`

    flex: 7;

    background-color: #835afd;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 102px 80px;

    img {
        min-width: 320px;
    }

    strong {
        font-size: 3.6rem;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
    }

    p {
        font-size: 2.4rem;
        line-height: 32px;
        margin-top: 16px;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`
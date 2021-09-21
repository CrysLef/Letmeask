import styled from 'styled-components';

export const Header = styled.header`

    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.title === 'light' ? props.theme.colors.whiteDividerHeader : props.theme.colors.grayDark};

    .toggle {
        margin: 35px;
    }

    .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            max-height: 45px;
            cursor: pointer;
        }

        > div {
            display: flex;
            gap: 16px;

            button {
                height: 40px;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                gap: 8px;
            }

        }
        
        @media (max-width: 600px) {
            flex-direction: column;
            gap: 8px;
        }
    }


`

export const Main = styled.main`

    max-width: 800px;
    margin: 0 auto;

    .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;

        
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.4rem;
            color: ${props => props.theme.colors.text};
        }
        
        span {
            margin-left: 16px;
            background-color: #E559F9;
            border-radius: 9999px;
            padding: 8px 16px;
            color: ${props => props.theme.colors.white};
            font-weight: 500;
            font-size: 1.4rem;
        }

        @media (max-width:500px) {
            flex-direction: column;
            gap: 8px;
        }
        
        @media (max-width: 900px) {
            justify-content: center;
        }
    }

    .question-list {
            margin-top: 32px;
        }
`

export const Form = styled.form`

    @media (max-width: 900px) {
        width: 80%;
        margin: 0 auto;
    }

    textarea {
        font-size: 1.6rem;
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background-color: ${props => props.theme.title === 'light' ? props.theme.colors.whiteDetails : props.theme.colors.grayDark};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.text : props.theme.colors.white};

        &::placeholder {
            color: ${props => props.theme.title === 'light' ? props.theme.colors.grayDark : props.theme.colors.grayLight };
        }
    }

    .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            span {
                margin-left: 8px;
                color: ${props => props.theme.colors.text};
                font-weight: 500;
                font-size: 1.4rem;
            }

            @media (max-width:500px) {
                    display: none;
                }
        }

        > span {
            font-size: 1.4rem;
            color: ${props => props.theme.colors.grayDark};
            font-weight: 500;

            button {
                background: transparent;
                color: #835AFD;
                text-decoration: underline;
                font-size: 1.4rem;
                font-weight: 500;
                border: 0;
                cursor: pointer;
            }
        }

        @media (max-width:500px) {
            flex-direction: column;
            gap: 8px;
        }
    }
`

export const WithoutQuestions = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: darkkhaki; */
        width: 45%;
        margin: 0 auto;

        img {
            max-width: 150px;
            margin-top: 64px;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 2.4rem;
            text-align: center;
        }

        p {
            font-size: 1.6rem;
            color: ${props => props.theme.title === 'light' ? props.theme.colors.grayDark : props.theme.colors.grayMedium};;
            margin-top: 8px;
            text-align: center;
        }

        @media (max-width: 700px) {
            width: 80%;
        }
`
import styled from 'styled-components'


export const Container = styled.div`

    background-color: ${props => props.theme.title === 'light' ? props.theme.colors.whiteDetails : props.theme.colors.grayDark};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + & {
        margin-top: 8px;
    }

    &.isHighlighted {
        background-color: ${props => props.theme.title === 'light' ? '#F4F0FF' : '#DBCFFD'};
        border: 1px solid #835AFD;

        p {
            color: ${props => props.theme.title === 'dark' && props.theme.colors.background};
        }

        footer .user-info span {
            color: #29292E;
        }
    }

    &.isAnswered {
        background-color: #D8DCDD;

        p {
            color: ${props => props.theme.title === 'dark' && props.theme.colors.grayDark};
        }

        svg path {
            stroke: ${props => props.theme.title === 'dark' && props.theme.colors.grayDark};
        }

        footer .user-info img {
            filter: grayscale(1);
        }

        footer span {
            color: ${props => props.theme.title === 'dark' && props.theme.colors.grayDark};
        }
    }

    p {
        font-size: 1.6rem;
        text-align: justify;
        color: ${props => props.theme.colors.text};
    }

    @media (max-width: 900px) {
        width: 80%;
        margin: 0 auto;
    }

`

export const Footer = styled.footer`
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

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
                color: ${props => props.theme.title === 'light' ? props.theme.colors.grayDark : props.theme.colors.grayLight};
                font-size: 1.4rem;
            }
        }

        > div {
            display: flex;
            gap: 16px;
        }

        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;
            transition: filter 0.2s;

            svg path,circle {
                    stroke: ${props => props.theme.title === 'dark' && props.theme.colors.white};
                }

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: ${props => props.theme.colors.grayDark};
                gap: 8px;
            }

            &.liked {
                color: ${props => props.theme.title === 'light' ? '#835AFD' : '#603EC6'};

                svg path {
                    stroke: ${props => props.theme.title === 'light' ? '#835AFD' : '#603EC6'};
                }
            }

            &:hover {
                filter: brightness(0.7);
            }

        }

        @media (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .adminIcons {

                @media (max-width: 500px) {
                    align-self: flex-end;
                }
            }
        }
`
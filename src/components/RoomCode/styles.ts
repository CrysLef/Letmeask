import styled from 'styled-components'

export const CodeWrapper = styled.button`

    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background-color: #FFF;
    border: 1px solid #835AFD;
    cursor: pointer;

    display: flex;
    
    > div {
        background-color: #835AFD;
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        transition: filter .2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }


    span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
    transition: color .2s;
    
    &:hover {
        color: #835AFD;
    }
    
    }
`
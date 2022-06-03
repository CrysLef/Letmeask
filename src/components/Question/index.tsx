import { ReactNode } from 'react';

import * as S from './styles';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

export function Question({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children
} : QuestionProps) {
    return(
        <S.Container 
            type={isAnswered ? 'answered' : ( isHighlighted ? 'highlighted' : 'primary' )}
        >
            <S.Text>{content}</S.Text>
            <S.Footer>
                <S.UserInfo>
                    <S.Avatar src={author.avatar} alt={author.name} />
                    <S.UserName>{author.name}</S.UserName>
                </S.UserInfo>
                <S.Icons>{children}</S.Icons>
            </S.Footer>
        </S.Container>
    )
}
import { ReactNode } from 'react';
import cx from 'classnames'

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
        className={cx(
            'question',
            { isAnswered: isAnswered},
            { isHighlighted: isHighlighted && !isAnswered},
        )}
        >
            <p>{content}</p>
            <S.Footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </S.Footer>
        </S.Container>
    )
}
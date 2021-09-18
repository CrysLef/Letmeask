import { ButtonHTMLAttributes } from 'react';

import  * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

export function Button({ isOutlined = false,...props } :  ButtonProps) {
    return (
        <S.Button className={isOutlined ? 'outlined' : ''} 
        {...props} 
        />
    )
}


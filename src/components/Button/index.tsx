import { ButtonHTMLAttributes, ReactNode } from 'react';

import  * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'google' | 'danger' | 'cancel' | 'outlined' | undefined;
    children: ReactNode;
}

export function Button({ variant, children, ...props } :  ButtonProps) {
    return (
        <S.Button variant={variant} {...props} >
            { children }
        </S.Button>
    )
}


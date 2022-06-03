import { FormHTMLAttributes, ReactNode } from "react"
import { StyledForm } from './styles'

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...props }: IForm) => {
  return(
    <StyledForm {...props} >
      { children }
    </StyledForm>
  )
}
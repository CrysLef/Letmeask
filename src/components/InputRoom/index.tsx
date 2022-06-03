import { InputHTMLAttributes } from "react"
import { StyledInput } from './styles'

export const InputRoom = ({...props}: InputHTMLAttributes<HTMLInputElement>) => {
  return(
    <StyledInput {...props} />
  )
}
import { ButtonHTMLAttributes, ReactNode } from "react"
import { Icon } from './styles'

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export const IconButton = ({ label, children, ...props }: IconProps) => {
  return(
    <Icon
      type="button"
      aria-label={label}
      {...props}
    >
      { children }
    </Icon>
  )
}
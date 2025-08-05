import { ReactNode } from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface ButtonHeaderProps extends TouchableOpacityProps {
  children: ReactNode
}

export default function ButtonHeader({ children, ...rest }: ButtonHeaderProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>
}

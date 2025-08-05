import { Pressable, PressableProps } from "react-native"

interface ButtonProps extends PressableProps {
  // Define any additional props if needed
  children?: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return <Pressable {...rest}>{children}</Pressable>
}

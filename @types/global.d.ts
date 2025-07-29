import type { SvgProps as DefaultSvgProps } from "react-native-svg"

export declare module "react-native-svg" {
  interface SvgProps extends DefaultSvgProps {
    className?: string
  }
}
export declare module "phosphor-react-native" {
  interface IconProps extends DefaultIconProps {
    className?: string
  }
}

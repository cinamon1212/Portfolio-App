import { Colors, StyleProps, ThemeConfig } from '@chakra-ui/react'

export type ThemeType = {
  config: ThemeConfig
  colors: Colors
  styles: StylesType
}

export type StylesType = {
  global: Record<string, StyleProps>
}

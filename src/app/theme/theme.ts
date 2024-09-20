import { extendTheme } from '@chakra-ui/react'
import { config } from './config'
import { colors } from './colors'
import { StylesType, ThemeType } from '@/shared'

import '@fontsource-variable/comfortaa'

const styles: StylesType = {
  global: {
    '#root': {
      minH: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden',
    },
    html: { scrollBehavior: 'smooth', overflowX: 'hidden' },
    body: {
      minH: '100vh',
      fontFamily: `'Comfortaa Variable', sans-serif`,
      fontWeight: 400,
      bgGradient: 'radial(gray.800, gray.900, black)',
      textColor: 'gray.100',
      p: '0 !important',
      overflowX: 'hidden',
    },
  },
}

export const theme = extendTheme({
  config,
  colors,
  styles,
}) as ThemeType

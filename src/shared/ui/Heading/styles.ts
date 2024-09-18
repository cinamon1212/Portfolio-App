import { defineStyle, HeadingProps } from '@chakra-ui/react'

export const customHeadingStyles = defineStyle({
  as: 'h2',
  textColor: 'yellow.50',
  fontSize: { base: '34px', sm: '38px', md: '48px' },
  fontWeight: 400,
  fontFamily: `'Comfortaa Variable', sans-serif`,
}) as HeadingProps

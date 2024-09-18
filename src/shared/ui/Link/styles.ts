import { defineStyle, LinkProps } from '@chakra-ui/react'

export const linkStyles = defineStyle({
  textColor: 'yellow.50',
  fontWeight: 300,
  transition: 'all 0.5s ease-out',
  borderBottom: '2px solid',
  borderColor: 'gray.900',
  _hover: {
    textColor: 'yellow.100',
    borderColor: 'yellow.100',
  },
}) as LinkProps

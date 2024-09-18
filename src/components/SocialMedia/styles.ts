import { BoxProps, defineStyle, ListProps } from '@chakra-ui/react'

export const socialMediaListStyles = defineStyle({
  display: 'flex',
  position: 'fixed',
  bottom: '10px',
  left: { base: '1%', sm: '2%', lg: '4%' },
  flexDirection: 'column',
  gap: { base: '10px', md: '14px' },
  alignItems: 'center',
}) as ListProps

export const lineStyles = defineStyle({
  w: '2px',
  h: { base: '48px', md: '60px' },
  bgColor: 'gray.600',
}) as BoxProps

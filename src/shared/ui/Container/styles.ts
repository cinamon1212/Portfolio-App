import { ContainerProps, defineStyle } from '@chakra-ui/react'

export const containerStyles = defineStyle({
  pt: { base: '100px', sm: '120px', md: '140px' },
  as: 'section',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: { base: '60px', sm: '80px' },
}) as ContainerProps

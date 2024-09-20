import { BoxProps, ContainerProps, defineStyle, TextProps } from '@chakra-ui/react'

export const contactTextStyles = defineStyle({
  fontSize: { base: '14px', sm: '16px', md: '18px' },
  textColor: 'gray.400',
  textAlign: 'center',
  fontWeight: 300,
}) as TextProps

export const containerStyles = defineStyle({
  w: { base: '90%', md: '80%', lg: '50%' },
  id: 'Contact',
}) as ContainerProps

export const footerTextStyles = defineStyle({
  fontSize: { base: '10px', sm: '12px', md: '14px' },
  textColor: 'gray.400',
  mt: { base: '60px', sm: '80px', md: '100px', lg: '120px' },
  mb: { base: '18px', md: '24px' },
})

export const textContainerStyles = defineStyle({
  transition: 'opacity 0.5s',
  gap: '40px',
})

export const arrowWrapperStyles = defineStyle({
  position: 'absolute',
  width: '80%',
  h: { base: '200px', sm: '220px', md: '270px', lg: '300px' },
  left: '10%',
}) as BoxProps

export const arrowItemStyles = defineStyle({
  transform: 'auto',
  bgColor: 'gray.200',
  w: '2px',
  h: { base: '18px', sm: '22px', md: '28px', lg: '38px', xl: '48px' },
  position: 'absolute',
  transition: 'opacity 0.5s',
  opacity: 0,
}) as BoxProps

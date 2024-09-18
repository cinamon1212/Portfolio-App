import { defineStyle, TextProps } from '@chakra-ui/react'

export const contactTextStyles = defineStyle({
  fontSize: { base: '14px', sm: '16px', md: '18px' },
  textColor: 'gray.400',
  textAlign: 'center',
  fontWeight: 300,
}) as TextProps

export const containerStyles = defineStyle({
  w: { base: '90%', md: '80%', lg: '50%' },
  id: 'Contact',
})

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

import { BoxProps, ContainerProps, defineStyle, ImgProps, TextProps } from '@chakra-ui/react'

export const containerStyles = defineStyle({
  maxW: '90%',
  gap: { base: '20px', xl: '120px' },
  flexDirection: { base: 'column', xl: 'row' },
  pt: { base: '100px', sm: '120px', md: '140px', lg: '160px', xl: '200px' },
  id: 'About',
}) as ContainerProps

export const infoStackStyles = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: { base: 'center', xl: 'flex-start' },
  maxW: '600px',
  order: { base: 1, xl: 0 },
}) as BoxProps

export const avatarStyles = defineStyle({
  src: '/myPhoto.jpeg',
  alt: 'avatar',
  borderRadius: '50%',
  w: { base: '280px', sm: '400px', md: '450px', xl: '500px' },
  h: { base: '280px', sm: '400px', md: '450px', xl: '500px' },
  order: { base: 0, xl: 1 },
  boxShadow: '2px 2px 10px #FEFCBF',
  transition: 'opacity 1s, transform 1s',
  opacity: 0,
  transform: 'translateX(100px)',
}) as ImgProps

const aboutTextAnimationProps = {
  opacity: 0,
  transform: 'translateX(-100px)',
  transition: 'opacity 0.5s, transform 0.5s',
}

export const jobTextStyles = defineStyle({
  bgGradient: 'linear(to-r, gray.100, yellow.400)',
  bgClip: 'text',
  fontSize: { base: '18px', sm: '24px', md: '30px' },
  mb: { base: '20px', sm: '30px', xl: '20px' },
  fontStyle: 'italic',
  fontWeight: 600,
  ...aboutTextAnimationProps,
}) as TextProps

export const nameStyles = defineStyle({
  fontSize: { base: '28px', sm: '42px', md: '52px', lg: '62px' },
  mb: { base: '0', xl: '40px' },
  fontWeight: 600,
  textAlign: 'center',
  as: 'h1',
  ...aboutTextAnimationProps,
}) as TextProps

export const expTextStyles = defineStyle({
  fontSize: { base: '10px', sm: '12px', md: '14px' },
  fontWeight: 300,
  textAlign: { base: 'center', xl: 'start' },
  maxW: { base: '500px', md: 'none' },
  mt: { base: '20px', sm: '30px', xl: '0' },
  textColor: 'gray.400',
  ...aboutTextAnimationProps,
}) as TextProps

export const downloadCvButtonStyles = defineStyle({
  mt: '20px',
  ...aboutTextAnimationProps,
})

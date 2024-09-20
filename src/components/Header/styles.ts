import { defineStyle, ContainerProps, BoxProps, StackProps, LinkProps, ListProps, ButtonProps } from '@chakra-ui/react'

export const headerStyles = defineStyle({
  as: 'header',
  position: 'fixed',
  transition: 'transform 0.5s, opacity 0.5s',
  py: { base: '18px', md: '24px' },
  w: '60%',
  zIndex: 10,
}) as BoxProps

export const containerStyles = defineStyle({
  as: 'nav',
  maxW: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '24px',
  alignItems: 'center',
  bgColor: 'gray.900',
  p: { base: '16px 28px', md: '20px 32px' },
  borderRadius: '42px',
  boxShadow: '1px 1px 6px #4A5568',
}) as ContainerProps

export const navStyles = defineStyle({
  display: 'flex',
}) as ListProps

export const linkStyles = defineStyle({
  textTransform: 'uppercase',
  fontSize: { base: '12px', md: '14px' },
  fontWeight: 600,
}) as LinkProps

export const mobileMenuStyles = defineStyle({
  as: 'nav',
  position: 'fixed',
  top: '0',
  zIndex: '10',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  bgGradient: 'radial(gray.800, gray.900, black)',
  transform: 'translateX(-500px)',
  opacity: 0,
  transition: 'transform 0.5s, opacity 0.5s',
}) as StackProps

export const headerIconStyles = defineStyle({
  boxSize: { base: '20px', sm: '24px' },
  color: 'yellow.50',
  _hover: { color: 'yellow.100' },
})

export const mobileNavLinksStyles = defineStyle({
  flexDirection: 'column',
  alignItems: 'center',
  gap: '60px',
  mt: '200px',
  fontSize: '42px',
}) as ListProps

export const closeButtonStyles = defineStyle({
  position: 'absolute',
  right: '10%',
  top: '24px',
  size: '30px',
}) as ButtonProps

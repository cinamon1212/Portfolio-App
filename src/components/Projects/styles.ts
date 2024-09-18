import {
  ContainerProps,
  defineStyle,
  ImgProps,
  LinkProps,
  ListItemProps,
  ListProps,
  StackProps,
  TextProps,
} from '@chakra-ui/react'

export const containerStyles = defineStyle({
  id: 'Projects',
  maxW: { base: '90%', lg: '80%' },
}) as ContainerProps

export const imgWrapperStyles = defineStyle({
  w: { base: '100%', xl: '70%' },
  position: 'relative',
  bgColor: 'yellow.100',
  borderRadius: '4px',
  target: '_blank',
}) as LinkProps

export const projectImgStyles = defineStyle({
  opacity: 1,
  transition: 'opacity .5s ease-out',
  borderRadius: '4px',
  w: 'full',
  h: 'full',
  objectFit: 'cover',
  _hover: {
    opacity: 0.6,
  },
}) as ImgProps

export const projectsListStyles = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  gap: { base: '100px', md: '160px' },
  alignItems: 'center',
  justifyContent: 'center',
}) as ListProps

export const infoBlockStyles = defineStyle({
  w: { base: '100%', xl: '30%' },
  gap: { base: '20px', sm: '28px' },
  position: 'relative',
  alignItems: 'center',
}) as StackProps

export const twoPartFlexStyles = defineStyle({
  display: 'flex',
  gap: '20px',
  flexDirection: { base: 'column', xl: 'row' },
  alignItems: 'center',
  transition: 'opacity 0.5s, transform 0.5s',
}) as ListItemProps

export const projectNameStyles = defineStyle({
  fontSize: { base: '20px', sm: '28px' },
  fontWeight: 300,
  fontStyle: 'italic',
}) as TextProps

export const descriptionStyles = defineStyle({
  position: 'relative',
  w: { base: '100%', sm: '60%', xl: '120%' },
  p: { base: '10px 18px', sm: '14px 24px', xl: '20px 30px' },
  bgColor: 'gray.800',
  borderRadius: '4px',
  fontSize: { base: '10px', sm: '12px', md: '14px', xl: '14px' },
  textColor: 'gray.400',
  boxShadow: '2px 2px 10px #4A5568',
  fontWeight: 300,
  zIndex: '1',
}) as TextProps

export const technologyStyles = defineStyle({
  as: 'li',
  bgGradient: 'linear(to-r, gray.100, yellow.400)',
  color: 'black',
  borderRadius: '4px',
  p: '2px 8px',
  w: 'auto',
  listStyle: 'none',
}) as ListItemProps

export const techListStyles = defineStyle({
  flexWrap: 'wrap',
  display: 'flex',
  gap: '12px',
}) as ListProps

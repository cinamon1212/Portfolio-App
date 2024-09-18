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
  id: 'Experience',
  maxW: { base: '90%', md: '90%', lg: '60%' },
}) as ContainerProps

export const expListStyles = defineStyle({
  gap: { base: '100px', md: '160px' },
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}) as ListProps

export const expListItemStyles = defineStyle({
  display: 'flex',
  as: 'li',
  gap: { base: '18px', md: '80px' },
  alignItems: 'center',
  flexDirection: { base: 'column', md: 'row' },
  transition: 'opacity 0.5s, transform 0.5s',
}) as ListItemProps

export const titleCompanyStyles = defineStyle({
  w: { base: '100%', md: '40%' },
  mb: 'auto',
  alignItems: { base: 'center', md: 'flex-start' },
  gap: '18px',
}) as StackProps

export const descriptionCompanyStyles = defineStyle({
  w: { base: '100%', md: '60%' },
  alignItems: { base: 'center', md: 'flex-start' },
  gap: '18px',
}) as StackProps

export const companyLabelStyles = defineStyle({
  fontSize: { base: '18px', md: '24px' },
  display: 'flex',
  alignItems: 'center',
  lineHeight: '36px',
  gap: '8px',
  target: '_blank',
  fontStyle: 'italic',
}) as LinkProps

export const companyPeriodStyles = defineStyle({
  fontSize: { base: '10px', sm: '12px', md: '14px' },
  fontWeight: 300,
  textAlign: { base: 'center', md: 'start' },
  textColor: 'gray.400',
}) as TextProps

export const positionStyles = defineStyle({
  fontSize: { base: '18px', md: '24px' },
  fontStyle: 'italic',
  fontWeight: 300,
}) as TextProps

export const descriptionStyles = defineStyle({
  textColor: 'gray.400',
  fontSize: { base: '10px', sm: '12px', md: '14px' },
  textAlign: { base: 'center', md: 'start' },
  w: { base: '80%', md: '100%' },
  fontWeight: 300,
}) as TextProps

export const companyIconStyles = defineStyle({
  w: '20px',
  height: '20px',
  borderRadius: '4px',
}) as ImgProps

export const dividerStyles = defineStyle({
  bg: 'gray.600',
  h: '1px',
  w: 'full',
})

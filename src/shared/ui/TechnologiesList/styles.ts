import { defineStyle, ListItemProps, ListProps } from '@chakra-ui/react'

export const technologyStyles = defineStyle({
  bgGradient: 'linear(to-r, gray.100, yellow.400)',
  color: 'black',
  borderRadius: '4px',
  p: '2px 8px',
  w: 'auto',
  fontWeight: 600,
  fontSize: { base: '12px', md: '14px' },
}) as ListItemProps

export const techListStyles = defineStyle({
  flexWrap: 'wrap',
  display: 'flex',
  gap: '12px',
}) as ListProps

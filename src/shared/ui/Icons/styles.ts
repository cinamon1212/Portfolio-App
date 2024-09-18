import { defineStyle, IconProps } from '@chakra-ui/react'

export const iconStyles = defineStyle({
  fill: 'gray.400',
  _hover: { fill: 'gray.100' },
  width: { base: '22px', sm: '26px' },
  height: { base: '22px', sm: '26px' },
}) as IconProps

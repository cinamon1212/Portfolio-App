import { TooltipProps, Tooltip as ChakraTooltip } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { tooltipStyles } from './styles'

export const Tooltip = ({ children, ...props }: PropsWithChildren<TooltipProps>) => {
  return (
    <ChakraTooltip {...tooltipStyles} {...props}>
      {children}
    </ChakraTooltip>
  )
}

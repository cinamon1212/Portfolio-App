import { LinkProps, Link as ChakraLink } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { linkStyles } from './styles'

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <ChakraLink {...linkStyles} {...props}>
      {children}
    </ChakraLink>
  )
}

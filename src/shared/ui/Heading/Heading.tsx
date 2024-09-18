import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { customHeadingStyles } from './styles'

export const Heading = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <ChakraHeading {...customHeadingStyles} {...props}>
      {children}
    </ChakraHeading>
  )
}

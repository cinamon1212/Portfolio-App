import { ContainerProps, Container as ChakraContainer } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { containerStyles } from './styles'

export const Container = ({ children, ...props }: PropsWithChildren<ContainerProps>) => {
  return (
    <ChakraContainer {...containerStyles} {...props}>
      {children}
    </ChakraContainer>
  )
}

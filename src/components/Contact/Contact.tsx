import { contactText } from '@/constants'
import { Container, DownloadCV, Heading } from '@/shared'
import { Text, VStack } from '@chakra-ui/react'
import { contactTextStyles, containerStyles, footerTextStyles, textContainerStyles } from './styles'
import { useInView } from 'react-intersection-observer'
import { myNameText } from '@/constants/contactText'

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <Container {...containerStyles}>
      <Heading>Что дальше?</Heading>
      <VStack {...textContainerStyles} ref={ref} opacity={inView ? 1 : 0}>
        <Text {...contactTextStyles}>{contactText}</Text>
        <DownloadCV />
      </VStack>
      <Text {...footerTextStyles}>
        &copy;
        {new Date().getFullYear()}
        {'. ' + myNameText}
      </Text>
    </Container>
  )
}

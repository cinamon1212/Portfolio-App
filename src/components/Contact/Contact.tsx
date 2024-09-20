import { Container, DownloadCV, Heading } from '@/shared'
import { Box, Text, VStack } from '@chakra-ui/react'
import { contactTextStyles, containerStyles, footerTextStyles, textContainerStyles } from './styles'
import { useInView } from 'react-intersection-observer'
import { contactText, myNameText } from '@/constants'
import { ArrowToSocials } from './ArrowToSocials'

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <Box position={'relative'} w={'100%'}>
      <Container {...containerStyles}>
        <Heading>Что дальше?</Heading>
        <VStack {...textContainerStyles} ref={ref} opacity={inView ? 1 : 0}>
          <Text {...contactTextStyles}>{contactText}</Text>
          <DownloadCV zIndex={1} />
        </VStack>
        <Text {...footerTextStyles}>
          &copy;
          {new Date().getFullYear()}
          {'. ' + myNameText}
        </Text>
      </Container>
      <ArrowToSocials />
    </Box>
  )
}

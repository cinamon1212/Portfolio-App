import { useMediaQuery, VStack } from '@chakra-ui/react'
import { containerStyles, infoStackStyles } from './styles'
import { Title } from './Title'
import { Container } from '@/shared'
import { ImgAvatar } from './ImgAvatar'
import { ExpText } from './ExpText'
import { AnimatedDownloadCV } from './AnimatedDownloadCV'

export const About = () => {
  const [isLargerThan1280px] = useMediaQuery('(min-width: 1280px)')

  return (
    <Container {...containerStyles}>
      {!isLargerThan1280px && <Title />}
      <VStack {...infoStackStyles}>
        {isLargerThan1280px && <Title />}
        <ExpText />
        <AnimatedDownloadCV />
      </VStack>
      <ImgAvatar />
    </Container>
  )
}

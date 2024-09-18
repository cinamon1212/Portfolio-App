import { Text } from '@chakra-ui/react'
import { jobTextStyles, nameStyles } from './styles'
import { useStylePropsWithDelay } from '@/shared'
import { myNameText } from '@/constants'

export const Title = () => {
  const textsStyles = { opacity: 1, transform: 'translateX(0)' }

  const animationJobStyles = useStylePropsWithDelay(500, textsStyles)
  const animationNameStyles = useStylePropsWithDelay(0, textsStyles)

  return (
    <>
      <Text {...nameStyles} {...animationNameStyles}>
        {myNameText}
      </Text>
      <Text {...jobTextStyles} {...animationJobStyles}>
        Frontend-разработчик
      </Text>
    </>
  )
}

import { textAboutExp } from '@/constants'
import { expTextStyles } from './styles'
import { Text } from '@chakra-ui/react'
import { useStylePropsWithDelay } from '@/shared'

export const ExpText = () => {
  const animationStyles = useStylePropsWithDelay(1000, {
    opacity: 1,
    transform: 'translateX(0)',
  })

  return (
    <Text {...expTextStyles} {...animationStyles}>
      {textAboutExp}
    </Text>
  )
}

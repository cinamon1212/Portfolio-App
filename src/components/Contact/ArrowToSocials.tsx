import { arrowToSocialsItems } from '@/constants'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { arrowWrapperStyles } from './styles'
import { useInView } from 'react-intersection-observer'
import { ArrowItem } from './ArrowItem'

export const ArrowToSocials = () => {
  const { ref, inView } = useInView({ threshold: 0 })
  const [isLargerThan480px] = useMediaQuery('(min-width: 480px)')
  const [isLargerThan380px] = useMediaQuery('(min-width: 380px)')

  const arrowItemsToMap = isLargerThan480px
    ? arrowToSocialsItems
    : arrowToSocialsItems.filter((_, index) => index < 5 || index > 11)

  const top = isLargerThan480px ? '350px' : isLargerThan380px ? '280px' : '320px'

  return (
    <Box {...arrowWrapperStyles} top={top} ref={ref}>
      {arrowItemsToMap.map((item, index) => inView && <ArrowItem {...item} index={index} key={index} />)}
    </Box>
  )
}

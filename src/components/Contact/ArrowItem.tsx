import { Box, StyleProps } from '@chakra-ui/react'
import { arrowItemStyles } from './styles'
import { useStylePropsWithDelay } from '@/shared'

type Props = {
  index: number
} & StyleProps

export const ArrowItem = ({ index, rotate, bottom, left, right, top }: Props) => {
  const animationStyles = useStylePropsWithDelay(index * 300, { opacity: 1 })

  return (
    <Box
      rotate={rotate}
      right={right}
      top={top}
      bottom={bottom}
      left={left}
      {...arrowItemStyles}
      {...animationStyles}
    />
  )
}

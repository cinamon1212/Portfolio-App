import { Img } from '@chakra-ui/react'
import { avatarStyles } from './styles'
import { useStylePropsWithDelay } from '@/shared'

export const ImgAvatar = () => {
  const animationStyles = useStylePropsWithDelay(1000, {
    opacity: 1,
    transform: 'translateX(0)',
  })

  return <Img {...avatarStyles} {...animationStyles} />
}

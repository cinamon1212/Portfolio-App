import { Tooltip, Link, Img } from '@chakra-ui/react'
import { technologyImgStyles, technologyItemStyles } from './styles'
import { Technology, useStylePropsWithDelay } from '@/shared'

type Props = {
  index: number
} & Technology

export const TechnologyItem = ({ href, imgPath, name, index }: Props) => {
  const animationStyles = useStylePropsWithDelay(index * 350, technologyItemStyles)

  return (
    <Tooltip label={name}>
      <Link href={href} {...animationStyles} target='_blank'>
        <Img {...technologyImgStyles} src={imgPath} alt={'avatar'} />
      </Link>
    </Tooltip>
  )
}

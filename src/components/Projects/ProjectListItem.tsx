import { Project, TechnologiesList } from '@/shared'
import { ListItem, Link, Img, VStack, HStack, Text } from '@chakra-ui/react'
import { SourceLinks } from './SourceLinks'
import {
  twoPartFlexStyles,
  imgWrapperStyles,
  projectImgStyles,
  infoBlockStyles,
  projectNameStyles,
  descriptionStyles,
} from './styles'
import { useInView } from 'react-intersection-observer'

type Props = {
  index: number
  isLargerThanXl: boolean
  getAlignItemsProp: (index: number) => string
} & Project

export const ProjectListItem = ({
  description,
  imgPath,
  index,
  links,
  name,
  technologiesList,
  vercelLink,
  isLargerThanXl,
  getAlignItemsProp,
}: Props) => {
  const { ref, inView } = useInView({ threshold: 0.3 })

  let transform = index % 2 ? 'translateX(100px)' : 'translateX(-100px)'
  if (inView) transform = 'translateX(0)'

  return (
    <ListItem {...twoPartFlexStyles} key={name} ref={ref} transform={transform} opacity={inView ? 1 : 0}>
      <Link order={isLargerThanXl ? (index % 2 ? 1 : 0) : 0} href={vercelLink} {...imgWrapperStyles}>
        <Img src={imgPath} alt={name} {...projectImgStyles} />
      </Link>
      <VStack
        {...infoBlockStyles}
        order={isLargerThanXl ? (index % 2 ? 0 : 1) : 1}
        alignItems={getAlignItemsProp(index)}
      >
        <HStack gap={{ base: '20px', sm: '30px', md: '40px' }}>
          <Text {...projectNameStyles}>{name}</Text>
          {!isLargerThanXl && <SourceLinks links={links} />}
        </HStack>
        <Text {...descriptionStyles} textAlign={isLargerThanXl ? (index % 2 ? 'start' : 'end') : 'center'}>
          {description}
        </Text>
        <TechnologiesList
          technologiesList={technologiesList}
          ListProps={{
            justifyContent: isLargerThanXl ? (index % 2 ? 'flex-start' : 'flex-end') : 'center',
          }}
        />
        {isLargerThanXl && <SourceLinks links={links} />}
      </VStack>
    </ListItem>
  )
}

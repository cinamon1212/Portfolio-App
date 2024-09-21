import { Job, Link, TechnologiesList } from '@/shared'
import { ListItem, VStack, Img, Text } from '@chakra-ui/react'
import {
  expListItemStyles,
  titleCompanyStyles,
  companyLabelStyles,
  companyIconStyles,
  companyPeriodStyles,
  descriptionCompanyStyles,
  positionStyles,
  descriptionStyles,
} from './styles'
import { useInView } from 'react-intersection-observer'

type Props = {
  index: number
  isLargerThanMd: boolean
} & Job

export const ExpItem = ({
  company,
  description,
  imgPath,
  period,
  position,
  site,
  techList,
  index,
  isLargerThanMd,
}: Props) => {
  const { ref, inView } = useInView({ threshold: 0.3 })

  let transform = index % 2 === 0 ? 'translateX(100px)' : 'translateX(-100px)'
  if (inView) transform = 'translateX(0)'

  return (
    <ListItem {...expListItemStyles} opacity={inView ? 1 : 0} transform={transform} ref={ref}>
      <VStack order={isLargerThanMd ? (index % 2 ? 1 : 0) : 0} {...titleCompanyStyles}>
        <Link {...companyLabelStyles} href={site}>
          <Img src={imgPath} {...companyIconStyles} />
          {company}
        </Link>
        <Text {...companyPeriodStyles}>{period}</Text>
      </VStack>
      <VStack order={isLargerThanMd ? (index % 2 ? 0 : 1) : 1} {...descriptionCompanyStyles}>
        <Text {...positionStyles}>{position}</Text>
        <Text {...descriptionStyles}>{description}</Text>
        <TechnologiesList
          technologiesList={techList}
          ListProps={{
            justifyContent: isLargerThanMd ? 'flex-start' : 'center',
          }}
        />
      </VStack>
    </ListItem>
  )
}

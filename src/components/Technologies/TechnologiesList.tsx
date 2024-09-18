import { List } from '@chakra-ui/react'
import { technologiesListStyles } from './styles'
import { technologies } from '@/constants'
import { TechnologyItem } from './TechnologyItem'

export const TechnologiesList = () => {
  return (
    <List {...technologiesListStyles}>
      {technologies.map((technology, index) => (
        <TechnologyItem {...technology} index={index} key={technology.href} />
      ))}
    </List>
  )
}

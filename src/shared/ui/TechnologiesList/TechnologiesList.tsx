import { List, ListItem, ListItemProps, ListProps } from '@chakra-ui/react'
import { techListStyles, technologyStyles } from './styles'

type Props = {
  technologiesList: string[]
  ListProps?: ListProps
  ListItemProps?: ListItemProps
}

export const TechnologiesList = ({ technologiesList, ListProps, ListItemProps }: Props) => {
  return (
    <List {...techListStyles} {...ListProps}>
      {technologiesList.map((technology) => (
        <ListItem {...technologyStyles} {...ListItemProps} key={technology}>
          {technology}
        </ListItem>
      ))}
    </List>
  )
}

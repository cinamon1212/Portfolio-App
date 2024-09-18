import { projects } from '@/constants'
import { List, useMediaQuery } from '@chakra-ui/react'
import { projectsListStyles } from './styles'
import { ProjectListItem } from './ProjectListItem'

export const ProjectsList = () => {
  const [isLargerThanXl] = useMediaQuery('(min-width: 80em)')

  const getAlignItemsProp = (index: number) => {
    let alignItems = 'center'
    if (isLargerThanXl) {
      alignItems = index % 2 ? 'flex-start' : 'flex-end'
    }
    return alignItems
  }

  return (
    <List {...projectsListStyles}>
      {projects.map((project, index) => (
        <ProjectListItem
          key={project.name}
          {...project}
          index={index}
          isLargerThanXl={isLargerThanXl}
          getAlignItemsProp={getAlignItemsProp}
        />
      ))}
    </List>
  )
}

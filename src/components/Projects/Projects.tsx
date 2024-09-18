import { Container, Heading } from '@/shared'
import { containerStyles } from './styles'
import { ProjectsList } from './ProjectsList'

export const Projects = () => {
  return (
    <Container {...containerStyles}>
      <Heading>Проекты</Heading>
      <ProjectsList />
    </Container>
  )
}

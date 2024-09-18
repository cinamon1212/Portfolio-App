import { Container, Heading } from '@/shared'
import { containerStyles } from './styles'
import { ExpList } from './ExpList'

export const Experience = () => {
  return (
    <Container {...containerStyles}>
      <Heading>Опыт</Heading>
      <ExpList />
    </Container>
  )
}

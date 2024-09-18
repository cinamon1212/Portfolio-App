import { containerStyles } from './styles'
import { TechnologiesList } from './TechnologiesList'
import { Container, Heading } from '@/shared'

export const Technologies = () => {
  return (
    <Container {...containerStyles}>
      <Heading>Навыки</Heading>
      <TechnologiesList />
    </Container>
  )
}

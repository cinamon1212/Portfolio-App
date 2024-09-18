import { About, Header, Technologies, Experience, Projects, Contact, SocialMedia } from '@/components'
import { ChakraProvider } from './providers'

export const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <SocialMedia />
    </ChakraProvider>
  )
}

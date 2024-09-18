import { Img } from '@chakra-ui/react'

export const HhIcon = () => {
  return (
    <Img
      src='https://tech.hh.ru/api/logos/min-hh-white.png'
      w={{ base: '22px', sm: '26px' }}
      h={{ base: '22px', sm: '26px' }}
      opacity={0.5}
      _hover={{ opacity: 0.9 }}
    />
  )
}

import { Icon } from '@chakra-ui/react'

export const VisitIcon = () => {
  return (
    <Icon
      width={{ base: '28px', sm: '32px' }}
      height={{ base: '28px', sm: '32px' }}
      mt={{ base: '2px', sm: '0' }}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={'transparent'}
      _hover={{ '> path': { stroke: '#EDF2F7' } }}
    >
      <path
        d='M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19'
        stroke='#A0AEC0'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  )
}

import { ContainerProps, defineStyle, ImgProps, keyframes, ListProps } from '@chakra-ui/react'

export const containerStyles = defineStyle({
  maxW: '90%',
  id: 'Technologies',
}) as ContainerProps

export const technologiesListStyles = defineStyle({
  gap: { base: '20px', sm: '30px' },
  gridTemplateColumns: {
    base: 'repeat(3, 1fr)',
    sm: 'repeat(4, 1fr)',
    xl: 'repeat(8, 1fr)',
  },
  as: 'ul',
  display: 'grid',
}) as ListProps

export const technologyImgStyles = defineStyle({
  width: { base: '56px', sm: '70px' },
  height: { base: '56px', sm: '70px' },
  borderRadius: '8px',
}) as ImgProps

const technology = keyframes`  
  from {transform: translateY(0);}
  25% {transform: translateY(8px);}  
  50% {transform: translateY(0);} 
  75% {transform: translateY(-8px);}
  to {transform: translateY(0);}
`

export const technologyItemStyles = defineStyle({
  animation: `${technology} infinite linear 2s`,
})

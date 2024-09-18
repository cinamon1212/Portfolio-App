import { IconProps } from '@chakra-ui/react'

export type Project = {
  name: string
  description: string
  imgPath: string
  technologiesList: string[]
  vercelLink: string
  links: {
    href: string
    Icon: (props?: IconProps) => JSX.Element
  }[]
}

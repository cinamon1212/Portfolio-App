import { List, Link, IconProps } from '@chakra-ui/react'

type Props = {
  links: { Icon: (props?: IconProps) => JSX.Element; href: string }[]
}

export const SourceLinks = ({ links }: Props) => {
  return (
    <List gap={'6px'} display={'flex'} alignItems={'center'}>
      {links.map(({ Icon, href }) => (
        <Link href={href} target='_blank' key={href}>
          <Icon fill={'gray.400'} _hover={{ fill: 'gray.100' }} />
        </Link>
      ))}
    </List>
  )
}

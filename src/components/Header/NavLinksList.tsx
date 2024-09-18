import { headerLinks } from '@/constants'
import { linkStyles, navStyles } from './styles'
import { LinkProps, List, ListProps } from '@chakra-ui/react'
import { Link } from '@/shared'

type Props = {
  handleCloseMobileMenu?: () => void
  ListProps?: ListProps
  LinkProps?: LinkProps
}

export const NavLinksList = ({ handleCloseMobileMenu, ListProps, LinkProps }: Props) => {
  return (
    <List {...navStyles} {...ListProps}>
      {headerLinks.map(({ text, href }) => (
        <Link href={href} key={href} onClick={handleCloseMobileMenu} {...linkStyles} {...LinkProps}>
          {text}
        </Link>
      ))}
    </List>
  )
}

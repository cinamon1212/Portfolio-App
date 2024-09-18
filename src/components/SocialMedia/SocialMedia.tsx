import { socialMedia } from '@/constants/socialMedia'
import { Box, Link, List } from '@chakra-ui/react'
import { lineStyles, socialMediaListStyles } from './styles'

export const SocialMedia = () => {
  return (
    <List {...socialMediaListStyles}>
      {socialMedia.map(({ Icon, href }) => (
        <Link href={href} target='_blank' key={href}>
          <Icon />
        </Link>
      ))}
      <Box {...lineStyles} />
    </List>
  )
}

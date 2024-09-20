import { CloseButton, StyleProps, VStack } from '@chakra-ui/react'
import { closeButtonStyles, headerIconStyles, mobileMenuStyles, mobileNavLinksStyles } from './styles'
import { NavLinksList } from './NavLinksList'
import { enablePageScroll } from 'scroll-lock'
import { useState } from 'react'

type Props = {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({ setIsMobileNavOpen }: Props) => {
  const [animationStyles, setAnimationStyles] = useState<StyleProps>({ opacity: 1, transform: 'translateX(0px)' })

  const handleCloseMobileMenu = () => {
    setTimeout(() => {
      setIsMobileNavOpen(false)
      enablePageScroll()
    }, 500)
    setAnimationStyles({ opacity: 0, transform: 'translateX(-500px)' })
  }

  return (
    <VStack {...mobileMenuStyles} {...animationStyles}>
      <CloseButton onClick={handleCloseMobileMenu} {...closeButtonStyles} {...headerIconStyles} />
      <NavLinksList
        ListProps={mobileNavLinksStyles}
        handleCloseMobileMenu={handleCloseMobileMenu}
        LinkProps={{ fontSize: { base: '20px', md: '24px' }, w: 'fit-content' }}
      />
    </VStack>
  )
}

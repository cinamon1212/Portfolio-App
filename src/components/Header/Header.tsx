import { Box, Container, useMediaQuery } from '@chakra-ui/react'
import { containerStyles, headerIconStyles, headerStyles, linkStyles } from './styles'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { NavLinksList } from './NavLinksList'
import { disablePageScroll } from 'scroll-lock'
import { Link } from '@/shared'

export const Header = () => {
  const [isLargerThanLg] = useMediaQuery('(min-width: 992px)')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isScrollDown, setIsScrollDown] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(window.scrollY)

  useEffect(() => {
    const handleScrollListener = () => {
      const st = window.scrollY
      if (st >= lastScrollTop) setIsScrollDown(true)
      else if (st < lastScrollTop) setIsScrollDown(false)
      setLastScrollTop(st)
    }

    window.addEventListener('scroll', handleScrollListener, false)

    return () => window.removeEventListener('scroll', handleScrollListener)
  }, [lastScrollTop])

  const handleOpenMobileMenu = () => {
    setIsMobileNavOpen(true)
    disablePageScroll()
  }

  return (
    <>
      <Box
        {...headerStyles}
        transform={isScrollDown ? 'translateY(-100px)' : 'translateY(0px)'}
        opacity={isScrollDown ? 0 : 1}
      >
        <Container {...containerStyles}>
          <Link href={'#About'} {...linkStyles}>
            Обо мне
          </Link>
          {isLargerThanLg ? (
            <NavLinksList
              ListProps={{ flexDirection: 'row', gap: { base: '32px', md: '40px' } }}
              LinkProps={linkStyles}
            />
          ) : (
            <HamburgerIcon {...headerIconStyles} onClick={handleOpenMobileMenu} />
          )}
        </Container>
      </Box>
      {isMobileNavOpen && <MobileMenu setIsMobileNavOpen={setIsMobileNavOpen} />}
    </>
  )
}

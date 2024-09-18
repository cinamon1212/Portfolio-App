import { StyleProps } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export const useStylePropsWithDelay = (delay: number, stylesProps: StyleProps) => {
  const [styles, setStyles] = useState<StyleProps>({})

  useEffect(() => {
    const id = setTimeout(() => {
      setStyles(stylesProps)
    }, delay)

    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return styles
}

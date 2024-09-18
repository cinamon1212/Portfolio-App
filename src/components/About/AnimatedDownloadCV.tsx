import { DownloadCV, useStylePropsWithDelay } from '@/shared'
import { downloadCvButtonStyles } from './styles'

export const AnimatedDownloadCV = () => {
  const animationStyles = useStylePropsWithDelay(1000, {
    opacity: 1,
    transform: 'translateX(0)',
  })

  return <DownloadCV {...downloadCvButtonStyles} {...animationStyles} />
}

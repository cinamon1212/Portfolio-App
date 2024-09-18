import { DownloadIcon } from '@chakra-ui/icons'
import { Button, ButtonProps } from '@chakra-ui/react'
import { downloadCVButton } from './styles'

export const DownloadCV = (props: ButtonProps) => {
  return (
    <Button leftIcon={<DownloadIcon />} {...downloadCVButton} {...props}>
      Резюме
    </Button>
  )
}

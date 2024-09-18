import { ButtonProps, defineStyle } from '@chakra-ui/react'

export const downloadCVButton = defineStyle({
  borderRadius: '8px',
  variant: 'outline',
  fontWeight: 300,
  borderColor: 'yellow.200',
  fontSize: { base: '12px', sm: '14px', md: '18px' },
  as: 'a',
  href: '/Кузьмин_резюме.pdf',
  download: true,
}) as ButtonProps

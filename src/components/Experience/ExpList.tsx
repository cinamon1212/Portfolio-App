import { jobsList } from '@/constants'
import { List, useMediaQuery } from '@chakra-ui/react'
import { expListStyles } from './styles'
import { ExpItem } from './ExpItem'

export const ExpList = () => {
  const [isLargerThanMd] = useMediaQuery('(min-width: 48em)')

  return (
    <List {...expListStyles}>
      {jobsList.map((job, index) => (
        <ExpItem {...job} index={index} isLargerThanMd={isLargerThanMd} key={job.period} />
      ))}
    </List>
  )
}

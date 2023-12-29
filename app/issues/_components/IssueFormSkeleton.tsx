import React from 'react'
import { Box } from '@radix-ui/themes'

import { Skeleton } from '@/app/components'

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-x1">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  )
}

export default IssueFormSkeleton

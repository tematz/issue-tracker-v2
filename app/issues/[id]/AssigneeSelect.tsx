'use cliente'

import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelected = () => {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="1">Mosh Hamedani</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  )
}

export default AssigneeSelected

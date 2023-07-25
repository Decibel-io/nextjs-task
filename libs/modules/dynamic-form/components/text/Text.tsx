import { Spacer, Text } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFRawText: React.FC<DynamicInputProps> = ({ field }) => {
  return (
    <>
      <Text>{field.title}</Text>
      <Spacer value={20} />
    </>
  )
}

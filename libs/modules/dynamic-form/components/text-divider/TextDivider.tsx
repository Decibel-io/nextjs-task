import { Spacer } from '@app/components'

import { DynamicInputProps } from '../../types'
import { StyledDivider } from './elements'

export const DFTextDivider: React.FC<DynamicInputProps> = ({ field }) => {
  return (
    <>
      <StyledDivider plain>{field.title}</StyledDivider>
      <Spacer value={20} />
    </>
  )
}

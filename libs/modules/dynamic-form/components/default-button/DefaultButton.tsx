import { FormItem } from '@app/components'

import { DynamicInputProps } from '../../types'
import { StyledButton } from './elements'

export const DFDefaultButton: React.FC<DynamicInputProps> = ({ field, onCancel }) => {
  return (
    <FormItem>
      <StyledButton onClick={onCancel} type={'default'}>
        {field.title}
      </StyledButton>
    </FormItem>
  )
}

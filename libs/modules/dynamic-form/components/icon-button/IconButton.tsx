import { FormItem } from '@app/components'

import { DynamicInputProps } from '../../types'
import { StyledIconButton } from './elements'

export const DFIconButton: React.FC<DynamicInputProps> = ({ field, onSubmit }) => {
  return (
    <FormItem>
      <StyledIconButton
        icon={field.icon}
        type={'default'}
        disabled={field.disabled}
        onClick={() => onSubmit(field.name)}
      >
        {field.title}
      </StyledIconButton>
    </FormItem>
  )
}

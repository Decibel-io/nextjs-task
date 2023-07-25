import { FormItem } from '@app/components'

import { DynamicInputProps } from '../../types'
import { StyledInput } from './elements'

export const DFColorPicker: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <StyledInput name={field.name} placeholder={field.placeholder} disabled={disabled} type="color" />
    </FormItem>
  )
}

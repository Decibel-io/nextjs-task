import { FormItem } from '@app/components'

import { DynamicInputProps } from '../../types'
import { StyledCheckboxGroup } from './elements'

export const DFCheckboxGroup: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules} valuePropName="checked">
      <StyledCheckboxGroup disabled={field.disabled || disabled} options={field.options} />
    </FormItem>
  )
}

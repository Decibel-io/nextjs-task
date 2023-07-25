import { FormItem, Input } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFInput: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <Input name={field.name} placeholder={field.placeholder} disabled={disabled} />
    </FormItem>
  )
}

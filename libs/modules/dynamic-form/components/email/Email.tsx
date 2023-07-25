import { FormItem, Input } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFEmailInput: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <Input name={field.name} placeholder={field.placeholder} type={'email'} disabled={field?.disabled || disabled} />
    </FormItem>
  )
}

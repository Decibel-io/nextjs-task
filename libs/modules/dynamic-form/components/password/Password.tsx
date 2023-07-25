import { FormItem, InputPassword } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFPasswordInput: React.FC<DynamicInputProps> = ({ field }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <InputPassword name={field.name} placeholder={field.placeholder} />
    </FormItem>
  )
}

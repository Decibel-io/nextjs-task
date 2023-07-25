import { FormItem, InputNumber } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFInputNumber: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <InputNumber name={field.name} placeholder={field.placeholder} width="100%" disabled={disabled} type="number" />
    </FormItem>
  )
}

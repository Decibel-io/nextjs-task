import { DatePicker, FormItem } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFDatePicker: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <DatePicker
        placeholder={field.placeholder}
        style={{ width: '100%' }}
        format="YYYY/MM/DD"
        disabled={disabled || field.disabled}
      />
    </FormItem>
  )
}

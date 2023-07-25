import { FormItem, Option, Select } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFSelect: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <Select placeholder="Select" disabled={field.disabled || disabled}>
        {field.options?.map((item, index) => (
          <Option key={index} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </FormItem>
  )
}

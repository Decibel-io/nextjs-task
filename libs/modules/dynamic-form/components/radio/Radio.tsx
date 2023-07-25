import { FormItem, Radio, RadioGroup } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFRadio: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <RadioGroup disabled={field.disabled || disabled}>
        {field.options?.map((item, index) => (
          <Radio key={index} value={item.value}>
            {item.label}
          </Radio>
        ))}
      </RadioGroup>
    </FormItem>
  )
}

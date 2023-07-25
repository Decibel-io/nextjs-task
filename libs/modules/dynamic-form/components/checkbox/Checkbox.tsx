import { Checkbox, FormItem, Text } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFCheckbox: React.FC<DynamicInputProps> = ({ field }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules} valuePropName="checked">
      <Checkbox onChange={(e) => e.target.checked}>
        <Text>{field.title}</Text>
      </Checkbox>
    </FormItem>
  )
}

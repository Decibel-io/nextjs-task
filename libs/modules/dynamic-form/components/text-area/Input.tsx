import { FormItem, TextArea } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFTextArea: React.FC<DynamicInputProps> = ({ field, disabled }) => {
  return (
    <FormItem label={field.label} name={field.name} rules={field.rules}>
      <TextArea name={field.name} placeholder={field.placeholder} disabled={disabled} rows={8} />
    </FormItem>
  )
}

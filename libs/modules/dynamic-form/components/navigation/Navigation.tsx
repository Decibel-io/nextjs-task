import { FormItem, Link } from '@app/components'

import { DynamicInputProps } from '../../types'

export const DFNavigation: React.FC<DynamicInputProps> = ({ field }) => {
  return (
    <FormItem>
      <Link href={field.href}>{field.title}</Link>
    </FormItem>
  )
}

import { CheckboxGroupProps } from '@app/types'
import { Checkbox as AntCheckbox } from 'antd'

const { Group: AntGroupCheckbox } = AntCheckbox

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => <AntGroupCheckbox {...props} />

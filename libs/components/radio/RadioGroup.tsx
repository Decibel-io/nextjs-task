import { RadioGroupProps } from '@app/types'
import { Radio as AntRadio } from 'antd'

export const RadioGroup: React.FC<RadioGroupProps> = (props) => <AntRadio.Group {...props} />

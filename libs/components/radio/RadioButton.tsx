import { RadioProps } from '@app/types'
import { Radio as AntRadio } from 'antd'

export const RadioButton: React.FC<RadioProps> = (props) => <AntRadio.Button {...props} />

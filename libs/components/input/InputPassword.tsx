import { InputPasswordProps } from '@app/types'
import { Input as AntInput } from 'antd'

export const InputPassword: React.FC<InputPasswordProps> = (props) => <AntInput.Password {...props} />

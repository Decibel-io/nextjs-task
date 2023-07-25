import { TextAreaProps } from '@app/types'
import { Input as AntInput } from 'antd'

export const TextArea: React.FC<TextAreaProps> = (props) => <AntInput.TextArea {...props} />

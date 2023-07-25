import { FormItemProps } from '@app/types'
import { Form as AntForm } from 'antd'

export const FormItem: React.FC<FormItemProps> = (props) => <AntForm.Item {...props} />

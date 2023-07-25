import { FormListProps } from '@app/types'
import { Form as AntForm } from 'antd'

export const FormList: React.FC<FormListProps> = (props) => <AntForm.List {...props} />

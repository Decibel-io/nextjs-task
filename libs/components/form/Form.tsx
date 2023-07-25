import { FormProps } from '@app/types'
import { Form as AntForm } from 'antd'

const useForm = AntForm.useForm
const useWatch = AntForm.useWatch

export const Form: React.FC<FormProps> = (props) => <AntForm {...props} />

export { useForm, useWatch }

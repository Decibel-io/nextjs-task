import { EDynamicFormField } from '@app/modules'
import { Any } from '@app/types'
import { FormInstance } from 'antd'
import { Rule } from 'antd/es/form'

export interface IForm {
  fields: IField[]
  form: FormInstance<any>
  onSubmit?: (props?: any) => any | void
  onCancel?: (props?: any) => any | void

  initialValues?: any
  disabled?: boolean // Disables whole form
}
export interface IField {
  component?: JSX.Element
  name?: string
  type?: EDynamicFormField
  title?: string
  label?: string
  onChange?: (props?: any) => any | void
  href?: string
  placeholder?: string
  value?: any
  align?: 'left' | 'center' | 'right'
  rules?: Rule[]
  disabled?: boolean
  // If hidden = true then the field is hidden else apply checks using IHiddenField
  hidden?: IHiddenField | boolean
  inline?: IField[]
  icon?: JSX.Element
  card?: {
    title?: string
    fields: IField[]
  }
  // It could be list of select options or checkbox group options.
  options?: {
    label: string
    value: Any
  }[]
  tooltipText?: string
}

export interface DynamicInputProps {
  field: IField
  disabled?: boolean
  onCancel?: (props?: any) => any | void
  onSubmit?: (props?: any, type?: string) => any | void
}

interface IHiddenField {
  field?: string // The field value on the basis of which field should hide
  value?: any // value of the field
}

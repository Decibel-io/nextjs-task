import { EDynamicFormField, IField } from '@app/modules'

export const CHANGE_PASSWORD_FORM: IField[] = [
  {
    label: 'Old password',
    name: 'oldPassword',
    placeholder: 'Enter Password',
    rules: [{ required: true }],
    type: EDynamicFormField.PASSWORD,
  },
  {
    label: 'New password',
    name: 'password',
    placeholder: 'Enter new Password',
    rules: [{ required: true }],
    type: EDynamicFormField.PASSWORD,
  },
  {
    label: 'Re-enter new password',
    name: 'rePassword',
    placeholder: 'Re-enter new password',
    rules: [{ required: true }],
    type: EDynamicFormField.PASSWORD,
  },
]

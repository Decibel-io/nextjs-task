import { EDynamicFormField, IField } from '@app/modules'

import { ROUTE } from '../routes'

export const FORGOT_PASSWORD_FORM: IField[] = [
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Enter Email',
    rules: [
      {
        message: 'Email is required',
        required: true,
      },
    ],
    type: EDynamicFormField.EMAIL,
  },
  {
    name: 'button',
    placeholder: 'Send Reset Email',
    rules: [
      {
        required: true,
      },
    ],
    title: 'Send Reset Email',
    type: EDynamicFormField.PRIMARY_BUTTON,
  },
  {
    align: 'center',
    href: ROUTE.AUTH.SIGN_UP,
    name: 'forgotYourPassword',
    placeholder: '',
    rules: [
      {
        required: false,
      },
    ],
    title: 'Don`t have an account? Sign-up',
    type: EDynamicFormField.NAVIGATION,
  },
]

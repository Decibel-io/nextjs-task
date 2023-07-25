import { EDynamicFormField, IField } from '@app/modules'

import { StyledAppleIcon, StyledGoogleIcon } from '~public'

import { ROUTE } from '../routes'

export const SIGN_IN_FORM: IField[] = [
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
    label: 'Password',
    name: 'password',
    placeholder: 'Enter Password',
    rules: [
      {
        message: 'Password is required',
        required: true,
      },
    ],
    type: EDynamicFormField.PASSWORD,
  },
  {
    inline: [
      {
        name: 'rememberMe',
        placeholder: '',
        rules: [
          {
            required: false,
          },
        ],
        title: 'Remember Me',
        type: EDynamicFormField.CHECKBOX,
      },
      {
        align: 'right',
        href: ROUTE.AUTH.FORGOT_PASSWORD,
        name: 'forgotYourPassword',
        placeholder: '',
        rules: [
          {
            required: false,
          },
        ],
        title: 'Forgot Your Password?',
        type: EDynamicFormField.NAVIGATION,
      },
    ],
  },
  {
    name: 'button',
    placeholder: 'Log In',
    rules: [
      {
        required: true,
      },
    ],
    title: 'Log In',
    type: EDynamicFormField.PRIMARY_BUTTON,
  },
  
]

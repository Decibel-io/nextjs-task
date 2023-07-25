import { EDynamicFormField, IField } from '@app/modules'

export const ADD_DELIVERY_ADDRESS_FORM: IField[] = [
  {
    label: 'Country',
    name: 'country',
    placeholder: 'Select Country',
    rules: [
      {
        message: 'Country is required',
        required: true,
      },
    ],
    type: EDynamicFormField.SELECT,
    options: [
      { label: 'US', value: 'US' },
      { label: 'China', value: 'China' },
    ],
  },
  {
    label: 'Address line 1',
    name: 'addressLine-1',
    placeholder: 'Enter Your Address Line 1',
    rules: [
      {
        message: 'Address Line 1 is required',
        required: true,
      },
    ],
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'Address Line 2 (optional)',
    name: 'addressLine-2',
    placeholder: 'Enter Your Address Line 2',
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'Address Line 3 (optional)',
    name: 'addressLine-3',
    placeholder: 'Enter Your Address Line 3',
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'State',
    name: 'state',
    placeholder: 'Enter Your State',
    type: EDynamicFormField.SELECT,
    options: [],
  },
  {
    label: 'Zipcode',
    name: 'zipcode',
    placeholder: 'Enter Your Zipcode',
    rules: [
      {
        message: 'Zipcode is required',
        required: true,
      },
    ],
    type: EDynamicFormField.INPUT,
  },
]

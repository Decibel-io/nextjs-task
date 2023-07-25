import { EDynamicFormField, IField } from '@app/modules'

export const ADD_NEW_CARD_FORM: IField[] = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter name on card',
    rules: [{ required: true }],
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'Card number',
    name: 'cardNumber',
    placeholder: 'Enter card number',
    rules: [{ required: true }],
    type: EDynamicFormField.NUMBER,
  },
  {
    inline: [
      {
        label: 'Card expiry',
        name: 'cardExpiry',
        placeholder: 'MM/YYYY',
        rules: [{ required: true }],
        type: EDynamicFormField.DATE,
      },
      {
        label: 'CVV',
        name: 'cvv',
        placeholder: 'Enter CVV',
        rules: [{ required: true }],
        type: EDynamicFormField.NUMBER,
      },
    ],
  },
  {
    label: 'Street address',
    name: 'streetAddress',
    placeholder: 'Enter street address',
    rules: [{ required: true }],
    type: EDynamicFormField.INPUT,
  },
  {
    inline: [
      {
        label: 'City',
        name: 'city',
        placeholder: 'Enter city',
        rules: [{ required: true }],
        type: EDynamicFormField.INPUT,
      },
      {
        label: 'Region',
        name: 'region',
        placeholder: 'Enter region',
        rules: [{ required: true }],
        type: EDynamicFormField.INPUT,
      },
    ],
  },
  {
    inline: [
      {
        label: 'Country',
        name: 'country',
        placeholder: 'Enter country',
        rules: [{ required: true }],
        type: EDynamicFormField.INPUT,
      },
      {
        label: 'Postal code',
        name: 'postalCode',
        placeholder: 'Enter postal code',
        rules: [{ required: true }],
        type: EDynamicFormField.NUMBER,
      },
    ],
  },
]

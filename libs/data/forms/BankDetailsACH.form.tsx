import { EDynamicFormField, IField } from '@app/modules'

export const ADD_BANK_ACCOUNT_ACH_FORM: IField[] = [
  {
    label: 'Full name of account holder',
    name: 'nameOfAccountHolder',
    placeholder: 'Enter Full Name',
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'ACH routing number',
    name: 'routingNumber',
    placeholder: 'Enter Routing Number',
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'Account number',
    name: 'accountNumber',
    placeholder: 'Enter Account Number',
    type: EDynamicFormField.INPUT,
  },
  {
    label: 'Account type',
    name: 'accountType',
    placeholder: '',
    type: EDynamicFormField.RADIO,
    options: [
      { label: 'Checking', value: 'checking' },
      { label: 'Savings', value: 'savings' },
    ],
  },
]

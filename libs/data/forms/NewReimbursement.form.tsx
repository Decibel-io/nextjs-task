import { EDynamicFormField, IField } from '@app/modules'

export const NEW_REIMBURSEMENT_OUT_OF_POCKET_FORM: IField[] = [
  {
    card: {
      fields: [
        {
          inline: [
            {
              label: 'Merchant',
              name: 'merchant',
              placeholder: 'Enter merchant name',
              type: EDynamicFormField.INPUT,
            },
            {
              label: 'Category',
              name: 'category',
              placeholder: 'Select category',
              type: EDynamicFormField.SELECT,
              options: [
                { label: 'Category 1', value: '1' },
                { label: 'Category 2', value: '2' },
                { label: 'Category 3', value: '3' },
              ],
            },
          ],
        },
        {
          inline: [
            {
              label: 'Reimbursement amount',
              name: 'amount',
              placeholder: 'Enter reimbursement amount',
              type: EDynamicFormField.NUMBER,
            },
            {
              label: 'Transaction date',
              name: 'date',
              placeholder: 'Date of transaction',
              type: EDynamicFormField.DATE,
            },
          ],
        },
        {
          inline: [
            {
              label: 'Business purpose',
              name: 'purpose',
              placeholder: 'Include a reason for this request',
              type: EDynamicFormField.TEXT_AREA,
            },
            {
              label: 'Email',
              name: 'email',
              placeholder: 'Enter Email',
              title: 'Upload receipts',
              type: EDynamicFormField.UPLOADER,
            },
          ],
        },
      ],
      title: 'Details',
    },
  },
]

export const NEW_REIMBURSEMENT_MILEAGE_FORM: IField[] = [
  {
    card: {
      fields: [
        {
          inline: [
            {
              label: 'Trip date',
              name: 'date',
              placeholder: 'Date of trip',
              type: EDynamicFormField.DATE,
            },
            {
              label: 'Distance in miles',
              name: 'amount',
              placeholder: 'Enter distance in miles',
              type: EDynamicFormField.NUMBER,
            },
          ],
        },
        {
          inline: [
            {
              label: 'Category',
              name: 'category',
              placeholder: 'Select category',
              type: EDynamicFormField.SELECT,
              options: [
                { label: 'Category 1', value: '1' },
                { label: 'Category 2', value: '2' },
                { label: 'Category 3', value: '3' },
              ],
            },
            {},
          ],
        },
        {
          inline: [
            {
              label: 'Business purpose',
              name: 'purpose',
              placeholder: 'Include a reason for this request',
              type: EDynamicFormField.TEXT_AREA,
            },
            {
              label: 'Email',
              name: 'email',
              placeholder: 'Enter Email',
              title: 'Attach routes',
              type: EDynamicFormField.UPLOADER,
            },
          ],
        },
      ],
      title: 'Details',
    },
  },
]

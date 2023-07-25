import { EDynamicFormField, IField } from '@app/modules'

export const VERIFY_IDENTITY_FORM: IField[] = [
  {
    card: {
      fields: [
        {
          label: 'Document ID',
          name: 'documentID',
          options: [
            { label: 'Driver\'s Licence', value: 'driverLicense' },
            { label: 'Government ID', value: 'governmentId' },
            { label: 'Passport', value: 'passport' },
          ],
          placeholder: '',
          rules: [{ message: 'Document ID is required', required: true }],
          type: EDynamicFormField.SELECT,
        },
        {
          inline: [
            {
              name: 'doc-front-side',
              title: 'Upload Front Side',
              type: EDynamicFormField.UPLOADER,
            },
            {
              name: 'doc-back-side',
              title: 'Upload Back Side',
              type: EDynamicFormField.UPLOADER,
            },
          ],
        },
      ],
    },
  },
]

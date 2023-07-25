import { EDynamicFormField, IField } from '@app/modules'

export const PROFILE_FORM: IField[] = [
  {
    card: {
      fields: [
        {
          inline: [
            {
              label: 'First Name',
              name: 'firstName',
              placeholder: 'Enter First Name',
              rules: [
                {
                  message: 'Legal First Name is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.INPUT,
            },
            {
              label: 'Last Name',
              name: 'lastName',
              placeholder: 'Enter Last Name',
              rules: [
                {
                  message: 'Legal Last Name is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.INPUT,
            },
          ],
        },
        {
          inline: [
            {
              label: 'Date of Birth',
              name: 'dateOfBirth',
              placeholder: 'YYYY / MM / DD',
              rules: [
                {
                  message: 'Date of Birth is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.DATE,
            },
            {
              label: 'Phone Number',
              name: 'phoneNumber',
              placeholder: 'Enter Phone Number',
              rules: [
                {
                  message: 'Phone Number is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.NUMBER,
            },
          ],
        },
        {
          inline: [
            {
              label: 'Email',
              name: 'email',
              placeholder: 'Enter Email',
              disabled: false,
              rules: [
                {
                  message: 'Email is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.EMAIL,
            },
            {},
          ],
        },
      ],
      title: 'Personal Information',
    },
  },
  {
    card: {
      fields: [
        {
          inline: [
            {
              label: 'Street Address 1',
              name: 'streetAddress_1',
              placeholder: 'Enter Your Street Address',
              rules: [
                {
                  message: 'Street Address 1 is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.INPUT,
            },
            {
              label: 'Street Address 2',
              name: 'streetAddress_2',
              placeholder: 'Enter Your Street Address',
              rules: [
                {
                  message: 'Street Address 2 is required',
                  required: false,
                },
              ],
              type: EDynamicFormField.INPUT,
            },
          ],
        },
        {
          inline: [
            {
              label: 'City',
              name: 'city',
              placeholder: 'Enter Your City',
              rules: [
                {
                  message: 'City is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.INPUT,
            },

            {
              label: 'State',
              name: 'state',
              placeholder: 'Enter Your State',
              rules: [
                {
                  message: 'State is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.SELECT,
              options: [],
            },
          ],
        },
        {
          inline: [
            {
              label: 'Postal Code',
              name: 'postalCode',
              placeholder: 'Enter Postal Code',
              rules: [
                {
                  message: 'Postal Code is required',
                  required: true,
                },
              ],
              type: EDynamicFormField.INPUT,
            },
            {
              label: 'Country',
              name: 'country',
              placeholder: 'Enter Country',
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
          ],
        },
      ],
      title: 'Address Information',
    },
  },
]

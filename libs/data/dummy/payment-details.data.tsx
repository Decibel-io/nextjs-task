import { Avatar } from '@app/components'

export const PAYMENT_METHODS = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Avatar />,
    title: 'Bank debit (ACH)',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Avatar />,
    title: 'Wire Transfer',
  },
]

export const PAYMENT_DETAILS_CARD_DATA = [
  {
    details: [
      { label: 'You Send', value: '1000 USD' },
      { label: 'Total fees', value: '-8.17 USD' },
      { label: 'Amount we\'ll convert', value: '991.83 USD' },
      { label: 'Guaranteed Rate', value: '69.5800 USD' },
      { label: 'Should Arrive by', value: 'August 24' },
    ],
    title: 'Transfer Details',
  },
  {
    details: [
      { label: 'Name', value: 'ABC' },
      { label: 'Email', value: 'XYZ' },
      { label: 'IFSC Code', value: '12345' },
      { label: 'Account Number', value: '00000000' },
    ],
    title: 'Recipient Details',
  },
]

import { PlusOutlined } from '@ant-design/icons'
import { Avatar } from '@app/components'

import { AmericanFlagIcon, EuropeanFlagIcon } from '~public'

export const ACCOUNT_BALANCE_CARDS = [
  {
    balance: '$112',
    currency: 'Digital Account Balance',
    icon: <AmericanFlagIcon height={42} />,
  },
  { balance: '$0.00', currency: 'Euro', icon: <EuropeanFlagIcon height={42} /> },
]

export const TRANSACTION_LIST = [
  {
    icon: <Avatar icon={<PlusOutlined />} />,
    title: 'To Your USD balance',
    description: 'Added - Yesterday',
    moreInfo: {
      amount: 20.0,
      currency: '20.03 USD',
    },
  },
  {
    icon: <Avatar icon={<PlusOutlined />} />,
    title: 'Euro balance',
    description: 'Added - Today',
    moreInfo: {
      amount: 100,
      currency: '100.03 Euro',
    },
  },
]

export const PAYMENT_RECEIVED_LIST = [
  {
    icon: <AmericanFlagIcon />,
    title: 'US Dollar',
    description: 'Wire routing number, Bank code (SWIFT/BIC), Routing number (ACH or ABA) and Account number',
  },
  {
    icon: <EuropeanFlagIcon />,
    title: 'Euro',
    description: 'Wire routing number, Bank code (SWIFT/BIC), Routing number (ACH or ABA) and Account number',
  },
]

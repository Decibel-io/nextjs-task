import { EDynamicFormField, IField } from '@app/modules'

import { MetamaskIcon, WalletConnectIcon } from '~public'

export const CONNECT_WALLET_FORM = (dynamicTheme): IField[] => {
  return [
    {
      card: {
        fields: [
          {
            inline: [
              {
                icon: <MetamaskIcon />,
                name: 'metamask',
                title: 'Metamask',
                type: EDynamicFormField.IMAGE_CARD,
              },
              {
                icon: <WalletConnectIcon />,
                name: 'walletConnect',
                title: 'Wallet Connect',
                type: EDynamicFormField.IMAGE_CARD,
              },
            ],
          },
          {
            align: 'center',
            name: 'orText',
            placeholder: '',
            rules: [{ required: true }],
            title: 'or',
            type: EDynamicFormField.RAW_TEXT,
          },
          {
            align: 'center',
            href: '',
            name: 'addWalletManually',
            placeholder: '',
            rules: [{ required: false }],
            title: 'Add Wallet Manually',
            type: EDynamicFormField.NAVIGATION,
          },
          {
            label: 'Wallet Address',
            name: 'walletAddress',
            placeholder: 'Enter Wallet Address',
            rules: [{ required: false }],
            type: EDynamicFormField.INPUT,
          },
          {
            inline: [
              {
                name: 'connectWalletTerms',
                placeholder: '',
                rules: [{ required: false }],
                title: `By connecting my wallet I accept ${dynamicTheme.companyName}’s Terms Of Use`,
                type: EDynamicFormField.CHECKBOX,
              },
            ],
          },
          {
            name: 'button',
            placeholder: 'Add',
            rules: [{ required: true }],
            title: 'Add',
            type: EDynamicFormField.PRIMARY_BUTTON,
          },
        ],
      },
    },
  ]
}

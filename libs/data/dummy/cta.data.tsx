import { Icon } from '@app/components'

export const getCTAData = (dynamicTheme) => {
  return [
    {
      title: 'G2 2021',
      description: '#1 freelance platform',
    },
    {
      title: '49,000+',
      description: 'Signed contract every week',
    },
    {
      title: '$2.3B',
      description: `Freelancers earned on ${dynamicTheme.companyName} in 2020`,
    },
  ]
}

export const CTA_ICONS = [
  {
    icon: <Icon.WindowsOutlined />,
    label: 'Microsoft',
  },
  {
    icon: <Icon.SkypeOutlined />,
    label: 'Skype',
  },
  {
    icon: <Icon.TwitterOutlined />,
    label: 'Twitter',
  },
  {
    icon: <Icon.FacebookOutlined />,
    label: 'Facebook',
  },
]

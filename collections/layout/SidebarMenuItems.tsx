import { Icon } from '@app/components'
import { MenuItem } from '@app/types'
import { useRouter } from 'next/router'

const ITEMS = [
  {
    icon: <Icon.AppstoreOutlined />,
    key: 'dashboard',
    label: 'Dashboard',
    route: '/dashboard',
  },
  {
    icon: <Icon.BarChartOutlined />,
    key: 'charts',
    label: 'Map',
    route: '/map',
  },
  {
    icon: <Icon.ContainerOutlined />,
    key: 'trs-demo',
    label: 'TRS Demo',
    route: '/trs-demo',
    children: [
      {
        icon: <Icon.DashboardOutlined />,
        key: 'dashboard',
        label: 'Dashboard',
        route: '/trs-demo/dashboard',
      },
      {
        icon: <Icon.BankOutlined />,
        key: 'organizations',
        label: 'Organizations',
        route: '/trs-demo/organizations',
      },
      {
        icon: <Icon.DollarOutlined />,
        key: 'reimbursements',
        label: 'Reimbursements',
        route: '/trs-demo/reimbursements',
      },
      {
        icon: <Icon.FormOutlined />,
        key: 'form-manager',
        label: 'Form Manager',
        route: '/trs-demo/form-manager',
      },
      {
        icon: <Icon.UserOutlined />,
        key: 'profile',
        label: 'Profile',
        route: '/trs-demo/profile',
      },
      {
        icon: <Icon.SettingOutlined />,
        key: 'settings',
        label: 'My Settings',
        route: '/trs-demo/my-settings',
      },
    ],
  },
  {
    icon: <Icon.SwapOutlined />,
    key: 'transactions',
    label: 'Transactions',
    route: '/transactions',
  },
  {
    icon: <Icon.SettingOutlined />,
    key: 'account-settings',
    label: 'Settings',
    route: '/account-settings',
  },
  {
    icon: <Icon.ContainerOutlined />,
    key: 'pages',
    label: 'Pages',
    route: '/phone-verification',
    children: [
      {
        icon: <Icon.DashboardOutlined />,
        key: 'dashboard-2',
        label: 'Dashboard',
        route: '/dashboard-2',
      },
      {
        icon: <Icon.PieChartOutlined />,
        key: 'dashboard-3',
        label: 'Control Dashboard',
        route: '/dashboard-3',
      },
      {
        icon: <Icon.PhoneOutlined />,
        key: 'phone-verification',
        label: 'Phone verification',
        route: '/phone-verification',
      },
      {
        icon: <Icon.CreditCardOutlined />,
        key: 'cards-and-ctas',
        label: 'Cards & CTAs',
        route: '/cards-and-ctas',
      },
      {
        icon: <Icon.DollarCircleOutlined />,
        key: 'payment-details',
        label: 'Payment Details',
        route: '/payment-details',
      },
      {
        icon: <Icon.GroupOutlined />,
        key: 'triggers',
        label: 'Triggers',
        route: '/triggers',
      },
    ],
  },
  {
    icon: <Icon.SearchOutlined />,
    key: 'search-and-filters',
    label: 'Search & Filters',
    route: '/search-and-filters',
  },
  {
    icon: <Icon.LayoutOutlined />,
    key: 'templates',
    label: 'Templates',
    route: '/templates',
  },
  {
    icon: <Icon.FileSyncOutlined />,
    key: 'transfer-history',
    label: 'Transfer History',
    route: '/transfer-history',
  },
  {
    icon: <Icon.TableOutlined />,
    key: 'logging-table',
    label: 'Logging Table',
    route: '/logging-table',
  },
  {
    icon: <Icon.HddOutlined />,
    key: 'dynamic-form',
    label: 'Dynamic Form',
    route: '/dynamic-form',
  },
  {
    icon: <Icon.HddOutlined />,
    key: 'account-registration',
    label: 'Account Registration',
    route: '/account-registration',
  },
  {
    icon: <Icon.DollarOutlined />,
    key: 'reimbursements',
    label: 'Reimbursements',
    route: '/reimbursements',
  },
]

export const SIDEBAR_MENU_ITEMS = (): MenuItem[] => {
  const router = useRouter()

  const onClick = (route: string) => {
    router.push(route)
  }

  return ITEMS.map((item) => ({
    icon: item.icon,
    key: item.key,
    label: item.label,
    onClick: () => {
      !item.children && onClick(item.route)
    },
    children: item.children?.map((subMenu) => ({
      icon: subMenu.icon,
      key: subMenu.key,
      label: subMenu.label,
      onClick: () => onClick(subMenu.route) as any,
    })),
  }))
}

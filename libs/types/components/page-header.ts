import { PageHeaderProps as AntPageHeaderProps } from '@ant-design/pro-components'

interface ICustomProps {
  isNavbar?: boolean
  disableBreadcrumb?: boolean
}

export type PageHeaderProps = AntPageHeaderProps & ICustomProps

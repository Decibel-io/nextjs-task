import { FormInstance } from 'antd'

export interface CustomDrawerProps {
  open: boolean
  toggleOpen: () => void
  form?: FormInstance<any>
}

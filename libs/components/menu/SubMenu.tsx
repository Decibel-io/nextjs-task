import { MenuProps } from '@app/types'
import { Menu as AntMenu } from 'antd'

export const SubMenu: React.FC<MenuProps> = (props: MenuProps) => <AntMenu.SubMenu {...props} />

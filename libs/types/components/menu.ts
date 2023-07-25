import MenuItem from 'antd/es/menu/MenuItem'
import { MenuItemProps as AntMenuItemProps, MenuProps as AntMenuProps } from 'antd/lib/menu'

export type MenuProps = AntMenuProps
export type MenuItemProps = AntMenuItemProps

export type MenuItem = Required<MenuProps>['items'][number]

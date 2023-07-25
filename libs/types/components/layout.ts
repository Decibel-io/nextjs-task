import { LayoutProps as AntLayoutProps } from 'antd/lib/layout'
import { SiderProps as AntSiderProps } from 'antd/lib/layout/Sider'

import { BoxProperties } from '../css'

interface CustomProps {
  sidebar?: boolean
  header?: boolean
}

export type LayoutProps = AntLayoutProps & BoxProperties & CustomProps

export type SiderProps = AntSiderProps & BoxProperties

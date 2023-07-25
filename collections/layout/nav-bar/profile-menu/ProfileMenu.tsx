import {
  DownOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, Space, Text,Button } from '@app/components'
import { ROUTE } from '@app/data'
import { IStore, logout } from '@app/redux'
import type { MenuProps } from '@app/types'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyledBadge, StyledButton, StyledText } from './elements'

export const ProfileMenu: React.FC = () => {
  const { color, trigger, user } = useSelector((state: IStore) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <Button onClick={() => dispatch(logout())}>
      Logout
    </Button>
  )
}

import { AvatarProps as AntAvatarProps, GroupProps as AntGroupProps } from 'antd/lib/avatar'

export type AvatarProps = AntAvatarProps & {
  name?: string | undefined
  isSelected?: boolean
}

export type GroupProps = AntGroupProps

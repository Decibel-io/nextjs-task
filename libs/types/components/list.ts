import {
  ListItemMetaProps as AntListItemMetaProps,
  ListItemProps as AntListItemProps,
  ListProps as AntListProps,
} from 'antd/lib/list'

export type ListProps<K> = AntListProps<K>
export type ListItemProps = AntListItemProps & { border?: boolean }
export type ListItemMetaProps = AntListItemMetaProps

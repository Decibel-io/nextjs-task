import { AvatarProps } from '@app/types'
import { Avatar as AntAvatar } from 'antd'
import React from 'react'

export const Avatar: React.FC<AvatarProps> = (props) => {
  if (props.src) {
    return <AntAvatar {...props} src={props.src} />
  } else {
    return (
      <AntAvatar {...props} src={null}>
        {props.name?.[0]?.toUpperCase() || ''}
      </AntAvatar>
    )
  }
}

import { Badge, Text } from '@app/components'
import { BadgeProps, TextProps } from '@app/types'
import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled((props: ButtonProps) => <Button {...props} type={props.type} />)`
  padding: 0px;
`
export const StyledText = styled((props: TextProps) => <Text {...props} />)`
  color: ${(props) => props.theme.color.white};
`
export const StyledBadge = styled((props: BadgeProps) => <Badge {...props} />)`
  .ant-badge-count {
    box-shadow: ${(props) => `0 0 0 1px ${props.theme.color.error}`};
  }
`

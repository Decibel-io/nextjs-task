import { Col, ListItem, ListItemMeta } from '@app/components'
import { ColProps, ListItemMetaProps, ListItemProps } from '@app/types'
import styled from 'styled-components'

export const StyledListItemMeta = styled((props: ListItemMetaProps) => {
  return <ListItemMeta {...props} />
})`
  && {
    .ant-list-item-meta-title {
      margin-bottom: 5px !important;
    }
  }
`

export const StyledListItem = styled((props: ListItemProps) => {
  return <ListItem {...props} />
})`
  && {
    border: ${(props) => props.border && `1px solid ${props.theme.color.grey2} !important`};
    padding-inline: ${(props) => (props.border ? '12px 24px' : '0px')};
    .ant-list-item-meta {
      margin: 7px 0px !important;
      margin-block-end: 0px !important;
    }
    .ant-list-item-main {
      margin-bottom: 10px !important;
    }
  }
`

export const RadioCol = styled((props: ColProps) => {
  return <Col {...props} />
})`
  display: flex;
`

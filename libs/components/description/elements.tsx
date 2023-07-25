import { boxProperties } from '@app/styles'
import { DescriptionItemProps, DescriptionProps } from '@app/types'
import { Descriptions } from 'antd'
import styled from 'styled-components'

export const StyledDescription = styled((props: DescriptionProps) => {
  return <Descriptions {...props} />
})`
  ${boxProperties}
`

export const StyledDescriptionItem = styled((props: DescriptionItemProps) => {
  return <Descriptions.Item {...props} />
})`
  ${boxProperties}
`

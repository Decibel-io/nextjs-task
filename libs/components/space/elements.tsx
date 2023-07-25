import { boxProperties } from '@app/styles'
import { SpaceProps } from '@app/types'
import { Space } from 'antd'
import styled from 'styled-components'

export const StyledSpace = styled((props: SpaceProps) => {
  return <Space {...props} />
})`
  ${boxProperties}
`

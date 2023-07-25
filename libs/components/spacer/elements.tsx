import { boxProperties } from '@app/styles'
import { SpacerProps } from '@app/types'
import { omitCSSProps } from '@app/utils'
import styled from 'styled-components'

export const ColumnSpacer = styled((props: SpacerProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const domProps = omitCSSProps(props, ['value', 'type'])
  return <div {...domProps} />
})`
  margin-bottom: ${({ value }) => value}px;
  margin-right: ${({ value }) => value}px;
  ${boxProperties};
`

export const RowSpacer = styled((props: SpacerProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const domProps = omitCSSProps(props, ['value', 'type'])
  return <div {...domProps} />
})`
  margin-top: ${({ value }) => value}px;
  width: 100%;
  ${boxProperties};
`

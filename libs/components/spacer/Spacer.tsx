import { SpacerProps } from '@app/types'

import { ColumnSpacer, RowSpacer } from './elements'

export const Spacer: React.FC<SpacerProps> = ({ type, value = 25 }) => {
  return type === 'column' ? <ColumnSpacer value={value} /> : <RowSpacer value={value} />
}

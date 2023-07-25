import { Any, SelectProps } from '@app/types'

import { StyledSelect } from './elements'

export const Select: React.FC<SelectProps<Any>> = (props) => <StyledSelect {...props} />

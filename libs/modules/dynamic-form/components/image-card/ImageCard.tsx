import { FormItem, Spacer, Text } from '@app/components'
import { ImageCardProps } from '@app/types'

import { StyledCard, StyledSpace } from './elements'

export const DFImageCard: React.FC<ImageCardProps> = ({ icon, title }) => {
  return (
    <FormItem>
      <StyledCard>
        <StyledSpace direction="vertical">
          {icon}
          <Spacer value={10} />
          <Text>{title}</Text>
        </StyledSpace>
      </StyledCard>
    </FormItem>
  )
}

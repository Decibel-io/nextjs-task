import { InfoCircleFilled } from '@ant-design/icons'
import { If, Space, Spacer, Title, Tooltip } from '@app/components'
import { IStore } from '@app/redux'
import { useSelector } from 'react-redux'

import { DynamicInputProps } from '../../types'

export const DFTitle: React.FC<DynamicInputProps> = ({ field }) => {
  const { color } = useSelector((state: IStore) => state)

  return (
    <>
      <Space>
        <Title style={{ marginBottom: 0 }} level={4}>
          {field.title}
        </Title>
        <If condition={field.tooltipText}>
          <Tooltip title={field.tooltipText} color={color.primary} key={color.primary}>
            <InfoCircleFilled style={{ color: color.primary }} />
          </Tooltip>
        </If>
      </Space>
      <Spacer value={10} />
    </>
  )
}

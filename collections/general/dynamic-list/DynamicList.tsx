import { Col, List, Radio, Row } from '@app/components'
import { DynamicListProps } from '@app/types'
import React from 'react'

import { RadioCol, StyledListItem, StyledListItemMeta } from './elements'

export const DynamicList: React.FC<DynamicListProps> = ({ listData, header, extra, border, radioList }) => {
  return (
    <List
      header={header}
      itemLayout="vertical"
      dataSource={listData}
      renderItem={(item) => (
        <StyledListItem extra={extra && !item.hideExtra ? extra(item.moreInfo) : null} border={border}>
          <Row>
            {radioList && (
              <RadioCol span={2}>
                <Radio />
              </RadioCol>
            )}
            <Col span={22}>
              <StyledListItemMeta avatar={item.icon} title={item.title} description={item.description} />
            </Col>
          </Row>
        </StyledListItem>
      )}
    />
  )
}

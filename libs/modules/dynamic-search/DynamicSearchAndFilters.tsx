import { Button, Col, Icon, Row } from '@app/components'
import { AutoComplete, Input } from 'antd'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'

import { DynamicFiltersDrawer } from './DynamicFiltersDrawer'
import { StyledExtraCol, StyledRow } from './elements'
import { ESearchType, ISearchAndFilters } from './types'

const DEBOUNCE_TIMEOUT = 300

export const DynamicSearchAndFilters: React.FC<ISearchAndFilters> = (props) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('')

  const [filtersDrawerVisible, setFiltersDrawerVisible] = useState(false)

  const toggleFiltersDrawer = () => {
    setFiltersDrawerVisible(!filtersDrawerVisible)
  }

  const debounceSearch = useRef(
    debounce((type, value) => {
      props.handleSubmit(type, value)
    }, DEBOUNCE_TIMEOUT),
  ).current

  const handleChange = (type: string, value: string) => {
    setLocalSearchTerm(value)
    if (value === '') {
      debounceSearch.cancel()
      setLocalSearchTerm('')
    } else {
      debounceSearch(type, value)
    }
  }

  useEffect(() => {
    return () => {
      debounceSearch.cancel()
    }
  }, [debounceSearch])

  return (
    <>
      <StyledRow justify={'space-between'}>
        <Col span={24} sm={16} lg={20}>
          <AutoComplete
            onChange={(value) => handleChange(ESearchType.MAIN, value)}
            disabled={props.search.disabled}
            options={props.search.options}
            value={localSearchTerm}
            style={{ width: '100%' }}
            filterOption={true}
          >
            <Input.Search placeholder={props.search.placeholder} />
          </AutoComplete>
        </Col>

        <Col>
          <Row>
            {props.filters.fields && (
              <Col>
                <Button onClick={toggleFiltersDrawer} type="default" icon={<Icon.FilterOutlined />}>
                  Filters
                </Button>
              </Col>
            )}
            {props.extra && <StyledExtraCol>{props.extra}</StyledExtraCol>}
          </Row>
        </Col>
      </StyledRow>

      <DynamicFiltersDrawer
        toggleOpen={toggleFiltersDrawer}
        open={filtersDrawerVisible}
        filters={props.filters}
        handleSubmit={props.handleSubmit}
      />
    </>
  )
}

import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Cascader, Col, Row, Space, Switch, Tag, Tooltip, useForm } from '@app/components'
import { CONTINENT_CITIES } from '@app/data'
import { IStore, toggleTheme } from '@app/redux'
import { ETheme } from '@app/theme'
import { Option } from '@app/types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CompanyLogo } from '~public'

import { DynamicThemeDrawer } from './dynamic-theme-drawer'
import { StyledPageHeader, StyledSpace } from './elements'
import { ProfileMenu } from './profile-menu'

export const NavBar = () => {
  const { color, theme } = useSelector((state: IStore) => state)
  const dispatch = useDispatch()
  const [changeThemeDrawerVisible, setChangeThemeDrawerVisible] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Select City')

  const onChangeCity = (_: string[], selectedOptions: Option[]) => {
    setSelectedCity(selectedOptions.map((o) => o.label).join(', '))
  }

  const toggleThemeDrawer = () => {
    setChangeThemeDrawerVisible(!changeThemeDrawerVisible)
  }

  const [dynamicThemeForm] = useForm()

  const getHelpTooltipTitle = () => {
    return (
      <Space direction="vertical" padding="10px">
        <Tag color={color.secondary} icon={<ExclamationCircleOutlined />}>
          Update
        </Tag>
        User can switch to light or dark mode using this toggle button.
      </Space>
    )
  }

  const companyTitle = (
    <Space size={'large'}>
      <CompanyLogo height={35} />
    </Space>
  )

  return (
    <>
      <StyledPageHeader
        isNavbar
        title={companyTitle}
        extra={
          <Row justify={'end'}>
            <Col span={24}>
              <StyledSpace size="large">
                <Button size="small" type="default" onClick={toggleThemeDrawer}>
                  Change Theme
                </Button>
                <Tooltip title={getHelpTooltipTitle()} color={color.primary}>
                  <Switch
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    checked={theme.value === ETheme.DARK}
                    onChange={() => dispatch(toggleTheme())}
                  />
                </Tooltip>
                <ProfileMenu />
              </StyledSpace>
            </Col>
          </Row>
        }
      />
      <DynamicThemeDrawer open={changeThemeDrawerVisible} toggleOpen={toggleThemeDrawer} form={dynamicThemeForm} />
    </>
  )
}

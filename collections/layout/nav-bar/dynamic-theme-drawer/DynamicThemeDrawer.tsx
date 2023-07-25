import { Button, Drawer, Space } from '@app/components'
import { DYNAMIC_THEME_FORM } from '@app/forms'
import { DynamicForm } from '@app/modules'
import { changeDynamicTheme, changeThemeColor, IStore } from '@app/redux'
import { CustomDrawerProps } from '@app/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DynamicThemeDrawer: React.FC<CustomDrawerProps> = ({ open, toggleOpen, form }) => {
  const dispatch = useDispatch()

  const { color, theme } = useSelector((state: IStore) => state)

  const getAppliedThemeData = () => {
    const dynamicThemeObject = form.getFieldsValue()

    dispatch(
      changeDynamicTheme({
        borderRadius: dynamicThemeObject.borderRadius,
        companyName: dynamicThemeObject.companyName,
        controlHeight: dynamicThemeObject.controlHeight,
        fontSize: dynamicThemeObject.fontSize,
        fontFamily: dynamicThemeObject.fontFamily,
        fontSizeHeading1: dynamicThemeObject.fontSizeHeading1,
        fontSizeHeading2: dynamicThemeObject.fontSizeHeading2,
        fontSizeHeading3: dynamicThemeObject.fontSizeHeading3,
        fontSizeHeading4: dynamicThemeObject.fontSizeHeading4,
        fontSizeHeading5: dynamicThemeObject.fontSizeHeading5,
        isCompact: dynamicThemeObject.isCompact,
      }),
    )

    dispatch(
      changeThemeColor({
        primary: dynamicThemeObject.primaryColor,
        secondary: dynamicThemeObject.secondaryColor,
      }),
    )
    toggleOpen()
  }

  const colorInitialValues = {
    primaryColor: color.primary,
    secondaryColor: color.secondary,
  }

  const onCancelDrawer = () => {
    form.setFieldsValue(theme.dynamicTheme)
    form.setFieldsValue(colorInitialValues)
    toggleOpen()
  }

  return (
    <>
      <Drawer
        width={'500px'}
        title="Change Theme"
        onClose={toggleOpen}
        open={open}
        footer={<Footer onCancel={onCancelDrawer} onApplyTheme={getAppliedThemeData} />}
      >
        <DynamicForm
          fields={DYNAMIC_THEME_FORM}
          form={form}
          initialValues={{ ...colorInitialValues, ...theme.dynamicTheme }}
        />
      </Drawer>
    </>
  )
}

const Footer = ({ onCancel, onApplyTheme }) => {
  return (
    <Space>
      <Button onClick={onApplyTheme}>Apply</Button>
      <Button type="default" onClick={onCancel}>
        Cancel
      </Button>
    </Space>
  )
}

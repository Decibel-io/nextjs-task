import { Button, Checkbox, Dropdown, Icon, List, ListItem, ListItemMeta } from '@app/components'
import { IStore } from '@app/redux'
import { getThemeColors } from '@app/theme'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const CheckboxDropdown = () => {
  const [visible, setVisible] = useState(false)
  const { theme } = useSelector((store: IStore) => store)
  const COLORS = getThemeColors(theme.value)

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const menu = (
    <List bordered style={{ background: COLORS.background }} header={'Column settings'} size="small">
      <ListItem extra={<Checkbox defaultChecked />}>
        <ListItemMeta title="Name" />
      </ListItem>
      <ListItem extra={<Checkbox defaultChecked />}>
        <ListItemMeta title="Age" />
      </ListItem>
      <ListItem extra={<Checkbox defaultChecked />}>
        <ListItemMeta title="Address" />
      </ListItem>
      <ListItem extra={<Checkbox defaultChecked />}>
        <ListItemMeta title="Email" />
      </ListItem>
      <ListItem extra={<Checkbox defaultChecked />}>
        <ListItemMeta title="Amount" />
      </ListItem>
      <ListItem extra={<Icon.LockOutlined />}>
        <ListItemMeta title="Notes" />
      </ListItem>
      <ListItem extra={<Icon.LockOutlined />}>
        <ListItemMeta title="Category" />
      </ListItem>
      <ListItem extra={<Icon.LockOutlined />}>
        <ListItemMeta title="Status" />
      </ListItem>
    </List>
  )

  return (
    <Dropdown dropdownRender={() => menu} open={visible} onOpenChange={handleVisibleChange} arrow>
      <Button>Columns</Button>
    </Dropdown>
  )
}

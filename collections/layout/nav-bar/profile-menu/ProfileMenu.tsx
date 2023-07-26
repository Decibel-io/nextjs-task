import { Button } from '@app/components'
import { logout } from '@app/redux'
import React from 'react'
import { useDispatch} from 'react-redux'

export const ProfileMenu: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(logout())}>
      Logout
    </Button>
  )
}

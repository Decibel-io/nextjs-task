import { useWindowDimensions } from '@app/hooks'
import { SideDrawerProps } from '@app/types'
import { useEffect, useState } from 'react'

import { StyledDrawer } from './elements'

const DEFAULT_WIDTH = '650'

// NOTE: We are using hooks for drawer width because styledComponent property is not working
export const Drawer: React.FC<SideDrawerProps> = (props: SideDrawerProps) => {
  const { width } = useWindowDimensions()

  const [drawerWidth, setDrawerWidth] = useState(DEFAULT_WIDTH)

  useEffect(() => {
    if (width < 767) setDrawerWidth('100%')
    else if (props.width) setDrawerWidth(props.width)
    else setDrawerWidth(DEFAULT_WIDTH)
  }, [width])

  return <StyledDrawer {...props} placement="right" width={drawerWidth} />
}

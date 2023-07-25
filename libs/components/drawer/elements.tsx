import { boxProperties, maxMobile } from '@app/styles'
import { SideDrawerProps } from '@app/types'
import { omitCSSProps } from '@app/utils'
import { Drawer } from 'antd'
import styled from 'styled-components'

export const StyledDrawer = styled((props: SideDrawerProps) => {
  const domProps = omitCSSProps(props)
  return <Drawer {...domProps} width={props.width} />
})`
  ${boxProperties};
  && {
    .ant-drawer-left.ant-drawer-open,
    .ant-drawer-right.ant-drawer-open {
      transition: all 150ms ease-out 0ms;
      animation: none;
    }

    .ant-drawer .ant-drawer-open .ant-drawer-mask {
      transition: all 150ms ease-out 0ms;
      animation: none;
    }
  }

  .ant-drawer-header {
    padding: 20px;
  }

  .ant-drawer-title {
  }

  .ant-drawer-close {
    height: 100%;
  }

  .ant-drawer-body {
    padding: 20px;
  }

  .ant-drawer .ant-drawer-right {
    .ant-drawer-footer {
      padding: 20px;
    }
  }

  /* ant-drawer-content-wrapper not working */

  .ant-drawer-content-wrapper {
    width: 1000px !important;
  }

  @media only screen and (max-width: ${maxMobile}) {
    .ant-drawer-content-wrapper {
      width: 100% !important;
    }
  }
`

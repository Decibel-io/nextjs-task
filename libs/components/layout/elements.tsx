import { Alert } from '@app/components'
import { boxProperties, maxTablet } from '@app/styles'
import { AlertProps, LayoutProps, SiderProps } from '@app/types'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

export const StyledSider = styled((props: SiderProps) => <AntLayout.Sider {...props} />)`
  max-width: 30%;
  min-width: 250px !important;
  // overflow: scroll;
  position: fixed;
  height: calc(100vh - 88px);
  overflow: auto;
  ${boxProperties};

  @media only screen and (max-width: ${maxTablet}) {
    min-width: auto !important;
    overflow: visible;
    max-width: 100%;
    margin-bottom: 88px !important;

    .ant-menu {
      overflow: auto;
      height: 100vh;
    }
  }
`

export const StyledContent = styled((props: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sidebar, header, ...otherProps } = props
  return <AntLayout.Content {...otherProps} />
})`
  ${(props) => {
    let styles = ''
    if (props.sidebar) {
      styles += `
        padding: 32px;
      `
    }
    if (props.header) {
      styles += `
        height: calc(100vh - 88px);
      `
    }
    return styles
  }}
  background: ${(props) => props.theme.color.background};
  overflow: auto;
  ${boxProperties};

  @media only screen and (max-width: ${maxTablet}) {
    padding: 25px;
    padding-bottom: 50px;
  }
`

export const StyledHeader = styled((props: LayoutProps) => {
  return <AntLayout.Header {...props} />
})`
  background: ${(props) => props.theme.color.secondary};
  /* 1000 is the zIndex of the modal */

  box-shadow: 0 1px 0 0 rgb(112 112 112 / 16%) !important;
  padding: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  ${boxProperties};
`

export const StyledBanner = styled((props: AlertProps) => <Alert {...props} />)`
  padding: 10px 50px;
  border: none;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  border-radius: 0;
  && {
    .ant-alert-message {
      display: flex;
      justify-content: center;
    }
  }
`

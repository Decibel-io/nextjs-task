import 'antd/dist/reset.css'

import { App, Content, If, Layout} from '@app/components'
import { ROUTE } from '@app/data'
import { IStore, logout, persistor, store } from '@app/redux'
import { GlobalStyles } from '@app/styles'
import { getThemeColors, THEME } from '@app/theme'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AppFonts } from 'public'
import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { NavBar } from '~collections'
// NOTE: Do not write code in this component unless required (use "Main" instead)
export default function Root(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <AppFonts />
        <Main {...props} />
      </PersistGate>
    </Provider>
  )
}

function Main({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const dispatch = useDispatch()

  const route = router.route

  const { theme, user } = useSelector((state: IStore) => state)
  const COLORS = getThemeColors(theme.value)

  useEffect(() => {
    authenticateUser()
  }, [user])

  /**
   * If the user is logged in, and they're on the sign-in or sign-up page, redirect them to the account
   * registration page
   */
  const authenticateUser = () => {
    if (user.uid) {
      if ([ROUTE.AUTH.SIGN_IN, ROUTE.ROOT].includes(route)) {
        router.replace(ROUTE.DASHBOARD)
      }
    } else {
      dispatch(logout())
      router.replace(ROUTE.AUTH.SIGN_IN)
    }
  }

  /**
   * If the route is not equal to /auth/sign-in or /auth/sign-up, then return true.
   * @returns The return value is a boolean.
   */
  const isAuthScreen = () => {
    return [ROUTE.AUTH.SIGN_IN].includes(route)
  }


  return (
    <ConfigProvider theme={THEME(theme.value, theme.dynamicTheme.isCompact)}>
      <App>
        <ThemeProvider
          theme={{
            color: COLORS,
          }}
        >
          <Layout>
            <If condition={!isAuthScreen()}>
              <NavBar />
            </If>
            <Layout>
              <Content header sidebar>
                <Component {...pageProps} />
              </Content>
            </Layout>
          </Layout>
        </ThemeProvider>
      </App>
    </ConfigProvider>
  )
}

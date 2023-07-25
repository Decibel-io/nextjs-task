import React from 'react'
import { ConfigProvider, Layout, theme as Algorithm } from 'antd'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import { THEME, ETheme, getThemeColors } from '@app/theme'
import { ThemeProvider } from 'styled-components'

const { Content } = Layout

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: themes.dark,
    light: themes.normal,
  },
}

function ThemeWrapper(props) {
  const COLORS = getThemeColors(useDarkMode() ? ETheme.DARK : ETheme.LIGHT)

  return (
    <ConfigProvider theme={THEME(useDarkMode() ? ETheme.DARK : ETheme.LIGHT, false)}>
      <ThemeProvider theme={{ color: COLORS }}>
        <Layout style={{ padding: 50 }}>
          <Content>{props.children}</Content>
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]

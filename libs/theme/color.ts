import { IStore } from '@app/redux'
import { useSelector } from 'react-redux'

import { ETheme } from './enums'

export const BASE_COLORS = {
  error: '#C6ABB2',
  primary: '#4C41F5',
  secondary: '#FFFFFF',
  white: '#fefefe',
  background: '#E7E7E7',
  grey1: '#00000072',
  grey2: '#8FA3C6',
  grey3: '#c1c1c1',
}

const DARK_MODE_COLORS = {
  background: '#121212',
  grey1: '#cdcdcd',
  grey2: '#cdcdcd',
  grey3: '#2d2d2d',
}

export const getThemeColors = (theme?: ETheme) => {
  const { color } = useSelector((state: IStore) => state)
  switch (theme) {
    case ETheme.LIGHT: {
      return {
        ...color,
      }
    }
    case ETheme.DARK: {
      return {
        ...color,
        ...DARK_MODE_COLORS,
      }
    }
    default: {
      return {
        ...color,
      }
    }
  }
}

import { IStore } from '@app/redux'
import { useSelector } from 'react-redux'

import { ETheme } from './enums'

export const BASE_COLORS = {
  error: '#D8382B',
  primary: '#4C41F5',
  secondary: '#FFFFFF',
  white: '#fff',
  background: '#E7E7E7',
  grey1: '#00000072',
  grey2: '#E0E6EE',
  grey3: '#f6f6f6',
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

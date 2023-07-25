import { IStore } from '@app/redux'
import { theme as Algorithm } from 'antd'
import { ThemeConfig } from 'antd/lib/config-provider/context'
import { useSelector } from 'react-redux'

import { getThemeColors } from './color'
import { ETheme } from './enums'

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = Algorithm

/* Generates an antd algorithm array based on provided values */
const generateThemeAlgorithm = (theme: ETheme, isCompact: boolean) => {
  const algorithm = []
  if (theme === ETheme.LIGHT) algorithm.push(defaultAlgorithm)
  if (theme === ETheme.DARK) algorithm.push(darkAlgorithm)
  if (isCompact) algorithm.push(compactAlgorithm)
  return algorithm
}

export const THEME = (theme: ETheme, isCompact: boolean): ThemeConfig => {
  const {
    theme: { dynamicTheme },
  } = useSelector((state: IStore) => state)
  const COLOR = getThemeColors(theme)

  return {
    algorithm: generateThemeAlgorithm(theme, isCompact),
    components: {
      Card: {
        colorBgContainer: COLOR.background,
        colorBorderSecondary: COLOR.grey2,
      },
      Checkbox: {
        controlInteractiveSize: 23,
      },
      Dropdown: {
        fontSize: 14,
      },
      Form: {
        marginLG: 20,
      },
      Menu: {
        dropdownWidth: 500,
        itemMarginInline: 0,
        radiusItem: 0,
      },
      Notification: {
        fontSize: 14,
        fontSizeLG: 16,
      },
      Steps: {
        descriptionWidth: 220,
      },
      Typography: {
        fontWeightStrong: 500,
      },
      Upload: {
        colorFillAlter: COLOR.grey3,
        controlHeightLG: 80,
        lineWidth: 0,
      },
      Modal: {
        fontSizeHeading5: 16,
      },
    },
    token: {
      colorBgBase: COLOR.background,
      ...(COLOR?.primary && { colorPrimary: COLOR?.primary }),
      ...(dynamicTheme?.fontSize && { fontSize: dynamicTheme?.fontSize }),
      ...(dynamicTheme?.fontFamily && { fontFamily: dynamicTheme?.fontFamily }),
      ...(dynamicTheme?.borderRadius && { borderRadius: dynamicTheme?.borderRadius }),
      ...(dynamicTheme?.controlHeight && { controlHeight: dynamicTheme?.controlHeight }),
      ...(dynamicTheme?.fontSizeHeading1 && { fontSizeHeading1: dynamicTheme?.fontSizeHeading1 }),
      ...(dynamicTheme?.fontSizeHeading2 && { fontSizeHeading2: dynamicTheme?.fontSizeHeading2 }),
      ...(dynamicTheme?.fontSizeHeading3 && { fontSizeHeading3: dynamicTheme?.fontSizeHeading3 }),
      ...(dynamicTheme?.fontSizeHeading4 && { fontSizeHeading4: dynamicTheme?.fontSizeHeading4 }),
      ...(dynamicTheme?.fontSizeHeading5 && { fontSizeHeading5: dynamicTheme?.fontSizeHeading5 }),
    },
  }
}

import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { ETheme } from '../../theme/enums'

interface IDynamicTheme {
  companyName: string
  isCompact: boolean
  fontSize: number
  fontFamily: string
  fontSizeHeading1: number
  fontSizeHeading2: number
  fontSizeHeading3: number
  fontSizeHeading4: number
  fontSizeHeading5: number
  controlHeight: number
  borderRadius: number
}

const initialState = {
  value: ETheme.DARK,
  dynamicTheme: {
    isCompact: false,
    companyName: 'Decibel / Asad Raza',
    fontSize: 16,
    fontFamily: 'Hellix',
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,
    controlHeight: 48,
    borderRadius: 2,
  },
}

export const themeSlicer = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
    },
    changeDynamicTheme: (state, action: PayloadAction<IDynamicTheme>) => {
      state.dynamicTheme.companyName = action.payload.companyName ? action.payload.companyName : 'Company'
      if (action.payload.isCompact !== undefined) state.dynamicTheme.isCompact = action.payload.isCompact
      if (action.payload.fontSize) state.dynamicTheme.fontSize = action.payload.fontSize
      if (action.payload.fontFamily) state.dynamicTheme.fontFamily = action.payload.fontFamily
      if (action.payload.controlHeight) state.dynamicTheme.controlHeight = action.payload.controlHeight
      if (action.payload.borderRadius !== undefined) state.dynamicTheme.borderRadius = action.payload.borderRadius
      if (action.payload.fontSizeHeading1) state.dynamicTheme.fontSizeHeading1 = action.payload.fontSizeHeading1
      if (action.payload.fontSizeHeading2) state.dynamicTheme.fontSizeHeading2 = action.payload.fontSizeHeading2
      if (action.payload.fontSizeHeading3) state.dynamicTheme.fontSizeHeading3 = action.payload.fontSizeHeading3
      if (action.payload.fontSizeHeading4) state.dynamicTheme.fontSizeHeading4 = action.payload.fontSizeHeading4
      if (action.payload.fontSizeHeading5) state.dynamicTheme.fontSizeHeading5 = action.payload.fontSizeHeading5
    },
  },
})

export const { changeDynamicTheme, toggleTheme } = themeSlicer.actions

export default themeSlicer.reducer

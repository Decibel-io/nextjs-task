import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IColor {
  error?: string
  primary: string
  secondary: string
  white?: string
  background?: string
  grey1?: string
  grey2?: string
  grey3?: string
}

const initialState = {
  error: '#D8382B',
  primary: '#194A6A',
  secondary: '#162231',
  white: '#fff',
  background: '#fff',
  grey1: '#00000072',
  grey2: '#E0E6EE',
  grey3: '#f6f6f6',
}

export const colorSlicer = createSlice({
  initialState,
  name: 'color',
  reducers: {
    changeThemeColor: (state, action: PayloadAction<IColor, 'primary' | 'secondary'>) => {
      if (action.payload.primary) state.primary = action.payload.primary
      if (action.payload.secondary) state.secondary = action.payload.secondary
    },
  },
})

export const { changeThemeColor } = colorSlicer.actions

export default colorSlicer.reducer

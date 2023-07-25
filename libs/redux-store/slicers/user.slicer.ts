import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IUser {
  accessToken: string
  uid: string
  userName?: string
}

const initialState: IUser = {
  accessToken: '',
  userName: '',
  uid: '',
}

export const userSlicer = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken
      state.userName = action.payload.userName
      state.uid = action.payload.uid
    },
    logout: (state) => {
      state.accessToken = undefined
      state.userName = undefined
      state.uid = undefined
    },
    refresh: (state,  action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken
      state.userName = action.payload.userName
      state.uid = action.payload.uid
    },
   
  },
})

export const { login, logout, refresh } = userSlicer.actions

export default userSlicer.reducer

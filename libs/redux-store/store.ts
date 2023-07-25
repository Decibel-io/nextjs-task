import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import colorSlicer from './slicers/color.slicer'
import themeSlicer from './slicers/theme.slicer'
import userSlicer from './slicers/user.slicer'

const rootReducer = combineReducers({
  theme: themeSlicer,
  user: userSlicer,
  color: colorSlicer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type IStore = ReturnType<typeof store.getState>

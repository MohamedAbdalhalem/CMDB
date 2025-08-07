import { configureStore } from '@reduxjs/toolkit'
import  authsilce  from './authSlice'

export const ourStore = configureStore({
    reducer: {
      authsilce,
  },
})
export type ourStoreType = ReturnType<typeof ourStore.getState>
export type AppDispatch = typeof ourStore.dispatch
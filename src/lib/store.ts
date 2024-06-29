import headerSlice from '@/components/common/headerSlice'
import modalSlice from '@/components/common/modalSlice'
import rightDrawerSlice from '@/components/common/rightDrawerSlice'
import userSlice from '@/components/common/userSlice'
import leadSlice from '@/app/(protected)/leads/leadSlice'

import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header : headerSlice,
      rightDrawer : rightDrawerSlice,
      leads : leadSlice,
      modal : modalSlice,
      user : userSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
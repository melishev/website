import { configureStore } from '@reduxjs/toolkit'

import modalsReducer from './state/modals'

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
})
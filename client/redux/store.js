import { configureStore } from '@reduxjs/toolkit'

import reducerGlobal from './state/global'
import reducerModals from './state/modals'

export const store = configureStore({
  reducer: {
    global: reducerGlobal,
    modals: reducerModals,
  },
})
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navigation: {
    open: false,
  },
}

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openNavigation(state) {
      state.navigation.open = true
    },
    closeNavigation(state) {
      state.navigation.open = false
    },
  },
})

export const { openNavigation, closeNavigation } = modals.actions

export const selectModalNavigation = (state) => state.modals.navigation

export default modals.reducer
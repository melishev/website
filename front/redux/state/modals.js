import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navigation: {
    open: false,
    items: [
      {
        name: 'Projects',
        slug: 'projects',
      },
      {
        name: 'News',
        slug: 'news',
      },
      {
        name: 'Products',
        slug: 'products',
      },
      {
        name: 'Contacts',
        slug: 'contacts',
      }
    ]
  },
}

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    changeNavigation(state) {
      state.navigation.open = !state.navigation.open
    },
  },
})

export const { changeNavigation } = modals.actions

export const selectNavigation = (state) => state.modals.navigation

export default modals.reducer
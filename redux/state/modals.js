import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Navigation: {
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
      state.Navigation.open = !state.Navigation.open
    },
  },
})

export const { changeNavigation } = modals.actions

export const selectNavigation = (state) => state.modals.Navigation

export default modals.reducer
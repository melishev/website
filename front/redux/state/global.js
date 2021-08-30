import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navigation: [
    // {
    //   name: 'Проекты',
    //   slug: 'projects',
    // },
    {
      name: 'Новости',
      slug: 'news',
    },
    // {
    //   name: 'Продукты',
    //   slug: 'products',
    // },
    // {
    //   name: 'Контакты',
    //   slug: 'contacts',
    // },
  ],
};

const global = createSlice({
  name: 'global',
  initialState,
});

export const selectDataNavigation = (state) => state.global.navigation;

export default global.reducer;

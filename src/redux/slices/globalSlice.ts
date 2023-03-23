import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isNavSideClose: true,
    isMenuClicked: false,
  },
  reducers: {
    setNavSideClose: (state, { payload }) => {
      state.isNavSideClose = payload;
    },

    setMenuClicked: (state) => {
      state.isMenuClicked = !state.isMenuClicked;
    },
  },
});

export const { setNavSideClose, setMenuClicked } = globalSlice.actions;

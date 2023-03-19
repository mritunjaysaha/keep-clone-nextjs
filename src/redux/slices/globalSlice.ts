import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isNavSideClose: false,
  },
  reducers: {
    setNavSide: (state, { payload }) => {
      state.isNavSideClose = payload;
    },
  },
});

export const { setNavSide } = globalSlice.actions;

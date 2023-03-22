import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isNavSideClose: true,
  },
  reducers: {
    setNavSide: (state, { payload }) => {
      state.isNavSideClose = payload;
    },
  },
});

export const { setNavSide } = globalSlice.actions;

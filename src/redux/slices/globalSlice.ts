import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isNavSideClose: true,
  },
  reducers: {
    setNavSideClose: (state, { payload }) => {
      state.isNavSideClose = payload;
    },
  },
});

export const { setNavSideClose } = globalSlice.actions;

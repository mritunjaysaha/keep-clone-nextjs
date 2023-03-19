import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    id: '',
    email: '',
    firstName: '',
    lastName: '',
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthenticated = !!payload.id;
      state.id = payload.id;
    },
  },
});

export const { setAuth } = userSlice.actions;

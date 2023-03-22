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
    setUserData: (state, { payload }) => {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
  },
});

export const { setAuth, setUserData } = userSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    email: '',
    firstName: '',
    lastName: '',
    labels: [],
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthenticated = !!payload.id;
    },
    setUserData: (state, { payload }) => {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    setLabels: (state, { payload }) => {
      state.labels = payload;
    },
  },
});

export const { setAuth, setUserData, setLabels } = userSlice.actions;

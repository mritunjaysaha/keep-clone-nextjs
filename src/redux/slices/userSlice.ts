import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    email: '',
    firstName: '',
    lastName: '',
    jwtToken: '',
    labels: [],
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthenticated = !!payload;
      state.jwtToken = payload;
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

import { createSlice } from '@reduxjs/toolkit';

import type { Label } from '@/types/labels/Label';

type UserStateType = {
  isAuthenticated: boolean;
  email: string;
  firstName: string;
  lastName: string;
  jwtToken: string;
  labels: Label[];
};

const initialState: UserStateType = {
  isAuthenticated: false,
  email: '',
  firstName: '',
  lastName: '',
  jwtToken: '',
  labels: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
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

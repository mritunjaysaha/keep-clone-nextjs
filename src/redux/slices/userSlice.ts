import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Label } from '@/types/labels/Label';

export type LabelForm = Label & { isChecked: boolean };

type UserStateType = {
  isAuthenticated: boolean;
  email: string;
  firstName: string;
  lastName: string;
  jwtToken: string;
  labels: { [labelId: string]: LabelForm };
  labelIds: string[];
};

const initialState: UserStateType = {
  isAuthenticated: false,
  email: '',
  firstName: '',
  lastName: '',
  jwtToken: '',
  labels: {},
  labelIds: [],
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
    setLabels: (state, { payload }: PayloadAction<Label[]>) => {
      console.log('[Labels]', { payload });

      for (let i = 0, len = payload.length; i < len; i += 1) {
        const { labelId, labelName } = payload[i] as Label;

        state.labels[labelId] = { labelId, labelName, isChecked: false };
        if (!state.labelIds.includes(labelId)) {
          state.labelIds.push(labelId);
        }
      }
    },
  },
});

export const { setAuth, setUserData, setLabels } = userSlice.actions;

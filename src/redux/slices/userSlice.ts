import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Label } from '@/types/labels/Label';
import type { Todo } from '@/types/todos/Todo';

export type LabelForm = Label & { isChecked: boolean };

type UserStateType = {
  isAuthenticated: boolean;
  email: string;
  firstName: string;
  lastName: string;
  jwtToken: string;
  labels: { [labelId: string]: LabelForm };
  labelIds: string[];
  todos: { [todoId: string]: Todo };
  todoIds: string[];
};

const initialState: UserStateType = {
  isAuthenticated: false,
  email: '',
  firstName: '',
  lastName: '',
  jwtToken: '',
  labels: {},
  labelIds: [],
  todos: {},
  todoIds: [],
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
    setTodos: (state, { payload }: PayloadAction<Todo[]>) => {
      for (let i = 0, len = payload.length; i < len; i += 1) {
        const data = payload[i] as Todo;

        state.todos[data.todoId as string] = data;

        if (!state.todoIds.includes(data.todoId as string)) {
          state.todoIds.push(data.todoId as string);
          console.log('[Todos]', data);
        }
      }
    },
  },
});

export const { setAuth, setUserData, setLabels, setTodos } = userSlice.actions;

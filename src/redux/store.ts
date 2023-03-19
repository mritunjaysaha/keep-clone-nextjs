import { configureStore } from '@reduxjs/toolkit';

import { globalSlice } from '@/redux/slices/globalSlice';
import { userSlice } from '@/redux/slices/userSclice';

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    user: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

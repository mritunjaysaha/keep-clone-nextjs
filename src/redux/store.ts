// @ts-nocheck
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { globalSlice } from '@/redux/slices/globalSlice';
import { userSlice } from '@/redux/slices/userSlice';

interface GlobalState {
  // Define the state shape of the global slice here
  isNavSideClose: boolean;
  isMenuClicked: boolean;
  // Add other properties as needed
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  global: globalSlice.reducer as (
    state: GlobalState | undefined,
    action: any,
  ) => GlobalState,
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

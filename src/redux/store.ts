import { configureStore } from '@reduxjs/toolkit';

import { globalSlice } from '@/redux/slices/globalSlice';
import { userSlice } from '@/redux/slices/userSclice';

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    user: userSlice.reducer,
  },
});

import reducer from './slices';
import { configureStore } from '@reduxjs/toolkit';
import { initialApi } from './services';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      initialApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

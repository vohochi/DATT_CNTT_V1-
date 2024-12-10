import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slice/customerSlice';
import addressSlice from './slice/addressSlice';

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    address: addressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

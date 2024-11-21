import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slice/customerSlice';
import productSlice from './slice/productSlice';

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

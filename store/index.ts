import { configureStore } from '@reduxjs/toolkit';
// import customerSlice from './slice/customerSlice';
// import bannerSlice from './slice/bannerSlice';
// import productSlice from './slice/productSlice';
// import authSlice from './slice/authSlice';

export const store = configureStore({
  reducer: {
    // customer: customerSlice,
    // banner:bannerSlice,
    // product: productSlice,
    // auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

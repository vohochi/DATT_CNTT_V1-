// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { ICustomer } from '@/types/Customer';
// import { CustomerGroups } from '@/_lib/customer';

// // Define the thunk to fetch customer groups
// export const fetchCustomerGroups = createAsyncThunk(
//   'customer/fetchCustomerGroups',
//   async () => {
//     const response = await CustomerGroups();
//     return response as ICustomer;
//   }
// );

// const customerSlice = createSlice({
//   name: 'customer',
//   initialState: {
//     groups: [] as ICustomer['data'],
//     meta: {
//       pagination: {
//         total: 0,
//         count: 0,
//         per_page: 0,
//         current_page: 0,
//         total_pages: 0,
//       },
//     },
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCustomerGroups.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCustomerGroups.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.groups = action.payload.data;
//         state.meta = action.payload.meta;
//       })
//       .addCase(fetchCustomerGroups.rejected, (state) => {
//         state.status = 'failed';
//         state.status = 'error';
//       });
//   },
// });

// export const {} = customerSlice.actions;
// export default customerSlice.reducer;

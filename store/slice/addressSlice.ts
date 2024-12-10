import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAddress } from '@/types/Address';
import { AddressGroups } from '@/_lib/address';

// Define the thunk to fetch customer groups
export const fetchAddressGroups = createAsyncThunk(
  'address/fetchAddressGroups',
  async () => {
    const response = await AddressGroups();
    return response as IAddress;
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    groups: [] as IAddress['data'],
    meta: {
      pagination: {
        total: 0,
        count: 0,
        per_page: 0,
        current_page: 0,
        total_pages: 0,
      },
    },
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddressGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(fetchAddressGroups.rejected, (state) => {
        state.status = 'failed';
        state.status = 'error';
      });
  },
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;

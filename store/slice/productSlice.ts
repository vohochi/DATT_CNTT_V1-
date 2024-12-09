import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '@/types/Product';
import { fetchAllProduct } from '@/_lib/product';

//
export const fetchProductGroups = createAsyncThunk<IProduct[]>(
  'product/fetchProductGroups',
  async () => {
    const response = await fetchAllProduct();
    return response;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [] as IProduct[],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductGroups.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch product groups';
      });
  },
});

export default productSlice.reducer;

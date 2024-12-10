import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IFile } from '@/types/File';
import { FileGroups } from '@/_lib/file';

// Define the thunk to fetch customer groups
export const fetchFileGroups = createAsyncThunk(
  'file/fetchFileGroups',
  async () => {
    const response = await FileGroups();
    return response as IFile;
  }
);

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    groups: [] as IFile['data'],
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
      .addCase(fetchFileGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFileGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(fetchFileGroups.rejected, (state) => {
        state.status = 'failed';
        state.status = 'error';
      });
  },
});

export const {} = fileSlice.actions;
export default fileSlice.reducer;

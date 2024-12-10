import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ISetting } from '@/types/Setting';
import { SettingGroups } from '@/_lib/setting';

// Define the thunk to fetch customer groups
export const fetchSettingGroups = createAsyncThunk(
  'setting/fetchsettingGroups',
  async () => {
    const response = await SettingGroups();
    return response as ISetting;
  }
);

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    groups: [] as ISetting['data'],
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
      .addCase(fetchSettingGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSettingGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(fetchSettingGroups.rejected, (state) => {
        state.status = 'failed';
        state.status = 'error';
      });
  },
});

export const {} = settingSlice.actions;
export default settingSlice.reducer;

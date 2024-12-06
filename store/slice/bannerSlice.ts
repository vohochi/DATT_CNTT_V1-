import { fetchData } from '@/_lib/data-services';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface BannerState {
  code: string;
  title: string;
  description: string;
  background_color: string;
  is_active: boolean;
}

const initialState: BannerState = {
  code: '',
  title: '',
  description: '',
  background_color: '',
  is_active: false,
};

// Thunk để fetch banner data
export const fetchBanner = createAsyncThunk('banner/fetchBanner', async () => {
  const API_URL = 'api/auth/banner';
  const response = await fetchData(API_URL);
  return response;
});

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<BannerState>) => {
      state.code = action.payload.code;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.background_color = action.payload.background_color;
      state.is_active = action.payload.is_active;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.code = action.payload.code;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.background_color = action.payload.background_color;
      state.is_active = action.payload.is_active;
    });
  },
});

export const { setBanner } = bannerSlice.actions;
export default bannerSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth } from '@/types/Auth'; // Import IAuth interface
import { Register } from '@/_lib/auth'; // Import Register function

// Async Thunk để gọi API đăng ký
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (data: IAuth) => {
    try {
      const response = await Register(data);
      return response; // Trả về kết quả của API
    } catch (error) {
      // Quăng lỗi nếu có lỗi xảy ra
      throw new Error(error?.message || 'Đăng ký thất bại');
    }
  }
);

interface AuthState {
  user: IAuth | null; // user có thể là IAuth hoặc null
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null, // Ban đầu chưa có người dùng nào đăng nhập
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth', // Tên của slice
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true; // Đang chờ API trả về
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Cập nhật thông tin người dùng sau khi đăng ký thành công
        state.error = null; // Đặt lỗi thành null khi đăng ký thành công
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Có lỗi xảy ra'; // Xử lý lỗi
      });
  },
});

export default authSlice.reducer;

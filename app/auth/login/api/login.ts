import { IAuth } from '@/types/Auth';
import axios from 'axios';

export const Login = async (data: IAuth) => {
  try {
    const response = await axios.post('/api/login', data);

    console.log('Login success:', response.data);
    return response.data; // Trả về dữ liệu thành công
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login error:', error.response.data);
      throw error.response.data; // Quăng lỗi server để xử lý
    } else {
      console.error('Unknown login error:', error);
      throw { message: 'An unknown error occurred during login' };
    }
  }
};

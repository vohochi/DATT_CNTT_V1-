import axios from 'axios';
import { IAuth } from '@/types/Auth';

const API_URL = 'https://api-core.dsp.one/api/auth/user';

export const Register = async (data: IAuth) => {
  try {
    const response = await axios.post(API_URL, data);

    console.log('Register success:', response);
    return response.data; // Trả về dữ liệu thành công
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Register error:', error.response.data);
      throw error.response.data; // Quăng lỗi server để xử lý
    } else {
      console.error('Unknown register error:', error);
      throw { message: 'An unknown error occurred during registration' };
    }
  }
};

export const Login = async (data: IAuth) => {
  try {
    const response = await axios.post('http://api-core.dsp.one/login', data);

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
export const Logout = async () => {
  try {
    const response = await axios.post('https://api-core.dsp.one/logout', {
      headers: {
        allowed_secrets:
          'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json', // Đảm bảo định dạng JSON
      },
    });

    console.log('logout success:', response.data);
    return response.data; // Trả về dữ liệu thành công
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('logout error:', error.response.data);
      throw error.response.data; // Quăng lỗi server để xử lý
    } else {
      console.error('Unknown logout error:', error);
      throw { message: 'An unknown error occurred during logout' };
    }
  }
};

export const sendOTP = async (data: IAuth) => {
  try {
    const response = await axios.post(
      'https://api-core.dsp.one/api/password/send-otp',
      data,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json', // Đảm bảo định dạng JSON
        },
      }
    );

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

export const verifyOTP = async (data: IAuth) => {
  try {
    const response = await axios.post(
      'https://api-core.dsp.one/api/password/verify-otp',
      data,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json', // Đảm bảo định dạng JSON
        },
      }
    );

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

export const resetPassword = async (data: IAuth) => {
  try {
    const response = await axios.post(
      'https://api-core.dsp.one/api/password/reset-password',
      data,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json', // Đảm bảo định dạng JSON
        },
      }
    );

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

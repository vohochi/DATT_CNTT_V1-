import axios from 'axios';

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

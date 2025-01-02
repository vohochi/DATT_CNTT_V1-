import { IAuth } from '@/types/Auth';
import axios from 'axios';

export async function register(userData: IAuth) {
  try {
    const response = await axios.post('/api/register', userData, {
      headers: {
        allowed_secrets:
          'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json', // Đảm bảo định dạng JSON
      },
    });
    console.log(response);

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

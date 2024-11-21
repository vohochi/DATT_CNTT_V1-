import axios from 'axios';

const BASE_URL = 'https://api-core.dsp.one/';

export const dataServices = async <T, R>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  data?: T
): Promise<R> => {
  try {
    const config = {
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
      withCredentials: true,
      headers: {
        allowed_secrects:
          'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
      },
    };

    const response = await axios(config);

    if (!response.data) {
      throw new Error('No data returned from API');
    }

    return response.data as R;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error fetching data:', error.response.data);
      return error.response.data as R;
    } else if (
      typeof error === 'object' &&
      error !== null &&
      'message' in error
    ) {
      console.error('Error fetching data:', error.message);
      return { message: error.message } as R;
    } else {
      console.error('Error fetching data:', error);
      return { message: 'An unknown error occurred' } as R;
    }
  }
};

// Utility methods for easy API interactions
export const fetchData = <T>(endpoint: string): Promise<T> =>
  dataServices<void, T>(endpoint, 'GET', undefined);

export const postData = <T>(endpoint: string, data: T) =>
  dataServices<T, T>(endpoint, 'POST', data);

export const updateData = <T>(endpoint: string, data: T) =>
  dataServices<T, T>(endpoint, 'PATCH', data);

export const deleteData = (endpoint: string) =>
  dataServices<void, void>(endpoint, 'DELETE', undefined);

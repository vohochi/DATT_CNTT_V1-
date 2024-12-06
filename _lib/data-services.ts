import axios from 'axios';

const BASE_URL = 'https://api-core.dsp.one/';

//
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
    };

    const response = await axios(config);
    console.log(response)
    if (!response.data) {
      throw new Error('No data returned from API');
    }

    return response.data as R;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error fetching data:', error.response.data);
      // Return the error data from the API response
      return error.response.data as R;
    } else if (
      typeof error === 'object' &&
      error !== null &&
      'message' in error
    ) {
      console.error('Error fetching data:', error.message);
      // Return a generic error object
      return { message: error.message } as R;
    } else {
      console.error('Error fetching data:', error);
      // Return a generic error object
      return { message: 'An unknown error occurred' } as R;
    }
  }
};

// Export các phương thức cho dễ sử dụng
export const fetchData = <T>(endpoint: string): Promise<T> =>
  dataServices<void, T>(endpoint, 'GET', undefined);

export const postData = <T>(endpoint: string, data: T) =>
  dataServices<T, T>(endpoint, 'POST', data);

export const updateData = <T>(endpoint: string, data: T) =>
  dataServices<T, T>(endpoint, 'PATCH', data);

export const deleteData = (endpoint: string) =>
  dataServices<void, void>(endpoint, 'DELETE', undefined);

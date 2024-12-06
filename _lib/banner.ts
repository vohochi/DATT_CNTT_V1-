import { fetchData } from './data-services';

const API_URL = 'api/auth';

export const fetchAllBanner = async () => {
  try {
    const response = await fetchData(
      `${API_URL}/banner`
    );
    console.log(response)
    return response;
  } catch (error) {
    console.error('Error fetching banner:', error);
    throw new Error('Data could not be loaded');
  }
};

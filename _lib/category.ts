import { fetchData } from './data-services';

const API_URL = 'api/auth';

export const fetchAllCategory = async () => {
  try {
    const response = await fetchData(
      `${API_URL}/category`
    );
    console.log('res',response)
    return response;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw new Error('Data could not be loaded');
  }
};

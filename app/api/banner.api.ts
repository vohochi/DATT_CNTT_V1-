import axios from 'axios';

export const fetchAllBanner = async () => {
  try {
    const response = await axios.get(
      'https://api-core.dsp.one/api/auth/banner'
    );
    console.log('banenr', response.data.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

import axios from 'axios';

export const fetchAllPost = async () => {
  try {
    // await enableCorsAnywhere();

    const response = await axios.get('https://api-core.dsp.one/api/auth/post');
    console.log('post blog:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

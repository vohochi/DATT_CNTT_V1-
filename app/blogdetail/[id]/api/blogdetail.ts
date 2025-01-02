import axios from 'axios';

export const getPostById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api-core.dsp.one/api/auth/post/${id}`
    );
    console.log('post blog detail:', response.data);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

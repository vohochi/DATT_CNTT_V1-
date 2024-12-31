import axios from 'axios';

const enableCorsAnywhere = async () => {
  try {
    await axios.get(`https://cors-anywhere.herokuapp.com/corsdemo`);
    console.log('CORS Anywhere activated!');
  } catch (error) {
    console.error('Failed to activate CORS Anywhere:', error);
  }
};

export const fetchAllPost = async () => {
  try {
    await enableCorsAnywhere();
    
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/post',
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('post blog:',response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const getPostById = async (id:number) => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/post/${id}`,
        {
          headers: {
            allowed_secrets:
              'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('post blog detail:',response.data);
  
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
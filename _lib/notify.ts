import axios from 'axios';

export const fetchAllNotify = async (page = 1, per_page = 10) => {
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/notify?page=${page}&per_page=${per_page}`,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('notify',response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

// export const fetchAllCategory = async () => {
//   try {
//     const response = await fetchData(
//       `${API_URL}/category`
//     );
//     console.log('res',response)
//     return response;
//   } catch (error) {
//     console.error('Error fetching category:', error);
//     throw new Error('Data could not be loaded');
//   }
// };

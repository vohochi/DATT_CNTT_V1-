import axios from 'axios';

export const fetchProfile = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api-core.dsp.one/api/auth/user/user-profile/${id}`,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json', // Thêm Content-Type nếu cần
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

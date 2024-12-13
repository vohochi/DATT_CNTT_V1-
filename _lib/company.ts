import axios from 'axios';

export const fetchAllCompanyService = async () => {
  try {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/company/api/get-all',
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('cpn-service', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const fetchAllCompanyServiceById = async (id:number) => {
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/company/api/get/${id}`,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('cpn-service-by-id', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};
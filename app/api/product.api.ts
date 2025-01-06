// import { corsNextjs } from '@/app/components/utils/utils';
import axios from 'axios';

export const getProductApi = async () => {
  const response = await axios.get(
    'https://api-core.dsp.one/api/client/product'
  );
  return response.data;
};

const cache = new Map();

export const fetchProducts = async () => {
  const cacheKey = 'products';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get(
      'https://api-core.dsp.one/api/client/product'
      // {
      //   headers: {
      //     allowed_secrets:
      //       'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
      //     'Content-Type': 'application/json',
      //   },
      // }
    );
    console.log(response);
    cache.set(cacheKey, response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const getProductById = async (id: number) => {
  const cacheKey = `product_${id}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get(
      `https://api-core.dsp.one/api/auth/product/${id}`
    );
    cache.set(cacheKey, response.data);
    // console.log(response.data.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

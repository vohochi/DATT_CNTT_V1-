import axios from 'axios';

const cache = new Map();

export const fetchProducts = async () => {
  const cacheKey = 'products';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/client/product',
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
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
      `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/client/product/${id}`,
      {
        headers: {
          allowed_secrets:
            'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
        },
      }
    );
    cache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

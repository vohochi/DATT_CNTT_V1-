import { IProduct } from '@/types/Product';
import { fetchData } from './data-services';

const API_URL = '/product/api/client/product';

// all products
export const fetchAllProduct = async (): Promise<IProduct[]> => {
  const response = await fetchData(`${API_URL}`);
  console.log(response);
  return response as IProduct[]; // Chuyển kiểu trả về thành IProduct[]
};

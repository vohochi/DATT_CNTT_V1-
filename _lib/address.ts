import { fetchData } from './data-services';

const API_URL = '/api/auth/address'; // Địa chỉ API của bạn

export const AddressGroups = async () => {
  const response = await fetchData(API_URL);
  if (!response) {
    console.error('Failed to fetch address groups.');
    return { data: [], meta: {} }; // Trả về dữ liệu mặc định nếu lỗi
  }
  return response;
};
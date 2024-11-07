import { fetchData } from './data-services';

const API_URL = '/user/api/auth'; // Địa chỉ API của bạn

export const CustomerGroups = async () => {
  const response = await fetchData(`${API_URL}/customer-groups`);
  return response;
};

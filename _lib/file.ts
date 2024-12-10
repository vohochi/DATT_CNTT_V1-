import { fetchData } from './data-services';

const API_URL = '/user/api/auth'; // Địa chỉ API của bạn

export const FileGroups = async () => {
  const response = await fetchData(`${API_URL}/file-groups`);
  return response;
};

import { Meta } from '@/types/Pagination';

export interface Customer {
  id: number;
  code: string;
  name: string;
  avatar: string;
  email: string;
  nick_name: string | null;
  gender: string;
  phone: string;
  birthday: string | null;
  address: string | null;
  is_active: number;
  customer_group: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

export interface ICustomer {
  data: Customer[];
  meta: Meta;
}

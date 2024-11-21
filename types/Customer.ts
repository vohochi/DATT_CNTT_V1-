import { Meta } from '@/types/Pagination';

export interface Customer {
  id: number;
  code: string;
  name: string;
  description: string;
  is_active: boolean;
  deleted: boolean;
  created_at: Date | string;
  updated_at: Date | string;
}

export interface ICustomer {
  data: Customer[];
  meta: Meta;
}

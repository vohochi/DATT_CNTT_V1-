import { Meta } from '@/types/Pagination';

export interface Customer {
  code: string;
  name: string;
  description: string;
  is_active: boolean;
  deleted: boolean;
}

export interface ICustomer {
  data: Customer[];
  meta: Meta;
}

import { Meta } from '@/types/Pagination';

export interface Setting {
    code: string;
    name: string;
    slug: string;
    value: string;
    type: string;
    data: boolean;
    created_at: string;
    updated_at: string;
}

export interface ISetting {
  data: Setting[];
  meta: Meta;
}
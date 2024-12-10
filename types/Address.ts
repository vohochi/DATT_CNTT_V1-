import { Meta } from '@/types/Pagination';

export interface Address {
    id: number;
    house_number: string;
    ward_code: string;
    district_code: string;
    province_code: string;
    is_primary: boolean;
    ward: string;
    district: string;
    province: string; 
    is_priprovince: string;
    created_at: string;
    updated_at: string;
}

export interface IAddress {
  data: Address[];
  meta: Meta;
}
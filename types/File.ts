import { Meta } from '@/types/Pagination';

export interface File {
    filename: string;
    path: string;
    type: string;
    size: number;
    created_at: string;
    updated_at: string;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface IFile {
  data: File[];
  meta: Meta;
}

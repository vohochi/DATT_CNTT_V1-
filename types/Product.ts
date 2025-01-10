export interface Product {
  id: number;
  code: string;
  name: string;
  slug: string;
  type: string;
  short_description: string;
  description: string;
  thumbnail: {
    id: number,
    filename: string,
    path: string,
    type: string,
    size: number,
    created_at: string,
    updated_at: string
  };
  price: number;
  width: number;
  length: number;
  height: number;
  data: Product;
  category: {
    id: number;
    name: string;
    slug: string;
    code: string;
    lang: string;
    is_active: number;
  };
  status: number;
}

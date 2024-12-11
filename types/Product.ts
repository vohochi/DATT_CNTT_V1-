export interface Product {
  id: number;
  code: string;
  name: string;
  slug: string;
  type: string;
  short_description: string;
  description: string;
  thumbnail: string | null;
  price: number;
  width: number;
  length: number;
  height: number;
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

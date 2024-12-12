export interface Order {
  id: number;
  code: string;
  cart_id?: number;
  user_id: number;
  name: string;
  phone_number: string;
  shipping_address: string;
  payment_method: number;
  shipping_unit: number;
  shipping_costs: number;
  total_order: number;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface OrderResponse {
  status: 'success' | 'error';
  message?: string;
  data: Order[];
}
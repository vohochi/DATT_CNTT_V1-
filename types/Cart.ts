// Interface cho thông tin giỏ hàng
export interface Cart {
  id: number;
  customer_id: number;
  address: string;
  total_price: number;
  shipping_unit: string;
  created_at: string;
  updated_at: string;
}

// Interface cho chi tiết sản phẩm trong giỏ hàng
export interface CartDetail {
  id: number;
  cart_id: number;
  product_id: number;
  quantity: number;
  price: number;
  total_price_detail: number;
  created_at: string;
  updated_at: string;
}

// Interface cho response khi lấy thông tin giỏ hàng
export interface CartResponse {
  message: string;
  data: Cart;
  cart_details: CartDetail[];
}

// Interface cho request tạo giỏ hàng mới
export interface CreateCartRequest {
  customer_id: number;
  address: string;
  shipping_unit: string;
  total_price: number;
}

// Interface cho request cập nhật giỏ hàng
export interface UpdateCartRequest {
  address?: string;
  shipping_unit?: string;
  total_price?: number;
}

// Interface cho request thêm sản phẩm vào giỏ hàng
export interface AddToCartRequest {
  cart_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

// Interface cho request cập nhật số lượng sản phẩm
export interface UpdateCartDetailRequest {
  quantity: number;
  price: number;
}

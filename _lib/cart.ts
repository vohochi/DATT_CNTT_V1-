import axios from 'axios';
import {
  CartResponse,
  CreateCartRequest,
  UpdateCartRequest,
  AddToCartRequest,
  UpdateCartDetailRequest
} from '@/types/Cart';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/cart';

// Lấy thông tin giỏ hàng
export const getCart = async (cartId: number): Promise<CartResponse> => {
  try {
    const response = await axios.get(`${API_URL}/${cartId}`, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Tạo giỏ hàng mới
export const createCart = async (data: CreateCartRequest): Promise<CartResponse> => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Cập nhật thông tin giỏ hàng
export const updateCart = async (cartId: number, data: UpdateCartRequest): Promise<CartResponse> => {
  try {
    const response = await axios.put(`${API_URL}/${cartId}`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Thêm sản phẩm vào giỏ hàng
export const addToCart = async (data: AddToCartRequest): Promise<CartResponse> => {
  try {
    const response = await axios.post(`${API_URL}/add-product`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartDetail = async (
  cartId: number,
  productId: number,
  data: UpdateCartDetailRequest
): Promise<CartResponse> => {
  try {
    const response = await axios.put(`${API_URL}/${cartId}/product/${productId}`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = async (cartId: number, productId: number): Promise<CartResponse> => {
  try {
    const response = await axios.delete(`${API_URL}/${cartId}/product/${productId}`, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

import axios from 'axios';
import { Order, OrderResponse } from '@/types/Order';
import Cookies from 'js-cookie';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/order';

export const createOrder = async (orderData: Order): Promise<OrderResponse> => {
  try {
    const response = await axios.post(API_URL, orderData, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
      },
    });

    return {
      status: 'success',
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: 'error',
        message: error.response.data.message || 'Failed to create order',
        data: [] // Thêm data rỗng khi có lỗi
      };
    }
    return {
      status: 'error',
      message: 'An unknown error occurred',
      data: [] // Thêm data rỗng khi có lỗi
    };
  }
};

export const getOrderHistory = async (): Promise<OrderResponse> => {
  try {
    const token = Cookies.get('token');
    
    if (!token) {
      throw new Error('Please login to view orders');
    }

    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/order/myorderhistory',
      {
        headers: {
          allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );

    return {
      status: 'success',
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        return {
          status: 'error',
          message: 'You are not authorized to view this content. Please login again.',
          data: []
        };
      }
      return {
        status: 'error',
        message: error.response?.data?.message || 'Failed to fetch orders',
        data: []
      };
    }
    return {
      status: 'error',
      message: 'An unknown error occurred',
      data: []
    };
  }
};

export const getOrderDetail = async (code: string): Promise<OrderResponse> => {
  try {
    const token = Cookies.get('token');
    
    if (!token) {
      throw new Error('Please login to view order details');
    }

    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/order/mydetail/${code}`,
      {
        headers: {
          allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );

    return {
      status: 'success',
      data: [response.data.data], // Wrap single order in array to match interface
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        return {
          status: 'error',
          message: 'You are not authorized to view this content. Please login again.',
          data: []
        };
      }
      return {
        status: 'error',
        message: error.response?.data?.message || 'Failed to fetch order details',
        data: []
      };
    }
    return {
      status: 'error', 
      message: 'An unknown error occurred',
      data: []
    };
  }
};
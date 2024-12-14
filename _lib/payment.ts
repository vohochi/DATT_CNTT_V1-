import axios from 'axios';
import Cookies from 'js-cookie';
import {
  PaymentHistory,
  PaymentHistoryResponse,
  PaymentHistoryError,
  CreatePaymentHistoryRequest,
  CreatePaymentHistoryResponse,
  UpdatePaymentHistoryRequest,
  UpdatePaymentHistoryResponse,
  PaymentMethod,
  PaymentMethodResponse,
  CreatePaymentMethodRequest,
  CreatePaymentMethodResponse,
  UpdatePaymentMethodRequest,
  UpdatePaymentMethodResponse,
  DeletePaymentMethodResponse,
  PaymentMethodError
} from '@/types/Payment';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/payment/api';

// Payment History APIs
export const getAllPaymentHistory = async (): Promise<PaymentHistoryResponse> => {
  try {
    const token = Cookies.get('token');
    if (!token) {
      throw new Error('Please login to view payment history');
    }

    const response = await axios.get(`${API_URL}/history/get-all`, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data as PaymentHistoryError;
    }
    throw { message: 'An unknown error occurred' };
  }
};

export const createPaymentHistory = async (data: CreatePaymentHistoryRequest): Promise<CreatePaymentHistoryResponse> => {
  try {
    const response = await axios.post(`${API_URL}/history/create`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

export const updatePaymentHistory = async (id: number, data: UpdatePaymentHistoryRequest): Promise<UpdatePaymentHistoryResponse> => {
  try {
    const response = await axios.put(`${API_URL}/history/update/${id}`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

// Payment Methods APIs
export const getAllPaymentMethods = async (): Promise<PaymentMethodResponse> => {
  try {
    const response = await axios.get(`${API_URL}/method/get-all`, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data as PaymentMethodError;
    }
    throw { message: 'An unknown error occurred' };
  }
};

export const createPaymentMethod = async (data: CreatePaymentMethodRequest): Promise<CreatePaymentMethodResponse> => {
  try {
    const response = await axios.post(`${API_URL}/method/create`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

export const updatePaymentMethod = async (id: string, data: UpdatePaymentMethodRequest): Promise<UpdatePaymentMethodResponse> => {
  try {
    const response = await axios.patch(`${API_URL}/method/updatePaymentMethod/${id}`, data, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};

export const deletePaymentMethod = async (id: string): Promise<DeletePaymentMethodResponse> => {
  try {
    const response = await axios.delete(`${API_URL}/method/deletePaymentMethod/${id}`, {
      headers: {
        allowed_secrets: 'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw { message: 'An unknown error occurred' };
  }
};
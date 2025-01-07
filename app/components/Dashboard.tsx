'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Customer } from '@/types/Customer';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userId = Cookies.get('user_id');
      const authToken = Cookies.get('authToken');

      if (userId && authToken) {
        try {
          const response = await axios.get(
            `/api/auth/user/user-profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setUser(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 401) {
              Cookies.remove('user_id');
              Cookies.remove('authToken');
            }
          }
          setError('Failed to fetch user data');
          setLoading(false);
        }
      } else {
        setError('User not logged in');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      // Thực hiện logout API call nếu cần
      // await logoutAPI();
      Cookies.remove('user_id');
      Cookies.remove('authToken');
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Xử lý lỗi nếu cần
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3 className="text-2xl mb-2" style={{ borderBottom: '1px dashed #ccc' }}>
        Dashboard
      </h3>
      <p className="mt-6 text-gray-600">
        Hello, <span className="text-red-600">{user?.name}</span>! If not{' '}
        <span className="text-red-600">{user?.name}</span>,{' '}
        <button onClick={handleLogout} className="text-blue-500">
          Logout
        </button>
      </p>
      <p className="mt-2 text-gray-600">
        From your account dashboard, you can easily check & view your recent
        orders, manage your shipping and billing addresses, and edit your
        password and account details.
      </p>
    </div>
  );
};

export default Dashboard;

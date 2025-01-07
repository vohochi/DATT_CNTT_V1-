'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

// Định nghĩa interfaces cho response data
interface UserAddress {
  address: string;
}

interface ApiResponse {
  data: UserAddress[];
  message?: string;
  status?: number;
}

const AddressList = () => {
  const [addresses, setAddresses] = useState<string[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>(
    'loading'
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      const userId = Cookies.get('user_id');
      const authToken = Cookies.get('authToken');

      if (!userId || !authToken) {
        setError('User is not logged in');
        setStatus('failed');
        return;
      }

      try {
        setStatus('loading');
        const response = await axios.get<ApiResponse>(
          `/api/auth/user/user-profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (!response.data.data || response.data.data.length === 0) {
          throw new Error('No addresses found for this user');
        }

        const userAddresses: string[] = response.data.data.map(
          (item: UserAddress) => item.address || 'Rỗng'
        );

        setAddresses(userAddresses);
        setStatus('success');
      } catch (error) {
        console.error('Error fetching user addresses:', error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          Cookies.remove('user_id');
          Cookies.remove('authToken');
        }
        setError('Failed to fetch user addresses');
        setStatus('failed');
      }
    };

    fetchAddresses();
  }, []);

  const handleRetry = () => {
    setError(null);
    setStatus('loading');
    // Gọi lại useEffect
    const userId = Cookies.get('user_id');
    if (userId) {
      Cookies.set('user_id', userId);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return (
      <div>
        <p>Error: {error}</p>
        <button
          onClick={handleRetry}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (addresses.length === 0) {
    return <p>No addresses found.</p>;
  }

  return (
    <div>
      <h3 className="text-2xl mb-4 border-b border-dashed border-gray-300">
        User Addresses
      </h3>
      <ul className="list-disc ml-6">
        {addresses.map((address: string, index: number) => (
          <li key={index} className="mb-2 text-gray-800">
            {address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;

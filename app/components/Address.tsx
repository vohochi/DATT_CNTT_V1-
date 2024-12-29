// Định nghĩa interfaces cho response data
interface UserAddress {
  address: string;
}

interface ApiResponse {
  data: UserAddress[];
  message?: string;
  status?: number;
}

interface CustomError extends Error {
  message: string;
}

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AddressList = () => {
  const [addresses, setAddresses] = useState<string[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>(
    'loading'
  );
  const [error, setError] = useState<string | null>(null);
  const token = Cookies.get('authToken');

  const fetchAddresses = async (): Promise<void> => {
    try {
      setStatus('loading');
      if (!token) {
        throw new Error('User is not logged in');
      }

      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/http://api-core.dsp.one/api/auth/user',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const result: ApiResponse = await response.json();

      if (!result.data || result.data.length === 0) {
        throw new Error('No addresses found for this user');
      }

      const userAddresses: string[] = result.data.map(
        (item: UserAddress) => item.address || 'Rỗng'
      );

      setAddresses(userAddresses);
      setStatus('success');
    } catch (err) {
      const error = err as CustomError;
      setError(error.message || 'An error occurred');
      setStatus('failed');
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [token]);

  const handleRetry = (): void => {
    setError(null);
    fetchAddresses();
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

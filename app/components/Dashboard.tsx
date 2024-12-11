'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { fetchProfile } from '@/_lib/customer';
import { Customer } from '@/types/Customer';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [user, setUser] = useState<Customer | null>(null); // Sử dụng interface Customer
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState<string | null>(null); // Xử lý lỗi
  const router = useRouter(); // Hook để chuyển hướng

  useEffect(() => {
    const userId = Cookies.get('user_id');
    if (userId) {
      fetchProfile(Number(userId))
        .then((data) => {
          console.log(data.data);
          if (data) {
            setUser(data.data); // Lưu thông tin người dùng
          } else {
            setError('User data not found');
          }
          setLoading(false); // Dừng trạng thái loading
        })
        .catch((err) => {
          setError('Failed to fetch user data');
          setLoading(false); // Dừng trạng thái loading
        });
    } else {
      setError('User not logged in');
      setLoading(false); // Dừng trạng thái loading
    }
  }, []);

  const handleLogout = () => {
    // Xóa cookie chứa thông tin người dùng
    Cookies.remove('user_id');
    // Bạn có thể xóa thêm các cookie khác nếu có
    // Chuyển hướng người dùng về trang đăng nhập hoặc trang chủ
    router.push('/auth/login');
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
        <span className="text-red-600">Tuntuni</span>,{' '}
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

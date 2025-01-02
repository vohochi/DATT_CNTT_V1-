'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { register } from '@/app/auth/register/api/register';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  nick_name: string;
  password_confirmation: string;
  customer_id: number;
}

const Page = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    address: '123 Street',
    phone: '0123456789',
    nick_name: 'john',
    password_confirmation: '',
    customer_id: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await register(formData);
      console.log('Registration response:', response);

      if (response?.data === 'User registered successfully!') {
        alert('Đăng ký thành công');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      } else {
        setError('Đăng ký thất bại, vui lòng thử lại.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          <Image
            src="/register.jpg"
            alt="register Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Đăng ký
              </h1>
              <p className="text-black text-base">
                Vui lòng nhập thông tin đăng ký!
              </p>
            </div>
            {error && (
              <div
                className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Lỗi! </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-black text-base opacity-40"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="nick_name"
                  className="block text-black text-base opacity-40"
                >
                  Tên gọi
                </label>
                <input
                  type="text"
                  id="nick_name"
                  name="nick_name"
                  value={formData.nick_name}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="john"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-black text-base opacity-40"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-black text-base opacity-40"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="0123456789"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-black text-base opacity-40"
                >
                  Mật khẩu
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password_confirmation"
                  className="block text-black text-base opacity-40"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                <label htmlFor="showPassword" className="text-sm text-gray-600">
                  Hiển thị mật khẩu
                </label>
              </div>

              <div className="w-full space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors"
                >
                  {loading ? 'Đang đăng ký...' : 'Đăng Ký Ngay'}
                </button>
                <p className="text-center text-black text-base">
                  <Link href={'/auth/login'}>
                    <span className="text-amber-400 hover:underline">
                      trở về
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Register } from '@/_lib/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    nick_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    code: '', // Thêm trường code
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Xử lý sự thay đổi giá trị form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Xử lý sự kiện submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Register(formData); // Gọi API Register với formData
      console.log('Registration successful:', response);
      // Xử lý sau khi đăng ký thành công
      alert('Bạn đã đăng ký thành công');
      router.push('/auth/login');
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Đăng ký không thành công, vui lòng thử lại.');
      alert('bạn đã đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          <Image
            src="/register.jpg" // Thay bằng đường dẫn ảnh của bạn
            alt="register Image"
            layout="fill" // Để ảnh chiếm toàn bộ container
            objectFit="cover" // Làm ảnh phủ toàn bộ container
            className="rounded-lg"
          />
        </div>

        {/* Right side - Register Form */}
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
            <div className="space-y-6">
              {/* Full Name */}
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

              {/* Nick Name */}
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

              {/* Email */}
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
                  placeholder="josasssshn@example.com"
                />
              </div>

              {/* Phone */}
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

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-black text-base opacity-40"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="password123"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password_confirmation"
                  className="block text-black text-base opacity-40"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="password123"
                />
              </div>

              {/* Code */}
              <div className="space-y-2">
                <label
                  htmlFor="code"
                  className="block text-black text-base opacity-40"
                >
                  Mã xác thực
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="Nhập mã xác thực"
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </div>

          <div className="w-full space-y-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors"
            >
              {loading ? 'Đang đăng ký...' : 'Đăng Ký Ngay'}
            </button>
            <p className="text-center text-black text-base">
              <Link href={'/auth/login'}>
                <span className="text-amber-400 hover:underline">trở về</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

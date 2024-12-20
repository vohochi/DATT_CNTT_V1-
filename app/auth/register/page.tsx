'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Register } from '@/_lib/auth';
import { useRouter } from 'next/navigation';

interface FormErrors {
  name?: string;
  nick_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  password_confirmation?: string;
  code?: string;
}

interface Message {
  type: 'success' | 'error';
  content: string;
}

const Page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    nick_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    code: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Họ và tên là bắt buộc';
    }

    if (!formData.nick_name.trim()) {
      newErrors.nick_name = 'Tên gọi là bắt buộc';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Mật khẩu xác nhận không khớp';
    }

    if (!formData.code.trim()) {
      newErrors.code = 'Mã xác thực là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await Register(formData);
        console.log('Registration response:', response);

        if (response) {
          setMessage({
            type: 'success',
            content: 'Bạn đã đăng ký thành công.',
          });
          alert('đăng ký thành công');
          // Thêm một độ trễ nhỏ để người dùng thấy được thông báo thành công
          setTimeout(() => {
            router.push('/auth/login');
          }, 1500);
        } else if (response.error) {
          // Xử lý trường hợp có error từ API
          setMessage({
            type: 'error',
            content: response.error || 'Đăng ký thất bại, vui lòng thử lại.',
          });
        } else if (response.message) {
          // Xử lý các trường hợp có message từ API
          if (response.message.toLowerCase().includes('code đã tồn tại')) {
            setMessage({
              type: 'error',
              content: 'Mã code đã tồn tại, vui lòng thay đổi.',
            });
          } else {
            setMessage({
              type: 'error',
              content: response.message,
            });
          }
        }
      } catch (error: any) {
        console.error('Error during registration:', error);
        setMessage({
          type: 'error',
          content:
            error?.errors.code[0] || 'Đăng ký thất bại, vui lòng thử lại.',
        });
      } finally {
        setLoading(false);
      }
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
            {message && (
              <div
                className={`${
                  message.type === 'success'
                    ? 'bg-green-100 border-green-400 text-green-700'
                    : 'bg-red-100 border-red-400 text-red-700'
                } px-4 py-3 rounded relative`}
                role="alert"
              >
                <strong className="font-bold">
                  {message.type === 'success' ? 'Thành công! ' : 'Lỗi! '}
                </strong>
                <span className="block sm:inline">{message.content}</span>
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
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
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
                {errors.nick_name && (
                  <p className="text-red-500 text-sm">{errors.nick_name}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

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
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

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
                  placeholder="••••••••"
                />
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm">
                    {errors.password_confirmation}
                  </p>
                )}
              </div>

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
                {errors.code && (
                  <p className="text-red-500 text-sm">{errors.code}</p>
                )}
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

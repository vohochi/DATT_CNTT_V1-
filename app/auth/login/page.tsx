'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { Login } from '@/_lib/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      router.push('/');
    }
  }, [router]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Mật khẩu là bắt buộc';
    } else if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await Login({ email, password });
        if (response.user_id) {
          Cookies.set('user_id', response.user_id, {
            expires: 7,
            secure: true,
            sameSite: 'Strict',
          });
          alert('Đăng nhập thành công');
          router.push('/');
        } else {
          setErrors({ password: 'Thông tin đăng nhập không chính xác' });
        }
      } catch (err) {
        console.error('Login Error:', err);
        setErrors({ password: `${err}` });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          <Image
            src="/login.jpg"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Đăng nhập
              </h1>
              <p className="text-black text-base">
                Vui lòng nhập email và mật khẩu để đăng nhập!
              </p>
            </div>
            <div className="space-y-6">
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
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
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
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors"
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
            <Link href="/auth/forgot-password">
              <p className="text-center text-black text-base hover:underline cursor-pointer">
                Quên mật khẩu?
              </p>
            </Link>
            <p className="text-center text-black text-base">
              Bạn chưa có tài khoản?{' '}
              <Link href={'/auth/register'}>
                <span className="text-amber-400 hover:underline">
                  Đăng ký ngay
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

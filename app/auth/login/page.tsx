'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import Image from 'next/image';
import Link from 'next/link';
import { Login } from '@/_lib/auth'; // Giả sử Login là hàm gọi API đăng nhập
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Kiểm tra nếu đã có token trong cookie thì chuyển hướng về trang chính
  useEffect(() => {
    const token = Cookies.get('token'); // Lấy token từ cookie
    if (token) {
      router.push('/'); // Nếu đã có token, chuyển hướng về trang chủ
    }
  }, [router]);

  // Hàm xử lý đăng nhập
  const handleLogin = async () => {
    setLoading(true);
    setError(null); // Reset bất kỳ lỗi nào trước đó

    const data = {
      email,
      password,
    };

    try {
      const response = await Login(data); // Gọi API đăng nhập

      if (response.user_id) {
        // Lưu token vào cookie với thời gian hết hạn là 7 ngày
        Cookies.set('user_id', response.user_id, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
        });

        // Thông báo đăng nhập thành công
        alert('Đăng nhập thành công');

        // Chuyển hướng về trang chủ sau khi đăng nhập thành công
        router.push('/');
      } else {
        setError('Không có token trong phản hồi từ máy chủ');
      }
    } catch (err: any) {
      console.error('Login Error:', err);
      setError(err.message || 'Đã xảy ra lỗi không xác định');
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
            src="/login.jpg" // Thay thế với đường dẫn hình ảnh của bạn
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
              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
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

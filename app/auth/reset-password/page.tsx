'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { resetPassword } from '@/_lib/auth';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [new_password_confirmation, setNewPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('resetPasswordEmail');
    const otp = sessionStorage.getItem('resetPasswordOTP');
    if (!storedEmail || !otp) {
      alert('Thông tin xác thực không hợp lệ');
      router.push('/auth/forgot-password');
    } else {
      setEmail(storedEmail);
    }
  }, [router]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (new_password !== new_password_confirmation) {
      alert('Mật khẩu xác nhận không khớp');
      return;
    }

    if (new_password.length < 8) {
      alert('Mật khẩu phải có ít nhất 8 ký tự');
      return;
    }

    setIsLoading(true);
    try {
      const otp = sessionStorage.getItem('resetPasswordOTP');

      if (!email || !otp) {
        throw new Error('Thông tin xác thực không hợp lệ');
      }

      await resetPassword({ email, otp, new_password });
      alert('Đặt lại mật khẩu thành công');
      sessionStorage.removeItem('resetPasswordEmail');
      sessionStorage.removeItem('resetPasswordOTP');
      router.push('/auth/login');
    } catch (error) {
      console.log(error);
      alert('Đặt lại mật khẩu thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          <Image
            src="/resetPass.jpg"
            alt="Reset Password Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right side - Reset Password Form */}
        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <form onSubmit={handleResetPassword} className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Đổi mật khẩu mới
              </h1>
              <p className="text-black text-base">Vui lòng nhập vào bên dưới</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-black text-base opacity-40"
                >
                  Email đã nhập
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  required
                  disabled
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="new_password"
                  className="block text-black text-base opacity-40"
                >
                  Nhập mật khẩu mới
                </label>
                <input
                  type="password"
                  id="new_password"
                  value={new_password}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="new_password_confirmation"
                  className="block text-black text-base opacity-40"
                >
                  Nhập lại mật khẩu mới
                </label>
                <input
                  type="password"
                  id="new_password_confirmation"
                  value={new_password_confirmation}
                  onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>
            <div className="w-full space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Đang xử lý...' : 'Xác nhận'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

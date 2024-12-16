'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sendOTP, verifyOTP } from '@/_lib/auth';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleSendOTP = async () => {
    if (!email) {
      alert('Vui lòng nhập email');
      return;
    }

    setIsLoading(true);
    try {
      await sendOTP({ email });
      setIsOtpSent(true);
      alert('Mã OTP đã được gửi đến email của bạn');
      sessionStorage.setItem('resetPasswordEmail', email);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert('Không thể gửi mã OTP. Vui lòng thử lại.');
      } else {
        console.log('Đã xảy ra lỗi. Vui lòng thử lại sau');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      alert('Vui lòng nhập đủ 6 số OTP');
      return;
    }

    setIsLoading(true);
    try {
      console.log(email, otpString);
      const response = await verifyOTP({ email, otp: otpString });
      if (response && response.success) {
        sessionStorage.setItem('resetPasswordOTP', otpString);
        router.push('/auth/reset-password');
      } else {
        alert('Xác thực OTP thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Xác thực OTP thất bại: ${error.response.data.message}`);
      } else {
        alert('Đã xảy ra lỗi. Vui lòng thử lại sau.');
      }
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
            src="/forgetPass.jpg"
            alt="Forgot Password"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Quên mật khẩu
              </h1>
              <p className="text-black text-base">
                Vui lòng nhập email của bạn
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-black text-base opacity-70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="Nhập email của bạn"
                />
              </div>
              {!isOtpSent && (
                <button
                  onClick={handleSendOTP}
                  disabled={isLoading}
                  className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Đang gửi...' : 'Gửi mã OTP'}
                </button>
              )}
              {isOtpSent && (
                <div className="space-y-2">
                  <label className="block text-black text-base opacity-70">
                    Nhập mã xác thực OTP gửi đến {email}
                  </label>
                  <div className="flex gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-12 h-12 text-center border border-gray-300 rounded"
                      />
                    ))}
                  </div>
                  <p
                    className="text-amber-400 text-sm cursor-pointer"
                    onClick={handleSendOTP}
                  >
                    Gửi lại mã
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full space-y-4">
            {isOtpSent && (
              <button
                onClick={handleVerifyOTP}
                disabled={isLoading}
                className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Đang xác thực...' : 'Xác thực'}
              </button>
            )}
            <Link href="/auth/login">
              <p className="text-center text-black text-base hover:underline cursor-pointer">
                Trở về
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

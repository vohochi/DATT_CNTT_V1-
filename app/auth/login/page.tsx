import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          {/* You can replace this with your actual image or SVG */}
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Placeholder for login image
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Đăng nhập
              </h1>
              <p className="text-black text-base">
                Vui lòng nhập đầy đủ thông tin đăng nhập!
              </p>
            </div>
            <div className="space-y-6">
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
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
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
                />
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            <button className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors">
              Đăng nhập
            </button>
            <p className="text-center text-black text-base">Quên mật khẩu?</p>
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

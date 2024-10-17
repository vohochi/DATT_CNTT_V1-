import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          <Image
            src="/forgetPass.jpg" // Replace with your image path
            alt="Forgot Image"
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container
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
                Vui lòng nhập số điện thoại của bạn dưới
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-black text-base opacity-70"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-b border-black opacity-50 pb-2 focus:outline-none focus:border-amber-400"
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-black text-base opacity-70">
                  Nhập mã xác thực OTP gửi đến 0909090909
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <input
                      key={num}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center border border-gray-300 rounded"
                    />
                  ))}
                </div>
                <p className="text-amber-400 text-sm">Gửi lại mã</p>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            <Link href="/auth/reset-password">
              {' '}
              <button className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors">
                Xác thực
              </button>
            </Link>
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

export default Page;

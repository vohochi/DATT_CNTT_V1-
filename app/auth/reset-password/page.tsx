import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[680px] relative">
          {/* You can replace this with your actual image or SVG */}
          <Image
            src="/resetPass.jpg" // Replace with your image path
            alt="reset Password Image"
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container
            className="rounded-lg"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-[626px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-black text-3xl lg:text-4xl font-medium leading-tight">
                Đổi mật khẩu mới
              </h1>
              <p className="text-black text-base">Vui lòng nhập vào bên dưới</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-black text-base opacity-40"
                >
                  Mật khẩu mới
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
                  Xác nhận mật khẩu mới{' '}
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
            <Link href={'/auth/login'}>
              {' '}
              <button className="w-full px-12 py-4 bg-amber-400 rounded text-white text-base font-medium hover:bg-amber-500 transition-colors">
                Xác nhận
              </button>
            </Link>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

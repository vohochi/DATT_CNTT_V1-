'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/store';
import { fetchAllBanner } from '@/_lib/banner';

const SliderMain = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const title = useSelector((state: RootState) => state.banner.title);
  console.log(title);
  fetchAllBanner();
  return (
    <div className="flex flex-row justify-between w-full -mt-[90px] h-auto relative">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative">
        <div className="relative flex flex-col items-start">
          <Image
            src="/10003.jpg"
            alt="Background"
            className="w-[180px] sm:w-[240px] md:w-[427px] h-auto rounded-lg transition-all"
            width={427} // Use the maximum width (md:w-[427px])
            height={220} // Calculated height for the original aspect ratio (assuming 427x220)
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />

          <h1 className="z-20 absolute bottom-0 left-0 z-10 text-[30px] sm:text-[40px] md:text-[67px] uppercase font-bold overflow-hidden whitespace-nowrap">
            Clean Fresh
          </h1>
        </div>
        <div className="flex flex-col items-start mt-4">
          <p className="z-20 text-base sm:text-lg md:text-lg text-gray-700 text-start mb-6 w-[180px] sm:w-[240px] md:w-[427px] text-[21px] font-[Inter, sans-serif]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
          </p>
          <button className="px-10 py-3 align-items-center bg-[#ffffff] text-[#231942] rounded-[50px] border border-[#ff4949] hover:bg-[#ff4949] hover:text-[#ffffff] transition duration-300">
            BUY NOW
          </button>
        </div>
        <div className="absolute bottom-0 left-0 z-10 text-[16px] sm:text-[18px] md:text-[21px] text-gray-500 mx-8">
          ___ 01 / 03 ___
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center bg-[#d9f1e1] w-1/2 p-4 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative">
        <div className="relative ml-[500px]">
          <Image
            src="/10004.jpg"
            alt="Slider Image"
            className="hidden md:block"
            width={70}
            height={95}
          />
        </div>
        <div className="absolute bottom-0 right-[120px] z-10 flex space-x-4 mb-2 ">
          {/* Icon Container */}
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
        </div>
        <Image
          src="https://via.placeholder.com/841x832"
          alt="Decorative"
          className="-ml-[50%] sm:-ml-[50%] md:-ml-[20%] w-full sm:w-[1000px] md:w-[1200px] mt-[0] absolute transition-all z-10"
          width={1200}
          height={832}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />


      </div>

    </div>
  );
};

export default SliderMain;

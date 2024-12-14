'use client';
import React, { useEffect, useState } from 'react';
import { fetchAllBanner } from '@/_lib/banner';
import { Banner } from '@/types/Banner';
import Image from 'next/image';

const SliderMain = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const { data } = await fetchAllBanner();
        const activeBanners = data.filter((banner: Banner) => banner.is_active);
        setBanners(activeBanners);
      } catch (error) {
        console.error('Failed to fetch banners:', error);
      }
    };
    getBanners();
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    if (banners.length > 0) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 3000); // Change slide every 3 seconds

      // Cleanup interval on component unmount
      return () => clearInterval(slideInterval);
    }
  }, [banners]);

  if (banners.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBanner = banners[currentSlide];

  return (
    <div className="flex flex-row justify-between w-full -mt-[90px] sm:h-auto md:h-[1000px] h-[auto] relative">
      {/* Left Section */}
      <div
        className="flex flex-col justify-center items-center w-1/2 bg-white min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative flex flex-col items-start">
          <Image
            src="/10003.jpg"
            alt="Background"
            className="w-[180px] sm:w-[240px] md:w-[427px] h-auto rounded-lg transition-all"
            width={427}
            height={220}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />

          <h1 className="z-20 absolute bottom-0 left-0 z-10 text-[30px] sm:text-[40px] md:text-[67px] uppercase font-bold overflow-hidden whitespace-nowrap">
            {currentBanner.title}
          </h1>
        </div>
        <div className="flex flex-col items-start mt-4">
          <p className="z-20 text-base sm:text-lg md:text-lg text-gray-700 text-start mb-6 w-[180px] sm:w-[240px] md:w-[427px] text-[21px] font-[Inter, sans-serif]">
            {currentBanner.description}
          </p>
          <button className="z-10 px-10 py-3 align-items-center bg-[#ffffff] text-[#231942] rounded-[50px] border border-[#ff4949] hover:bg-[#ff4949] hover:text-[#ffffff] transition duration-300">
            BUY NOW
          </button>
        </div>
        <div className="absolute bottom-0 left-0 z-10 text-[16px] sm:text-[18px] md:text-[21px] text-gray-500 mx-8">
          ___ {currentSlide + 1} / {banners.length} ___
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex flex-col justify-center w-1/2 p-4 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative"
        style={{ backgroundColor: currentBanner.background_color || '#d9f1e1' }}
      >
        {/* Indicator dots */}
        <div className="absolute bottom-0 right-[120px] z-10 flex space-x-4 mb-2 ">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-[30px] h-[30px] flex justify-center items-center`}
            >
              <div
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#ff4949]' : 'bg-gray-300'
                }`}
              />
            </div>
          ))}
        </div>
        <Image
          src="https://via.placeholder.com/841x832"
          alt="Decorative"
          className="-ml-[50%] sm:-ml-[50%] md:-ml-[20%] w-[841px] sm:w-[841px] md:w-[841px] mt-[0] absolute transition-all z-5"
          width={841}
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

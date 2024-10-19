'use client';
import { Image } from '@nextui-org/react';

const SaleMain = () => {
  return (
    <div className="h-[735.69px] px-[120px] pt-[115px] flex-col justify-start items-center inline-flex">
      <h1 className="font-bold">sale</h1>
      <div className="h-[620.69px] flex-col justify-start items-start flex">
        <div className="grid grid-cols-3 gap-10">
          {' '}
          {/* Sử dụng grid để bố trí dễ dàng */}
          <div className="flex flex-col">
            <div className="relative rounded-[10px]">
              <Image
                src="https://via.placeholder.com/304x370"
                alt="Readable content DX22"
                width={304}
                height={370}
                className="rounded-[10px]"
              />
              <div className="absolute top-2 right-2 bg-[#ff6565] rounded-[50px] px-4 py-2 text-white font-normal">
                new
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
              </div>
              <p className="text-gray-500 text-sm mt-2">150 reviews</p>
              <h4 className="text-[#231942] text-lg font-normal mt-2">
                Readable content DX22
              </h4>
              <div className="flex items-center mt-2">
                <p className="text-[#364958] text-lg font-medium mr-2">
                  $210.00
                </p>
                <span className="text-[#364958] text-xs font-light line-through">
                  300.00
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative rounded-[10px]">
              <Image
                src="https://via.placeholder.com/304x370"
                alt="Voyage face cleaner"
                width={304}
                height={370}
                className="rounded-[10px]"
              />
              <div className="absolute top-2 right-2 bg-[#ff6565] rounded-[50px] px-4 py-2 text-white font-normal">
                new
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
              </div>
              <p className="text-gray-500 text-sm mt-2">150 reviews</p>
              <h4 className="text-[#231942] text-lg font-normal mt-2">
                Voyage face cleaner
              </h4>
              <div className="flex items-center mt-2">
                <p className="text-[#364958] text-lg font-medium mr-2">
                  $210.00
                </p>
                <span className="text-[#364958] text-xs font-light line-through">
                  300.00
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative rounded-[10px]">
              <Image
                src="https://via.placeholder.com/304x370"
                alt="Impulse Duffle"
                width={304}
                height={370}
                className="rounded-[10px]"
              />
              <div className="absolute top-2 right-2 bg-[#ff6565] rounded-[50px] px-4 py-2 text-white font-normal">
                new
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
              </div>
              <p className="text-gray-500 text-sm mt-2">150 reviews</p>
              <h4 className="text-[#231942] text-lg font-normal mt-2">
                Impulse Duffle
              </h4>
              <div className="flex items-center mt-2">
                <p className="text-[#364958] text-lg font-medium mr-2">
                  $210.00
                </p>
                <span className="text-[#364958] text-xs font-light line-through">
                  300.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleMain;

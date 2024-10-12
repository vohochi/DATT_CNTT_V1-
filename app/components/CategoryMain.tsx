'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  { id: 1, name: 'Hare care', img: '/10006.jpg', type: 'care' },
  { id: 2, name: 'Skin care', img: '/10005.jpg', type: 'care' },
  { id: 3, name: 'Lip stick', img: '/10007.jpg', type: 'makeup' },
  { id: 4, name: 'Face skin', img: '/10008.jpg', type: 'care' },
  { id: 5, name: 'Blusher', img: '/10009.jpg', type: 'makeup' },
  { id: 6, name: 'Natural', img: '/10010.jpg', type: 'natural' },
];

const CategoryMain = () => {
  const [filter, setFilter] = useState(''); // State cho bộ lọc

  // Lọc danh mục dựa trên loại
  const filteredCategories = categories.filter((category) =>
    category.type.includes(filter)
  );

  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      {/* Thêm bộ lọc */}
      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Tất cả</option>
          <option value="care">Chăm sóc</option>
          <option value="makeup">Trang điểm</option>
          <option value="natural">Tự nhiên</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-[80%] ">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="card flex flex-col items-center p-6 rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)] cursor-pointer h-[120px]"
            style={{
              backgroundColor:
                category.type === 'care'
                  ? '#dcffd2'
                  : category.type === 'makeup'
                  ? '#ffedb4'
                  : category.type === 'natural'
                  ? '#dfe4ff'
                  : '#fff', // Màu nền khác nhau dựa trên loại
            }}
          >
            <div className="card-inner">
              <div className="card-front">
                <Image
                  alt="icons"
                  width={20}
                  height={20}
                  className="w-20 h-20"
                  src={category.img}
                />
              </div>
              <div className="card-back flex items-center justify-center h-full">
                <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
                  {category.name}
                </div>
              </div>
            </div>
            <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMain;

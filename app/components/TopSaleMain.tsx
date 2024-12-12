'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProducts } from '@/_lib/product';
import { Product } from '@/types/Product';

const TopSaleMain: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mb-20">
      {/* Tiêu đề */}
      <div className="text-center mb-20 w-full">
        <h2 className="text-[#231942] text-[50px] font-normal capitalize leading-[39px] mb-2">
          Top Sale
        </h2>
        <p className="text-[#364958] text-base leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut aliquam, purus sit amet luctus venenatis.
        </p>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-[78%]">
        {products.slice(1).map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-full relative group rounded"
          >
            {/* Hình ảnh sản phẩm */}
            <Link href={`/detail/${product.id}`}>
              <Image
                className="card-img-top rounded-[10px] w-full"
                src={product.thumbnail || '/placeholder.png'}
                alt={product.name}
                width={360}
                height={450}
              />
            </Link>

            {/* Trạng thái sản phẩm */}
            <span
              className={`absolute top-0 right-0 text-xs z-10 font-bold px-6 py-2 m-4 rounded-[20px] ${
                product.status === 1
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {product.status === 1 ? 'Available' : 'Unavailable'}
            </span>

            {/* Thông tin sản phẩm */}
            <div className="card-body w-full mt-4">
              {/* Tên sản phẩm */}
              <Link href={`/detail/${product.id}`}>
                <h3 className="text-[#231942] text-[25px] mb-2 font-medium">
                  {product.name}
                </h3>
              </Link>

              {/* Mô tả ngắn */}
              <p className="text-sm text-gray-500">
                {product.short_description}
              </p>

              {/* Giá và kích thước */}
              <div className="mt-2">
                <p className="font-semibold text-[#364958] text-[21px]">
                  Giá: {product.price} USD
                </p>
                <p className="text-sm">
                  Kích thước: {product.width} x {product.length} x{' '}
                  {product.height} cm
                </p>
              </div>

              {/* Danh mục sản phẩm */}
              {/* <p className="text-xs text-gray-400 mt-1">
                Danh mục: {product.category.name} ({product.category.lang})
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSaleMain;

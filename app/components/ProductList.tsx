'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProducts } from '@/_lib/product';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Pagination,
} from '@nextui-org/react';
import { Heart, Maximize } from 'lucide-react';
import { Product } from '@/types/Product';

const TopSaleMain: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Fetch products data
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

  // Paginate products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
        {currentProducts.map((product) => (
          <Card key={product.id} className="w-full mx-auto relative group">
            <CardBody className="p-0">
              <div className="relative aspect-square">
                <Link href={`/detail/${product.id}`}>
                  <Image
                    src={product.thumbnail || '/placeholder.png'}
                    alt={product.name}
                    width={360}
                    height={450}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </Link>
                <span
                  className={`absolute top-0 right-0 text-xs z-10 font-bold px-6 py-2 m-4 rounded-[20px] ${
                    product.status === 1
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {product.status === 1 ? 'Available' : 'Unavailable'}
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="default"
                      className="bg-white"
                    >
                      <Maximize size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      color="primary"
                      className="bg-white text-black hover:bg-primary hover:text-white transition-colors text-xs"
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="default"
                      className="bg-white"
                    >
                      <Heart size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex-col items-start p-2">
              <div className="flex items-center mb-1">
                <span className="text-yellow-400 text-sm mr-1">★★★★★</span>
                <span className="text-xs text-gray-600">
                  {product.category?.name}
                </span>
              </div>
              <h3 className="text-sm font-semibold truncate w-full">
                {product.name}
              </h3>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-bold">${product.price}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          total={Math.ceil(products.length / itemsPerPage)}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
          size="sm"
        />
      </div>
    </div>
  );
};

export default TopSaleMain;

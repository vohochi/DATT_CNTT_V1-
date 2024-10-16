'use client';

import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from '@nextui-org/react';
import { Heart, Maximize } from 'lucide-react';

// Giả lập dữ liệu sản phẩm
const products = Array(90)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Readable content DX${index + 22}`,
    price: 210.0,
    originalPrice: 300.0,
    reviews: 150,
    image: '../public/10012.jpg',
    isNew: index % 3 === 0,
  }));

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="max-w-[370px] relative group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <CardBody className="p-0">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={370}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    new
                  </span>
                )}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        color="default"
                        className="bg-white"
                      >
                        <Maximize size={20} />
                      </Button>
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                        className="bg-white text-black hover:bg-primary hover:text-white transition-colors"
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
                        <Heart size={20} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="flex-col items-start">
              <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.reviews} reviews
                </span>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-500">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          total={Math.ceil(products.length / productsPerPage)}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductList;

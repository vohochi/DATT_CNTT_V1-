"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from "@nextui-org/react";
import { Heart, Maximize } from "lucide-react";

// Giả lập dữ liệu sản phẩm (giữ nguyên)
const products = Array(90)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Readable content DX${index + 22}`,
    price: 210.0,
    originalPrice: 300.0,
    reviews: 150,
    image: "https://via.placeholder.com/370x450",
    isNew: index % 3 === 0,
  }));

const ProductList = () => {
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
      <div className="grid grid-cols-3 gap-4">
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
            {hoveredProduct === product.id && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 bg-white bg-opacity-90 transition-opacity duration-300">
                <Button isIconOnly size="sm" variant="light">
                  <Maximize size={20} />
                </Button>
                <Button size="sm" variant="flat" color="primary">
                  ADD TO CART
                </Button>
                <Button isIconOnly size="sm" variant="light">
                  <Heart size={20} />
                </Button>
              </div>
            )}
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

"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Giả lập dữ liệu sản phẩm liên quan
const relatedProducts = Array(3)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Readable content DX${index + 22}`,
    price: 210.0,
    originalPrice: 300.0,
    reviews: 150,
    image: "/placeholder-370x450.jpg", // Đảm bảo bạn có ảnh placeholder này
    isNew: true,
  }));

const RelateProduct: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Related Products</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="w-full">
            <CardBody className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={370}
                  height={370}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    new
                  </span>
                )}
              </div>
            </CardBody>
            <CardFooter className="flex-col items-start p-2">
              <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xs">★</span>
                ))}
                <span className="ml-2 text-xs text-gray-600">{product.reviews} reviews</span>
              </div>
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <div className="flex items-center">
                <span className="text-sm font-bold mr-2">${product.price.toFixed(2)}</span>
                <span className="text-xs line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelateProduct;


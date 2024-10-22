"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from "@nextui-org/react";
import { Heart, Maximize } from "lucide-react";

// Giả lập dữ liệu sản phẩm
const products = Array(90)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Readable content DX${index + 22}`,
    price: 210.0,
    originalPrice: 300.0,
    reviews: 150,
    image:
      "D:WorkspaceProjectInternDATT_CNTT_V1-publicNuoc-giai-khat-co-gaz-TAMS-ZERO-CALORIE-Huong-Nho-Luu.png",
    isNew: index % 3 === 0,
  }));

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const itemsPerPage = 8;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
        <p className="text-sm md:text-base">
          Showing {currentProducts.length} Results
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="w-full mx-auto relative group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <CardBody className="p-0">
              <div
                className={`relative ${
                  isMobile ? "aspect-[3/2]" : "aspect-square"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={isMobile ? 200 : 300}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    new
                  </span>
                )}
                {!isMobile && hoveredProduct === product.id && (
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
                )}
              </div>
            </CardBody>
            <CardFooter className="flex-col items-start p-2">
              <div className="flex items-center mb-1">
                <span className="text-yellow-400 text-sm mr-1">★★★★★</span>
                <span className="text-xs text-gray-600">
                  {product.reviews} reviews
                </span>
              </div>
              <h3 className="text-sm font-semibold truncate w-full">
                {product.name}
              </h3>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xs line-through text-gray-500">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
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

export default ProductList;

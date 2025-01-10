'use client';

import { FaRegHeart } from 'react-icons/fa';
import { TbArrowsDiagonal } from 'react-icons/tb';
import QuickViewModal from './QuickViewModal';
import { useState, useEffect } from 'react';
import WishlistModal from './QuickViewWishlist';
import Link from 'next/link';
import Image from 'next/image';
// import { fetchProducts } from '@/_lib/product';
import { Product } from '@/types/Product';
import { getProductApi } from '@/app/api/product.api';
import { AddToCart } from '../cart/api/addToCart';

const TopSaleMain: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isQuickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getProductApi();
        console.log(`product ${data}`);

        setProducts(data.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    try {
      AddToCart(350, product, 1);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart.');
    }
  };

  const handleOpenQuickViewModal = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewModalOpen(true);
    setWishlistModalOpen(false);
  };

  const handleOpenWishlistModal = (product: Product) => {
    setSelectedProduct(product);
    setWishlistModalOpen(true);
    setQuickViewModalOpen(false);
  };

  const handleCloseModal = () => {
    setQuickViewModalOpen(false);
    setWishlistModalOpen(false);
    setSelectedProduct(null);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="text-center mb-20 w-full">
        <div className="text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px] mb-2">
          Top sale
        </div>
        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br />
          ut aliquam, purus sit amet luctus venenatis
        </div>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-[78%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-full relative group"
          >
            <Link href={`/detail/${product.id}`}>
              <Image
                className="card-img-top rounded-[10px] w-[370px] h-[450px]"
                src={`https://api-core.dsp.one/api/auth/file/${product.thumbnail?.path}` || '/placeholder.png'}
                width={370}
                height={450}
                alt={product.name}
              />
            </Link>
            {product.status === 1 && (
              <span className="absolute top-0 right-0 bg-green-500 text-white text-xs z-10 font-bold px-6 py-2 m-4 rounded-[20px]">
                Available
              </span>
            )}
            <div className="card-body w-full">
              <div className="flex justify-between items-center mt-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-slate-500">
                  {/* {product.views || '0'} views */}
                </div>
              </div>
              <Link href={`/detail/${product.id}`}>
                <div className="text-[#231942] text-[25px] mb-2 font-medium font-['Inter']">
                  {product.name}
                </div>
              </Link>

              <div className="flex items-center">
                <p className="font-semibold mr-2 text-[#364958] text-[21px] font-medium leading-9">
                  ${product.price}
                </p>
                {/* You can add old price here if available in your API */}
              </div>
            </div>
            <div className="hidden mx-auto lg:flex absolute bottom-[190px] z-20 left-0 right-0 bg-transparent p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between mx-auto w-full">
                <div
                  onClick={() => handleOpenQuickViewModal(product)}
                  className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565] cursor-pointer"
                >
                  <TbArrowsDiagonal />
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="uppercase bg-[#fff] px-4 py-3 rounded-[50px] border-2 border-[#FF6565] transition"
                >
                  Add to cart
                </button>
                <div
                  onClick={() => handleOpenWishlistModal(product)}
                  className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565]"
                >
                  <FaRegHeart />
                </div>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex flex-col items-center mt-4 w-full">
              <div className="flex justify-between w-full">
                <div
                  onClick={() => handleOpenQuickViewModal(product)}
                  className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1 cursor-pointer"
                >
                  <TbArrowsDiagonal className="mx-auto" />
                </div>
                <div
                  onClick={() => handleOpenWishlistModal(product)}
                  className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1"
                >
                  <FaRegHeart className="mx-auto" />
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="uppercase w-full bg-[#f7f7f7] px-4 py-2 border-2 border-[#fff] transition"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {isQuickViewModalOpen && selectedProduct && (
        <QuickViewModal
          // product={selectedProduct}
          isOpen={isQuickViewModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {isWishlistModalOpen && selectedProduct && (
        <WishlistModal
          // product={selectedProduct}
          isOpen={isWishlistModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TopSaleMain;

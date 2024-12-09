'use client';
import { FaRegHeart } from 'react-icons/fa';
import { TbArrowsDiagonal } from 'react-icons/tb';
import QuickViewModal from './QuickViewModal';
import { useState } from 'react';
import WishlistModal from './QuickViewWishlist';
import Link from 'next/link';
import Image from 'next/image';

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: string;
//   oldPrice: string;
//   views: string;
//   stars: number;
//   isNew: boolean;
// }

const TopSaleMain: React.FC = () => {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box khôngaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/370x450',
      title: 'Tên sản phẩm dài tí để xem vỡ box không',
      price: '$210.00',
      oldPrice: '$300.00',
      views: '150 views',
      stars: 5,
      isNew: true,
    },
  ];
  const [isQuickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenQuickViewModal = () => {
    // setSelectedProduct(product);
    setQuickViewModalOpen(true);
    setWishlistModalOpen(false);
  };

  const handleOpenWishlistModal = () => {
    // setSelectedProduct(product);
    setWishlistModalOpen(true);
    setQuickViewModalOpen(false);
  };

  const handleCloseModal = () => {
    setQuickViewModalOpen(false);
    setWishlistModalOpen(false);
    // setSelectedProduct(null);
  };

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
            className="flex flex-col items-center w-full relative group rounded"
          >
            <Link href="/detail">
              <Image
                className="card-img-top rounded-[10px] w-full"
                src={product.image}
                width={370}
                height={450}
                alt="Card cap"
              // width={1000}
              // height={100}
              />
            </Link>
            {product.isNew && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs z-10 font-bold px-6 py-2 m-4 rounded-[20px]">
                new
              </span>
            )}
            <div className="card-body w-full">
              <div className="flex justify-between items-center mt-2 mb-2">
                <div className="flex">
                  {[...Array(product.stars)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-slate-500">{product.views}</div>
              </div>
              <Link href="/detail">
                <div className="text-[#231942] text-[25px] mb-2 font-medium font-['Inter'] overflow-ellipsis text-ellipsis line-clamp-2">
                  {product.title}
                </div>

              </Link>

              <div className="flex items-center">
                <p className="font-semibold mr-2 text-[#364958] text-[21px] font-medium leading-9">
                  {product.price}
                </p>
                <p className="text-xs font-light line-through text-gray">
                  {product.oldPrice}
                </p>
              </div>
            </div>
            <div className="hidden mx-auto lg:flex absolute bottom-[190px] z-20 left-0 right-0 bg-transparent p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between mx-auto w-full">
                <div
                  onClick={() => handleOpenQuickViewModal()}
                  className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565] cursor-pointer"
                >
                  <TbArrowsDiagonal />
                </div>
                <button className="uppercase bg-[#fff] px-4 py-3 rounded-[50px] border-2 border-[#FF6565] transition">
                  Add to cart
                </button>
                <div
                  onClick={() => handleOpenWishlistModal()}
                  className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565]"
                >
                  <FaRegHeart />
                </div>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex flex-col items-center mt-4 w-full">
              <div className="flex justify-between w-full">
                <div
                  onClick={() => handleOpenQuickViewModal()}
                  className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1 cursor-pointer"
                >
                  <TbArrowsDiagonal className="mx-auto" />
                </div>
                <div
                  onClick={() => handleOpenWishlistModal()}
                  className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1"
                >
                  <FaRegHeart className="mx-auto" />
                </div>
              </div>
              <button className="uppercase w-full bg-[#f7f7f7] px-4 py-2 border-2 border-[#fff] transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {isQuickViewModalOpen && (
        <QuickViewModal
          // product={selectedProduct}
          isOpen={isQuickViewModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {isWishlistModalOpen && (
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
// 'use client';
// import { FaRegHeart } from 'react-icons/fa';
// import { TbArrowsDiagonal } from 'react-icons/tb';
// import QuickViewModal from './QuickViewModal';
// import { useState, useEffect } from 'react';
// import WishlistModal from './QuickViewWishlist';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductGroups } from '@/store/slice/productSlice'; // Import the action
// import { AppDispatch, RootState } from '@/store'; // Assuming your store is set up properly

// const TopSaleMain: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [isQuickViewModalOpen, setQuickViewModalOpen] = useState(false);
//   const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);
//   // Get the products from the Redux state
//   const products = useSelector((state: RootState) => state.product.product);
//   console.log(products);

//   useEffect(() => {
//     const res = dispatch(fetchProductGroups());
//     console.log(res);
//   }, [dispatch]);

//   const handleOpenQuickViewModal = () => {
//     setQuickViewModalOpen(true);
//     setWishlistModalOpen(false);
//   };

//   const handleOpenWishlistModal = () => {
//     setWishlistModalOpen(true);
//     setQuickViewModalOpen(false);
//   };

//   const handleCloseModal = () => {
//     setQuickViewModalOpen(false);
//     setWishlistModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center mb-20">
//       <div className="text-center mb-20 w-full">
//         <div className="text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px] mb-2">
//           Top sale
//         </div>
//         <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit
//           <br />
//           ut aliquam, purus sit amet luctus venenatis
//         </div>
//       </div>

//       <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-[78%]">
//         {products.map((product) => (
//           <div
//             key={product.code}
//             className="flex flex-col items-center w-full relative group"
//           >
//             <Link href="/detail">
//               <Image
//                 className="card-img-top rounded-[10px] w-full"
//                 src={product.name}
//                 alt="Card cap"
//                 width={370}
//                 height={450}
//               />
//             </Link>
//             {product.thumbnail && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs z-10 font-bold px-6 py-2 m-4 rounded-[20px]">
//                 new
//               </span>
//             )}
//             <div className="card-body w-full">
//               <div className="flex justify-between items-center mt-2 mb-2">
//                 <div className="flex">
//                   {[...Array(product.slug)].map((_, index) => (
//                     <span key={index} className="text-yellow-400 text-lg">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <div className="text-slate-500">{product.length}</div>
//               </div>
//               <Link href="/detail">
//                 <div className="text-[#231942] text-[25px] mb-2 font-medium font-['Inter']">
//                   {product.name}
//                 </div>
//               </Link>

//               <div className="flex items-center">
//                 <p className="font-semibold mr-2 text-[#364958] text-[21px] font-medium leading-9">
//                   {product.price}
//                 </p>
//                 {/* <p className="text-xs font-light line-through">
//                   {product.oldPrice}
//                 </p> */}
//               </div>
//             </div>
//             <div className="hidden mx-auto lg:flex absolute bottom-[190px] z-20 left-0 right-0 bg-transparent p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="flex items-center justify-between mx-auto w-full">
//                 <div
//                   onClick={() => handleOpenQuickViewModal()}
//                   className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565] cursor-pointer"
//                 >
//                   <TbArrowsDiagonal />
//                 </div>
//                 <button className="uppercase bg-[#fff] px-4 py-3 rounded-[50px] border-2 border-[#FF6565] transition">
//                   Add to cart
//                 </button>
//                 <div
//                   onClick={() => handleOpenWishlistModal()}
//                   className="bg-white mx-auto rounded-[50px] p-4 border-2 border-[#FF6565]"
//                 >
//                   <FaRegHeart />
//                 </div>
//               </div>
//             </div>
//             <div className="lg:hidden md:hidden flex flex-col items-center mt-4 w-full">
//               <div className="flex justify-between w-full">
//                 <div
//                   onClick={() => handleOpenQuickViewModal()}
//                   className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1 cursor-pointer"
//                 >
//                   <TbArrowsDiagonal className="mx-auto" />
//                 </div>
//                 <div
//                   onClick={() => handleOpenWishlistModal()}
//                   className="bg-[#f7f7f7] p-3 border-2 border-[#fff] flex-1"
//                 >
//                   <FaRegHeart className="mx-auto" />
//                 </div>
//               </div>
//               <button className="uppercase w-full bg-[#f7f7f7] px-4 py-2 border-2 border-[#fff] transition">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isQuickViewModalOpen && (
//         <QuickViewModal
//           isOpen={isQuickViewModalOpen}
//           onClose={handleCloseModal}
//         />
//       )}
//       {isWishlistModalOpen && (
//         <WishlistModal
//           isOpen={isWishlistModalOpen}
//           onClose={handleCloseModal}
//         />
//       )}
//     </div>
//   );
// };

// export default TopSaleMain;

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbArrowsDiagonal } from "react-icons/tb";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },
  {
    id: 1,
    image: "https://via.placeholder.com/370x450",
    title: "Tên sản phẩm dài tí để xem vỡ box không",
    price: "$210.00",
    oldPrice: "$300.00",
    views: "150 views",
    stars: 5,
    isNew: true,
  },

];
const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-auto">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 relative group px-2 mb-4">
          <Image
            className="card-img-top rounded-[10px] w-full"
            src={product.image}
            alt="Card cap"
          />
          {/* active product */}
          <div className="absolute bottom-[190px] z-20 left-0 right-0 bg-tranparent p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className=" bg-white mx-auto rounded-[50px] p-3 border-2 border-[#FF6565]">
                <TbArrowsDiagonal />
              </div>
              <button className="uppercase bg-[#fff] px-4 py-2 rounded-[50px] border-2 border-[#FF6565] transition">
                Add to cart
              </button>
              <div className=" bg-white mx-auto rounded-[50px] p-3 border-2 border-[#FF6565]">
                <FaRegHeart />
              </div>
            </div>
          </div>
          {/* label for new */}
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
            <div className="text-[#231942] text-[25px] mb-2 font-medium font-['Inter']">
              {product.title}
            </div>
            <div className="flex items-center">
              <p className="font-semibold mr-2 text-[#364958] text-[21px] font-medium leading-9">
                {product.price}
              </p>
              <p className="text-xs font-light line-through">{product.oldPrice}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center my-5 ">
        <ul className="flex space-x-2 border-[2px] border-[#de6565] items-center py-2 px-1 rounded-[50px]">
          <li>
            <Link href="#">
              <div className="flex items-center px-3 py-1 cursor-pointer border-r" aria-label="Previous">
                <IoIosArrowBack />
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="flex items-center px-3 py-1 cursor-pointer hover:text-[#de6565]">01</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="flex items-center px-3 py-1 cursor-pointer hover:text-[#de6565]">02</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="flex items-center px-3 py-1 cursor-pointer hover:text-[#de6565]">03</div>
            </Link>
          </li>
          <li>
            <span className="flex items-center px-3 py-1 text-gray-700">. . .</span>
          </li>
          <li>
            <Link href="#">
              <div className="flex items-center px-3 py-1 cursor-pointer border-l" aria-label="Next">
                <IoIosArrowForward />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;

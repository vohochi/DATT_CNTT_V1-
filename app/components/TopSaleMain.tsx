
import { Image } from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
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

const TopSaleMain = () => {
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

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1440px]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center w-[370px] relative group">
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
      </div>
    </div>
  );
};

export default TopSaleMain;

import ShopBanner from "./ShopBanner";
import Sidebar from "./SideBar";
import ProductList from "./ProductList";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import RelatedProduct from "./relatedProduct";

export default function ShopPage() {
  return (
    <div className="container mx-auto ">
      <ShopBanner />
      <div className="px-4 py-8 flex flex-wrap mx-auto w-[80%]">
        <div className="xl:w-1/4 w-full xl:order-1 order-2 mb-8">
          <Sidebar />
        </div>
        <div className="xl:w-3/4 w-full xl:order-2 order-1 flex flex-col items-center">
          <ProductList />
        </div>
      </div>
      <div className="flex justify-center mx-auto my-8 ">
        <Link href="#">
          <Image
            src="https://via.placeholder.com/1170x240"
            width={1170}
            height={240}
            alt="Image-HasTech"
            className="w-full h-auto rounded-lg items-center"
          />
        </Link>
      </div>
      <div className="px-4 py-8 flex flex-wrap mx-auto w-[80%]">
        <div className="text-start mb-20 w-full pl-[4px]">
          <div className="text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px] mb-4">
            Related Product
          </div>
          <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7 max-w-[40%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro error ipsam necessitatibus debitis laudantium natus eius et voluptates illum quo. Ut similique suscipit vero explicabo facilis magni non incidunt placeat.
          </div>
        </div>
        <RelatedProduct />
      </div>
    </div>
  );
}

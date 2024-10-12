"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleShopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/shop");
  };

  return (
    <div className="max-w-[1440px] mx-auto h-20 bg-white shadow flex items-center justify-between px-6">
      <div className="flex items-center">
        <Image
          className="w-[95px] h-[68px] relative"
          src="/logo.jpg"
          alt="logo"
          width={95}
          height={68}
        />

        <nav className="flex space-x-8 ml-10">
          <Link
            href="/"
            className="text-[#ff6565] text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            home
          </Link>
          <Link
            href="/about"
            className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            about
          </Link>
          <Link
            onClick={handleShopClick}
            href="/shop"
            className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            shop
          </Link>
          <Link
            href="/blog"
            className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/pages"
            className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            Pages
          </Link>
          <Link
            href="/contact"
            className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {/* Biểu tượng hoặc chức năng tìm kiếm, giỏ hàng, v.v. */}
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
          {/* Biểu tượng */}
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
          {/* Biểu tượng */}
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
          {/* Biểu tượng */}
        </div>
      </div>
    </div>
  );
};

export default Header;

<<<<<<< HEAD
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; // Import các biểu tượng từ react-icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // check scroll
      if (currentScrollY > lastScrollY) {
        setVisible(false); // hide header when scrolling down
      } else {
        setVisible(true); // show header when scrolling up
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50); // change active scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // clear
  }, [lastScrollY]);

  return (
    <div
      className={`w-full sticky top-0 z-50 flex items-center justify-between px-6 h-20 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    >
      {/* Logo and Navigation */}
      <div className="flex items-center">
        <Image
          className="w-[70px] h-auto mr-12"
          src="/logo.jpg"
          alt="logo"
          width={70}
          height={68}
        />
        <nav className="hidden md:flex space-x-10 ml-10">
          {['home', 'about', 'shop', 'blog', 'pages', 'contact'].map((item) => (
            <div
              key={item}
              className={`text-neutral-800 text-[18px] font-medium font-['Inter'] capitalize cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'hover:text-[#ff6565]' : 'hover:text-[#ff6565]'
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Search, Cart, User Icons and Mobile Navigation */}
      <div className="flex items-center space-x-4 md:space-x-2">
        {/* Search Icon */}
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <FaSearch className="w-6 h-6 text-gray-300" />
        </div>
        {/* Cart Icon */}
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <FaShoppingCart className="w-6 h-6 text-gray-300" />
        </div>
        {/* User Icon */}
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <FaUser className="w-6 h-6 text-gray-300" />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button className="p-2 text-[#ff6565]">
            {/* Replace with a hamburger menu icon */}☰
          </button>
=======
import Image from 'next/image';

const Header = () => {
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
          <div className="text-[#ff6565] text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            home
          </div>
          <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            about
          </div>
          <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            shop
          </div>
          <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            Blog
          </div>
          <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            Pages
          </div>
          <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px] cursor-pointer">
            Contact
          </div>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* Biểu tượng hoặc chức năng tìm kiếm, giỏ hàng, v.v. */}
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{' '}
          {/* Biểu tượng */}
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{' '}
          {/* Biểu tượng */}
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />{' '}
          {/* Biểu tượng */}
>>>>>>> origin/Chi
        </div>
      </div>
    </div>
  );
};

export default Header;

'use client';

import Image from 'next/image';
import Link from 'next/link';
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
            // onClick={handleShopClick}
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
          <Link href={'/account'}>
            {' '}
            <FaUser className="w-6 h-6 text-gray-300" />
          </Link>{' '}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button className="p-2 text-[#ff6565]">
            {/* Replace with a hamburger menu icon */}☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button className="p-2 text-[#ff6565]">
          {/* Replace with a hamburger menu icon */}☰
        </button>
      </div>
    </div>
  );
};

export default Header;

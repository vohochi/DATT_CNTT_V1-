'use client'; 

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // check scroll
      if (currentScrollY > lastScrollY) {
        setVisible(false); // visible header when down
      } else {
        setVisible(true); // show header scroll up
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50); // change active scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // clear
  }, [lastScrollY]); 

  return (
    <div
      className={`w-full sticky top-0 z-50 flex items-center justify-between px-6 h-20 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}
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
              className={`text-neutral-800 text-[18px] font-medium font-['Inter'] capitalize cursor-pointer transition-colors duration-300 ${isScrolled ? 'hover:text-[#ff6565]' : 'hover:text-[#ff6565]'}`}
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
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          {/* Replace with actual search icon */}
        </div>
        {/* Cart Icon */}
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          {/* Replace with actual cart icon */}
        </div>
        {/* User Icon */}
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          {/* Replace with actual user icon */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button className="p-2 text-[#ff6565]">
            {/* Replace with a hamburger menu icon */}☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        <nav className="hidden md:flex space-x-8 ml-10">
          <Link
            href="/"
            className="text-[#ff6565] text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            home
          </Link>
          <div className="relative group">
            <Link
              href="/shop"
              className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
            >
              shop
            </Link>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:flex bg-white shadow-lg">
              <table className="w-[400px]">
                <thead className="border-b border-gray-100">
                  <tr>
                    <th className="text-center py-4 text-gray-700 text-sm font-bold border-r border-gray-100">
                      Page
                    </th>
                    <th className="text-center py-4 text-gray-700 text-sm font-bold">
                      Order Page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* First Column */}
                  <tr>
                    <td className="text-center border-b border-gray-100 p-4 hover:bg-gray-100 transition-all duration-300 border-r">
                      <Link
<<<<<<< HEAD
                        href="/account"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        My account
=======
                        href="#"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        test
>>>>>>> Tinhf
                      </Link>
                    </td>
                    <td className="text-center border-b border-gray-100 p-4 hover:bg-gray-100 transition-all duration-300">
                      <Link
                        href="/wishlist"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Wishlist
                      </Link>
                    </td>
                  </tr>
                  {/* Second Column */}
                  <tr>
                    <td className="text-center p-4 hover:bg-gray-100 transition-all duration-300 border-r border-gray-100">
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        test test test
                      </Link>
                    </td>
                    <td className="text-center p-4 hover:bg-gray-100 transition-all duration-300">
                      <Link
                        href="/compare"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Compare
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center p-4 hover:bg-gray-100 transition-all duration-300 border-r border-gray-100">
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        test
                      </Link>
                    </td>
                    <td className="text-center p-4 hover:bg-gray-100 transition-all duration-300">
                      <Link
                        href="/frequentlyQuestions"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Frequently questions
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
          <Link
            href="/about"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            about
          </Link>
          <Link
            href="/blog"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/blogdetail"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            BlogDetail
          </Link>
          <Link
            href="/contact"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <FaSearch className="w-6 h-6 text-gray-300" />
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <Link href={'/cart'}>
            <FaShoppingCart className="w-6 h-6 text-gray-300" />
          </Link>{' '}
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
          <Link href="/auth/login">
            <FaUser className="w-6 h-6 text-gray-300" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="p-2 text-[#ff6565]">☰</button>
      </div>
    </div>
  );
};

export default Header;

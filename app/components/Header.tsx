'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FaSearch, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import SearchModal from './SearchTopBar';
import CartSideBarModal from './CartRightSideBar';
import Cookies from 'js-cookie';
import { fetchProfile } from '@/_lib/customer';
import { Customer } from '@/types/Customer';
import { useRouter } from 'next/navigation';
import { Logout } from '@/_lib/auth';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<Customer | null>(null);
  const router = useRouter();
  useEffect(() => {
    const userId = Cookies.get('user_id');
    if (userId) {
      fetchProfile(parseInt(userId))
        .then((data) => {
          console.log(data);
          setUserProfile(data.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, []);

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
  const handleLogout = async () => {
    await Logout();
    Cookies.remove('user_id');
    setUserProfile(null);
    router.push('/auth/login');
  };

  //cant scroll when open mobi menu
  useEffect(() => {
    if (isMobileMenuOpen || isCartModalOpen || isSearchModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen, isCartModalOpen, isSearchModalOpen]);

  return (
    <div
      className={`w-full sticky top-0 z-30 flex items-center justify-between px-6 h-20 transition-transform duration-300 ${
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
          <Link
            href="/about"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            about
          </Link>
          <Link
            href="/shop"
            className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
          >
            shop
          </Link>
          <div className="relative group">
            <Link
              href="/blog"
              className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
            >
              blog
            </Link>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:flex bg-white shadow-lg -mt-3">
              <table className="w-[250px] table-fixed">
                <tbody>
                  <tr className="border-t">
                    <td className="text-center border-b border-gray-200 p-4 hover:bg-gray-200 border-r">
                      <Link
                        href="/account"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        blog detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
          <div className="relative group">
            <Link
              href="#"
              className="text-neutral-800 text-[15px] font-medium capitalize leading-[80px] cursor-pointer"
            >
              page
            </Link>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:flex bg-white shadow-lg -mt-3">
              <table className="w-[500px] table-fixed">
                <thead>
                  <tr>
                    <th className="text-center py-4 text-gray-700 font-bold border-r">
                      Page
                    </th>
                    <th className="text-center py-4 text-gray-700 font-bold">
                      Order Page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="text-center border-b border-gray-200 p-4 hover:bg-gray-200 border-r">
                      <Link
                        href="/account"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        My account
                      </Link>
                    </td>
                    <td className="text-center border-b border-gray-200 p-4 hover:bg-gray-200">
                      <Link
                        href="/wishlist"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Wishlist
                      </Link>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="text-center border-b border-gray-200 p-4 hover:bg-gray-200 border-r">
                      <Link
                        href="/cart"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Cart
                      </Link>
                    </td>
                    <td className="text-center border-b border-gray-200 p-4 hover:bg-gray-200">
                      <Link
                        href="/compare"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Compare
                      </Link>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="text-center p-4 hover:bg-gray-200 border-r">
                      <Link
                        href="/checkout"
                        className="text-gray-700 hover:text-[#ff6565] "
                      >
                        Checkout
                      </Link>
                    </td>
                    <td className="text-center p-4 hover:bg-gray-200">
                      <Link
                        href="/frequentlyQuestions"
                        className="text-gray-700 hover:text-[#ff6565]"
                      >
                        Frequently Questions
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
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
        <div
          onClick={() => setIsSearchModalOpen(true)}
          className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
        >
          <FaSearch className="w-6 h-6 text-[#1f1f1f]" />
        </div>
        <div
          onClick={() => setIsCartModalOpen(true)}
          className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
        >
          <FaShoppingCart className="w-6 h-6 text-[#1f1f1f]" />
        </div>
        <div className="w-[30px] h-[30px] flex flex-col justify-center items-center cursor-pointer">
          {' '}
          {/* Changed to flex-col */}
          {userProfile ? (
            <div className="flex flex-col items-center">
              {' '}
              {/* Changed to flex-col */}
              <span className="text-sm">{userProfile.name}</span>{' '}
              {/* Removed unnecessary ml-2 */}
              <button
                onClick={handleLogout}
                className="ml-2 mt-1 text-sm text-red-500 hover:text-red-700"
              >
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <Link href="/auth/login">
              <FaUser className="w-6 h-6 text-[#1f1f1f]" />
            </Link>
          )}
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="p-2 text-[#1f1f1f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* dark overlay */}
      <div
        className={`fixed inset-0 z-40 h-screen bg-black transition-opacity duration-300 ${
          isMobileMenuOpen || isSearchModalOpen || isCartModalOpen
            ? 'opacity-80'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setIsSearchModalOpen(false);
          setIsCartModalOpen(false);
        }}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 w-64 h-screen-container bg-[#de6565] shadow-lg transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-[#1f1f1f] w-full h-screen text-[#fff]">
          <h2 className="flex justify-between items-center text-lg font-semibold bg-[#de6565] p-4">
            Menu
            <MdOutlineArrowBackIos
              className="ml-auto"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </h2>
          <nav className="flex flex-col h-full space-y-3 mt-4 w-full px-4 ">
            <Link
              href="/"
              className="text-sm text-[#fff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm text-[#fff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#fff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[#fff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#fff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
      <CartSideBarModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </div>
  );
};

export default Header;

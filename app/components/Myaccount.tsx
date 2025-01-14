'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import ProfileForm from './AccountDetails';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Download from './Download';
import PaymentMethod from './PaymentMethod';
import Address from './Address';

const Myaccount = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const menu = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Orders' },
    { id: 3, name: 'Download' },
    { id: 4, name: 'Payment Method' },
    { id: 5, name: 'Address' },
    { id: 6, name: 'Account Details' },
    { id: 7, name: 'Logout' },
  ];

  const handleLogout = async () => {
    try {
      const authToken = Cookies.get('authToken');
      if (authToken) {
        await axios.post(
          '/api/auth/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      }
      Cookies.remove('user_id');
      Cookies.remove('authToken');
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
      Cookies.remove('user_id');
      Cookies.remove('authToken');
      router.push('/auth/login');
    }
  };

  const handleTabClick = (index: number) => {
    if (index === 6) {
      // Logout tab
      handleLogout();
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#fff3da] py-8 px-4 md:px-16 lg:px-24">
        <div className="text-sm text-gray-500">
          <a href="/" className="hover:text-black">
            Home
          </a>{' '}
          / <span>My Account</span>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mt-4 md:text-3xl">
          My Account
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-8 px-4 md:px-16 lg:px-24">
        <div className="border md:w-[25%] col-span-3 md:col-span-3 cursor-pointer">
          <ul className="">
            {menu.map((i, index) => (
              <li
                key={i.id}
                className={`p-3 hover:bg-red-400 ${
                  index === menu.length - 1 ? '' : 'border-b border-b-gray-200'
                } ${activeTab === index ? 'bg-red-400 text-stone-50' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {i.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 border col-span-9 md:col-span-9 w-[100%]">
          {activeTab === 0 && <Dashboard />}
          {activeTab === 1 && <Orders />}
          {activeTab === 2 && <Download />}
          {activeTab === 3 && <PaymentMethod />}
          {activeTab === 4 && <Address />}
          {activeTab === 5 && <ProfileForm />}
        </div>
      </div>
    </div>
  );
};

export default Myaccount;

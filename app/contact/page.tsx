import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMailBulk,
  faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Image component

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        {/* Sử dụng Image component của Next.js */}
        <Image
          className="w-full md:w-1/2 max-w-[750px] h-auto rounded-tr-[30px] rounded-br-[30px] mb-8 md:mb-0"
          src="https://via.placeholder.com/945x709"
          alt="Contact"
          width={945} // Cung cấp chiều rộng và chiều cao
          height={709}
          layout="responsive" // Cho phép ảnh tự động điều chỉnh kích thước
        />
        <div className="w-full md:w-1/2 max-w-[600px] px-4">
          <h1 className="text-4xl md:text-5xl mb-4 text-[#231942] capitalize">
            Get in touch
          </h1>
          <p className="text-base mb-6 text-[#364958]">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            aliquam, purus sit amet luctus venenatis
          </p>
          <div className="w-10 h-px bg-[#cecece] mb-8"></div>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 p-3 border-b border-[#b9b9b9]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-3 border-b border-[#b9b9b9]"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border-b border-[#b9b9b9]"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 h-32 border-b border-[#b9b9b9] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-[#ff6565] text-white rounded-full uppercase font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#fffaef] mt-8 py-12 m-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
            <div className="md:w-1/3">
              <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mb-4" />
              <p className="text-base">+11 0203 03023</p>
              <p className="text-base">+11 0203 03023</p>
            </div>
            <div className="md:w-1/3">
              <FontAwesomeIcon icon={faMailBulk} className="w-8 h-8 mb-4" />
              <p className="text-base">example@demo.com</p>
              <p className="text-base">demo@example.com</p>
            </div>
            <div className="md:w-1/3">
              <FontAwesomeIcon icon={faMapLocation} className="w-8 h-8 mb-4" />
              <p className="text-base">
                Sunset Beach, North
                <br />
                Carolina(NC), 28468
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="w-full px-4 py-12">
        <div className="max-w-[1200px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9661090362644!2d-78.18843588439673!3d33.88913313335692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89006d6e8d3495e1%3A0x4e4d87c37ef88f92!2sSunset%20Beach%2C%20NC%2028468%2C%20USA!5e0!3m2!1sen!2s!4v1645544852322!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;

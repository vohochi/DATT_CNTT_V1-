import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Nhập biểu tượng từ react-icons

const Footer = () => {
  return (
    <footer className="flex flex-col bg-neutral-50 rounded-t-lg">
      <div className="mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image
              className="w-24 h-auto mb-6"
              src="/logo.jpg"
              width={95}
              height={68}
              alt="logo"
            />
            <p className="text-[#364958] text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          {/* Information Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h3 className="text-[#231942] text-lg font-semibold mb-4">
              Information
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
              {[
                'Blog',
                'About us',
                'Contact',
                'Privacy',
                'Login',
                'Shop',
                'My Account',
                'FAQs',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#364958] text-sm lg:text-base hover:text-[#ff6565]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-[#231942] text-lg font-semibold mb-4">
              Social Info
            </h3>
            <div className="flex space-x-4">
              {/* Sử dụng biểu tượng từ react-icons */}
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center text-gray-600 hover:text-[#ff6565]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center text-gray-600 hover:text-[#ff6565]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center text-gray-600 hover:text-[#ff6565]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e8e8e8]">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <p className="text-center text-[#6d6d6d] text-sm">
            © 2022 Brancy. Made with love by Codecarnival.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
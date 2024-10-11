import Image from 'next/image';

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-20 bg-white shadow flex items-center justify-between px-6">
      {/* Logo and Navigation */}
      <div className="flex items-center">
        <Image
          className="w-[95px] h-auto"
          src="/logo.jpg"
          alt="logo"
          width={95}
          height={68}
        />
        <nav className="hidden md:flex space-x-8 ml-10">
          {['home', 'about', 'shop', 'blog', 'pages', 'contact'].map((item) => (
            <div
              key={item}
              className={`text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize cursor-pointer transition-colors duration-300 hover:text-[#ff6565]`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Search and Cart Icons */}
      <div className="flex items-center space-x-4">
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
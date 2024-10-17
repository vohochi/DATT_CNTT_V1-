const SliderMain = () => {
  return (
    <div className="flex flex-row justify-between w-full -mt-[90px] h-auto relative">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative">
        <div className="relative flex flex-col items-start">
          <img
            src="10003.jpg"
            alt="Background"
            className="w-[180px] sm:w-[240px] md:w-[427px] h-auto rounded-lg transition-all"
          />
          <h1 className="z-20 absolute bottom-0 left-0 z-10 text-[30px] sm:text-[40px] md:text-[60px] uppercase font-bold overflow-hidden whitespace-nowrap">
            Clean Fresh
          </h1>
        </div>
        <div className="flex flex-col items-start mt-4">
          <p className="z-20 text-base sm:text-lg md:text-lg text-gray-700 text-start mb-6 w-[180px] sm:w-[240px] md:w-[427px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="px-4 py-2 bg-[#ff6565] text-white rounded hover:bg-[#ff4949] transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="absolute bottom-0 left-0 z-10 text-[16px] sm:text-[18px] md:text-[21px] text-gray-500 mx-8">
          ___ 01 / 03 ___
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center bg-[#d9f1e1] w-1/2 p-4 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] relative">
        <div className="relative ml-[500px]">
          <img src="10004.jpg" alt="Slider Image" className="hidden md:block" />
        </div>
        <div className="absolute bottom-0 right-[120px] z-10 flex space-x-4 mb-2 ">
          {/* Icon Container */}
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
        </div>
        <img
          src="https://via.placeholder.com/841x832"
          alt="Decorative"
          className="-ml-[50%] sm:-ml-[50%] md:-ml-[20%] w-full sm:w-[1000px] md:w-[1200px] mt-[0] absolute transition-all z-10"
        />
      </div>
    </div>
  );
};

export default SliderMain;

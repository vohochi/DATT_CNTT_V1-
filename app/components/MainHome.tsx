'use client';
import BlogMain from '@/app/components/BlogMain';
import CategoryMain from '@/app/components/CategoryMain';
import SliderMain from '@/app/components/SliderMain';
import TopSaleMain from '@/app/components/TopSaleMain';
import { useCorsAnywhere } from '@/hook/useCorsAnywhere';
import { FaPaperPlane } from 'react-icons/fa';

const MainHome = () => {
  const { corsReady, error } = useCorsAnywhere();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!corsReady) {
    return <div>Đang kích hoạt CORS Anywhere...</div>;
  }

  return (
    <div className="w-full container mx-auto">
      <SliderMain />
      <CategoryMain />
      <TopSaleMain />
      <BlogMain />
      <div className="flex flex-col items-center">
        <div
          className=" bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('10017.jpg')", borderRadius: '20px' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-opacity-80 py-10 px-20">
            <div className="md:w-5/12 w-full text-left mb-6 md:mb-0">
              <h1 className="text-gray-800 text-3xl md:text-6xl font-bold mb-4">
                Join with us
              </h1>
              <p className="text-gray-700 text-base md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                sequi fugiat consectetur? Explicabo v.
              </p>
            </div>

            <div className="md:w-7/12 w-full flex justify-center bg-tranparent items-center">
              <input
                type="email"
                className="p-2 w-full md:w-3/4 border border-red-500 rounded-l focus:outline-none"
                placeholder="enter your email"
              />
              <button className="p-3 w-1/3 -ml-3 md:w-auto text-white bg-[#ce4820] rounded-[15px] border border-[#fa6565] hover:bg-red-800">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;

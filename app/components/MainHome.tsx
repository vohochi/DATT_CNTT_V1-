import BlogMain from '@/app/components/BlogMain';
import CategoryMain from '@/app/components/CategoryMain';
import SliderMain from '@/app/components/SliderMain';
import TopSaleMain from '@/app/components/TopSaleMain';
import { FaPaperPlane } from 'react-icons/fa';

const MainHome = () => {
  return (
    <div className="w-full container mx-auto">
      <SliderMain />
      <CategoryMain />
      <div className="w-[77%] mx-auto flex flex-col items-center mb-20">
        <div className="text-center mb-20 w-full">
          <div className="text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px] mb-2">
            Top sale
          </div>
          <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br />
            ut aliquam, purus sit amet luctus venenatis
          </div>
        </div>
        <TopSaleMain />
      </div>
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

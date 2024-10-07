import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-[1440px] h-20 bg-white shadow flex-col justify-start items-center inline-flex">
      <div className="h-20 flex-col justify-start items-start flex">
        <div className="self-stretch justify-start items-center inline-flex">
          <div className="w-[120px] px-[15px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[74px] pb-1.5 flex-col justify-start items-start flex">
              <div className="justify-start items-center inline-flex">
                <Image
                  className="w-[95px] h-[68px] relative"
                  src="/logo.jpg"
                  alt="logo"
                  width={95} // Thay đổi giá trị này theo kích thước thực tế
                  height={68} // Thay đổi giá trị này theo kích thước thực tế
                />
              </div>
            </div>
          </div>
          <div className="w-[840px] pl-[50px] pr-[15px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="self-stretch pr-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="pr-2 justify-start items-start inline-flex">
                    <div className="text-[#ff6565] text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      home
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-3 justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      about
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-3 justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      shop
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-3 justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      Blog
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-3 justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      Pages
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch pl-2.5 flex-col justify-center items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-3 justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-[15px] font-medium font-['Inter'] capitalize leading-[80px]">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[480px] px-[15px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-end items-center inline-flex">
              <div className="w-[30px] h-[30.63px] px-[3px] pt-[0.63px] flex-col justify-start items-center inline-flex">
                <div className="justify-center items-center inline-flex">
                  <div className="w-6 h-[30px] relative" />
                </div>
              </div>
              <div className="w-[58px] h-[30px] relative">
                <div className="w-[30px] h-[30.63px] px-[3px] pt-[0.63px] left-[28px] top-0 absolute flex-col justify-start items-center inline-flex">
                  <div className="justify-center items-center inline-flex">
                    <div className="w-6 h-[30px] relative" />
                  </div>
                </div>
              </div>
              <div className="w-[58px] h-[30px] relative">
                <div className="w-[30px] h-[30.63px] pt-[0.63px] left-[28px] top-0 absolute flex-col justify-start items-start inline-flex">
                  <div className="justify-start items-center inline-flex">
                    <div className="w-6 h-[30px] relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

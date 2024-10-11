const BlogMain = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="text-center mb-20 w-full">
        <div className="text-[#231942] text-[50px] font-normal font-['Inter'] capitalize leading-[39px] mb-2">
          Blog posts
        </div>
        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br />
          ut aliquam, purus sit amet luctus venenatis
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1440px]">
        {/* Blog Card 1 */}
        <div className="flex flex-col items-start w-[370px]">
          <img
            className="card-img-top rounded-[10px] w-full"
            src="https://via.placeholder.com/370x320"
            alt="Card cap"
          />
          <div className="card-body w-full">
            <div className="px-[31px] py-[7px] mt-6 mb-6 bg-[#ff9c9c] rounded-[50px] justify-start items-start inline-flex">
              <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
                beauty
              </div>
            </div>
            <div className="text-[#231942] text-[28px] mb-2 font-medium font-['Inter']">
              Facial Scrub is naturaltreatment for face. đang test coi dài quá thì nó có vỡ layout không mà vỡ sao được heheheheheheheh.
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="flex text-slate-500">BY: NAM ĐẸP TRAI</div>
              <div className="flex justify-end">
                <p className="text-slate-500">March 2, 2004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col items-start w-[370px]">
          <img
            className="card-img-top rounded-[10px] w-full"
            src="https://via.placeholder.com/370x320"
            alt="Card cap"
          />
          <div className="card-body w-full">
            <div className="px-[31px] py-[7px] mt-6 mb-6 bg-[#a49cff] rounded-[50px] justify-start items-start inline-flex">
              <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
                beauty
              </div>
            </div>
            <div className="text-[#231942] text-[28px] mb-2 font-medium font-['Inter']">
              Facial Scrub is naturaltreatment for face. đang test coi dài quá thì nó có vỡ layout không mà vỡ sao được heheheheheheheh.
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="flex text-slate-500">BY: NAM ĐẸP TRAI</div>
              <div className="flex justify-end">
                <p className="text-slate-500">March 2, 2004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col items-start w-[370px]">
          <img
            className="card-img-top rounded-[10px] w-full"
            src="https://via.placeholder.com/370x320"
            alt="Card cap"
          />
          <div className="card-body w-full">
            <div className="px-[31px] py-[7px] mt-6 mb-6 bg-[#9cdbff] rounded-[50px] justify-start items-start inline-flex">
              <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
                beauty
              </div>
            </div>
            <div className="text-[#231942] text-[28px] mb-2 font-medium font-['Inter']">
              Facial Scrub is naturaltreatment for face. đang test coi dài quá thì nó có vỡ layout không mà vỡ sao được heheheheheheheh.
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="flex text-slate-500">BY: NAM ĐẸP TRAI</div>
              <div className="flex justify-end">
                <p className="text-slate-500">March 2, 2004</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;

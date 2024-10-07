import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-auto w-full bg-neutral-50 rounded-tl-[10px] rounded-tr-[10px] flex-col justify-start items-start gap-[0px] inline-flex">
      <div className="self-stretch h-[401px] px-[120px] py-[100px] flex-col justify-start items-center flex">
        <div className="h-[201px] flex-col justify-start items-start flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="w-[400px] self-stretch px-[15px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[190px] flex-col justify-start items-start gap-[38px] flex">
                <div className="justify-start items-center inline-flex">
                  <Image
                    className="w-[95px] h-[68px] relative"
                    src="/logo.jpg"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </div>
                <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-[#364958] text-base font-normal font-['Inter'] leading-7">
                    Lorem Ipsum is simply dummy text of
                    <br />
                    the printing and typesetting industry.
                    <br />
                    Lorem Ipsum has been.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[500px] self-stretch px-[15px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[201px] flex-col justify-start items-start gap-[35px] flex">
                <div className="self-stretch h-[22px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-[#231942] text-lg font-semibold font-['Inter'] leading-snug">
                    Information
                  </div>
                </div>
                <div className="h-36 relative">
                  <div className="w-[156.66px] h-12 pb-5 left-0 top-0 absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          Blog
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-[156.66px] top-0 absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          About us
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-[313.31px] top-0 absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          Contact
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-0 top-[48px] absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          Privacy
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-[156.66px] top-[48px] absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          Login
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-[313.31px] top-[48px] absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          Shop
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-0 top-[96px] absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          My Account
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[156.66px] h-12 pb-5 left-[156.66px] top-[96px] absolute flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-7 flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="text-[#364958] text-base font-normal font-['Inter'] leading-7">
                          FAQs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] self-stretch px-[15px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[93.75px] flex-col justify-start items-start gap-[35px] flex">
                <div className="self-stretch h-[22px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-[#231942] text-lg font-semibold font-['Inter'] leading-snug">
                    Social Info
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="self-stretch pt-[7px] pb-[8.75px] flex-col justify-start items-start inline-flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="w-[19.50px] h-[21px] relative" />
                    </div>
                  </div>
                  <div className="self-stretch pl-[60px] flex-col justify-center items-start inline-flex">
                    <div className="pt-[7px] pb-[8.75px] flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="w-3 h-[21px] relative" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch pl-[60px] flex-col justify-center items-start inline-flex">
                    <div className="pt-[7px] pb-[8.75px] flex-col justify-start items-start flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="w-[15px] h-[21px] relative" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[64.50px] px-[120px] flex-col justify-start items-center flex">
        <div className="h-[64.50px] px-[15px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[64.50px] pt-[21px] pb-[19px] border-t border-[#e8e8e8] flex-col justify-start items-start flex">
            <div className="h-[24.50px] relative">
              <div className="w-[181.79px] h-[24.50px] left-[427.95px] top-[-0.75px] absolute text-center text-[#6d6d6d] text-sm font-normal font-['Inter'] leading-normal">
                © 2022 Brancy. Made with{' '}
              </div>
              <div className="left-[611.41px] top-[6px] absolute justify-center items-start inline-flex">
                <div className="justify-start items-start flex">
                  <div className="w-[13px] h-[13px] relative" />
                </div>
              </div>
              <div className="w-[24.39px] h-[24.50px] left-[626.41px] top-[-0.75px] absolute text-center text-[#6d6d6d] text-sm font-normal font-['Inter'] leading-normal">
                {' '}
                by{' '}
              </div>
              <div className="left-[650.74px] top-[-0.75px] absolute justify-center items-start inline-flex">
                <div className="text-center text-[#6d6d6d] text-sm font-normal font-['Inter'] leading-normal">
                  Codecarnival.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

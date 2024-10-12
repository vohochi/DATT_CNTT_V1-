import Image from 'next/image';
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/Chi
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Copyright */}
      <div className="border-t border-[#e8e8e8]">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <p className="text-center text-[#6d6d6d] text-sm">
            © 2022 Brancy. Made with love by Codecarnival.
          </p>
        </div>
      </div>
    </footer>
=======
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
>>>>>>> origin/Chi
  );
};

export default Footer;

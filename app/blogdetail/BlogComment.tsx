import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Image } from "@nextui-org/react";

const BlogComment = () => {
  return (
    <div className="border-t border-gray-300 pt-[50px] px-[100px]">
      <div className="">
        <h4 className="border-b border-gray-300 pb-2 mb-[18px] text-[28px] leading-9 font-medium">
          Comment
        </h4>
      </div>
      <div className="flex items-center justify-between mb-[26px] ">
        <div className="flex items-center justify-end">
          <span className="ml-4 text-lg h-9 mb-0 mr-4">Share: </span>
          <a
            href=""
            className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 hover:text-red-400 transition duration-500"
          >
            <span
              className="iconify"
              data-icon="formkit:pinterest"
              data-width="24"
            ></span>
          </a>
          <a
            href=""
            className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 ml-3 hover:text-red-400 transition duration-500"
          >
            <span
              className="iconify"
              data-icon="ri:twitter-fill"
              data-width="24"
            ></span>
          </a>
          <a
            href=""
            className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 ml-3 hover:text-red-400 transition duration-500"
          >
            <span
              className="iconify"
              data-icon="flowbite:facebook-solid"
              data-width="24"
            ></span>
          </a>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-white pr-6 py-2 text-lg border-none">
              Short By Newest
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Best
                </a>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Newest
                </a>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Oldest
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>

      </div>
      <div className="flex items-center border-b border-gray-300 pb-[29px]">
        <Image
            src="https://via.placeholder.com/110x110"
            alt="Image"
            width={110}
            height={110}
            className="mr-[60px] rounded-[50%]"
          />
          <textarea className="text-lg text-[#364958] resize-none border border-[#c4c4c4] rounded-[10px] w-[100%] h-[70px] px-[34px] pt-[22px] pb-[5px] ml-[60px]" placeholder="type your comment"></textarea>
        </div>
    </div>
  );
};
export default BlogComment;

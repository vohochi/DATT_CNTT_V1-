import { Image } from "@nextui-org/react";

const Slideshow = () => {
    return(
        <div className="grid grid-cols-12 pt-10 mt-4 pb-28">
        <div className="col-span-6">
          <a
            href=""
            className="flex items-center flex-wrap transition duration-500"
          >
            <div className="flex">
              <span
                className="bg-[#f5f5f5] rounded-[3px] text-gray-600 text-base uppercase px-1 py-5 transition-all duration-500 ease-in-out "
                style={{ writingMode: "vertical-lr" }}
              >
                PREV
              </span>
              <Image
                src="https://via.placeholder.com/93x80"
                alt="Image-HasTech"
                width={93}
                height={80}
                className="ml-3"
              />
            </div>
            <div className="pl-5 ml-3">
              <h4 className="max-w-52 text-gray-500 text-lg font-normal mb-1 transition-all duration-500 ease-in-out">
                Lorem ipsum dolor amet, consectetur adipiscing.
              </h4>
              <h5 className="font-medium text-sm leading-6 uppercase text-gray-400 mb-0">
                February 13, 2022
              </h5>
            </div>
          </a>
        </div>
        <div className="col-span-6">
          <a
            href=""
            className="flex items-center flex-wrap transition duration-500 text-right flex-row-reverse relative before:absolute before:h-[60px] before:w-[1px] before:bg-gray-400 before:left-[-15px]"
          >
            <div className="flex flex-row-reverse">
              <span
                className="bg-[#f5f5f5] rounded-[3px] text-gray-600 text-base uppercase px-1 py-5 transition-all duration-500 ease-in-out ml-3"
                style={{ writingMode: "vertical-lr" }}
              >
                NEXT
              </span>
              <Image
                src="https://via.placeholder.com/93x80"
                alt="Image-HasTech"
                width={93}
                height={80}
              />
            </div>
            <div className="pr-5">
              <h4 className="max-w-52 text-gray-500 text-lg font-normal mb-1 transition-all duration-500 ease-in-out">
                Lorem ipsum dolor amet, consectetur adipiscing.
              </h4>
              <h5 className="font-medium text-sm leading-6 uppercase text-gray-400 mb-0">
                February 13, 2022
              </h5>
            </div>
          </a>
        </div>
      </div>
    )
}
export default Slideshow;
import { Image } from "@nextui-org/react";
import SendMail from "../components/BlogDetail/SendMail";
import BlogPost from "../components/BlogDetail/BlogPost";
import Slideshow from "../components/BlogDetail/SlideShow";
import BlogComment from "../components/BlogDetail/BlogComment";

export default function BlogDetail() {

  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-6xl font-light mb-12 pt-28 text-gray-800 leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>
      <div className="flex mb-12 ">
        <a
          href="#"
          className="bg-red-400 text-white font-medium text-xs uppercase inline-block rounded-full px-[31px] py-[7px]"
        >
          Beauty
        </a>
        <a
          href="#"
          className="bg-violet-400 text-white font-medium text-xs uppercase inline-block rounded-full px-[31px] py-[7px] ml-5"
        >
          Fashion
        </a>
      </div>
      <Image
        src="https://via.placeholder.com/1170x1012"
        alt="Profile Picture"
        width={1170}
        height={1012}
        className="rounded-3xl mb-12"
      />

      <div className="row-auto justify-center flex">
        <div className="max-w-[925px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <ul className="flex">
                <li className="flex items-center text-center text-2xl leading-7">
                  <img
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/mypham/downloadable-files/brancy-html/assets/images/blog/admin.webp"
                    alt=""
                    className="border-4 rounded-full mr-6"
                  />{" "}
                  Tomas Alva Addison
                </li>
                <li className="ml-12 flex items-center text-center text-2xl leading-7">
                  February 13, 2022
                </li>
              </ul>
            </div>
            <div className="col-span-5">
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
            </div>
          </div>
          <p className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            quis turpis feugiat sapien venenatis. Iaculis nunc nisl risus mattis
            elit id lobortis. Proin erat fermentum tempor elementum bibendum.
            Proin sed in nunc purus. Non duis eu pretium dictumst sed habitant
            sit vitae eget. Nisi sit lacus, fusce diam. Massa odio sit velit sed
            purus quis dolor.
          </p>
          <ul className="mb-2 list-disc">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Massa odio sit velit sed purus quis dolor.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin sed in nunc purus. Non duis eu pretium dictumst</li>
          </ul>
        </div>
      </div>
      <div className="justify-center flex">
        <div className="max-w-[780px] mx-auto">
          <blockquote className="px-8 py-12 relative text-center mt-10 before:absolute before:top-0 before:transform before:translate-x-[-50%] before:bg-gray-300 before:w-56 before:h-0.5 before:content-[''] after:absolute after:bottom-0 after:transform after:left-1/2 after:translate-x-[-50%] after:bg-gray-300 after:w-56 after:h-0.5 after:content-['']">
            <p className="italic text-xl leading-7 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              semper purus, at venenatis scelerisque nibh. Nisl sit convallis
              accumsan integer lorem. Nibh nunc in nulla quis pulvinar dictum.
              Eget nisi, praesent proin viverra.
            </p>
            <span className="text-2xl leading-7 italic text-center text-gray-500">
              BY Momen de tomas
            </span>
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/mypham/downloadable-files/brancy-html/assets/images/icons/quote1.webp"
              alt="Icon"
              width={84}
              height={60}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[-1]"
            />
          </blockquote>
        </div>
      </div>
      <div className="justify-center flex">
        <div className="max-w-[925px] mx-auto">
          <p className="py-10 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            quis turpis feugiat sapien venenatis. Iaculis nunc nisl risus mattis
            elit id lobortis. Proin erat fermentum tempor elementum bibendum.
            Proin sed in nunc purus. Non duis eu pretium dictumst sed habitant
            sit vitae eget. Nisi sit lacus, fusce diam. Massa odio sit velit sed
            purus quis dolor.
          </p>
          <Image
            src="https://via.placeholder.com/970x340"
            alt="Image"
            width={1000}
            height={340}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="pb-0 pt-28">
        <a
          href=""
          className="block before:bg-gray-100/10 rounded-lg overflow-hidden relative before:absolute before:top-[-50%] before:h-48 before:w-20 before:z-10 before:bg-gray-900 before:rotate-45 before:transition-all before:duration-2000 before:left-[-280px]
     after:top-[-50%] after:bg-gray-100/10 after:h-48 after:w-20 after:z-10 after:bg-gray-900 after:rotate-45 after:transition-all after:duration-2000 after:left-[180px]"
        >
          <Image
            src="https://via.placeholder.com/1170x200"
            alt="Image-HasTech"
            width={1170}
            height={200}
            className="rounded-3xl"
          />
        </a>
      </div>
      <Slideshow/>
      <BlogComment/>
      <BlogPost/>
      <SendMail/>
    </div>
  );
}

'use client'
import { Post } from '@/types/PostBlog';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { getPostById } from '../blogdetail/[id]/api/postById';

export default function BlogDetail() {
  const { id } = useParams();

  const numericId = useMemo(() => {
    return Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
  }, [id]);

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getPostById(numericId);
        setPost(data);
        console.log('post',data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchBlog();
  }, [numericId]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-6xl font-light mb-12 pt-28 text-gray-800 leading-snug">
        {post.title}
      </h3>
      <div className="flex mb-12 ">
        <a
          href="#"
          className="bg-[#ff9c9c] text-white  font-medium font-['Inter'] text-[13px] uppercase inline-block rounded-full px-[31px] py-[7px]"
        >
          {post.tags}
        </a>
        <a
          href="#"
          className="bg-[#957afe] text-white font-medium font-['Inter'] text-[13px] uppercase inline-block rounded-full px-[31px] py-[7px] ml-5"
        >
          {post.tags}
        </a>
      </div>
      <Image
        src={post.thumbnail}
        alt=""
        width={640}
        height={480}
        className="rounded-3xl mb-12"
      />

      <div className="row-auto justify-center flex">
        <div className="max-w-[925px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <ul className="flex">
                <li className="flex items-center text-center text-2xl leading-7">
                  <Image
                    src=""
                    alt=""
                    className="border-4 rounded-full mr-6"
                  />{' '}
                  {post.author}
                </li>
                <li className="ml-12 flex items-center text-center text-2xl leading-7">
                  {post.updated_at}
                </li>
              </ul>
            </div>
            <div className="col-span-5">
              <div className="flex items-center justify-end">
                <p className="ml-4 text-lg h-9 mb-0 mr-4">Share: </p>
                <a
                  href="#"
                  className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 hover:text-red-400 transition duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8.34 1C5.46 1 2.62 2.92 2.62 6.02c0 1.97 1.11 3.1 1.78 3.1c.28 0 .44-.77.44-.99c0-.26-.66-.82-.66-1.9c0-2.26 1.72-3.85 3.94-3.85c1.91 0 3.32 1.09 3.32 3.08c0 1.49-.6 4.28-2.53 4.28c-.7 0-1.3-.5-1.3-1.23c0-1.06.74-2.09.74-3.18c0-1.86-2.63-1.52-2.63.72c0 .47.06.99.27 1.42c-.39 1.67-1.18 4.15-1.18 5.87c0 .53.08 1.05.13 1.58c.1.11.05.1.19.04c1.41-1.94 1.36-2.31 2-4.85c.35.66 1.24 1.01 1.94 1.01c2.98 0 4.32-2.9 4.32-5.52c0-2.79-2.41-4.6-5.05-4.6"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 ml-3 hover:text-red-400 transition duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="block text-center text-2xl leading-10 text-gray-700 w-9 h-9 mb-0 ml-3 hover:text-red-400 transition duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mb-[32px] mt-[35px]">
            {post.content}
          </p>
          <p className="mb-[50px]">
            {post.slug}
          </p>
        </div>
      </div>
      <Image
        src="https://via.placeholder.com/1170x700"
        alt="Profile Picture"
        width={1170}
        height={700}
        className="rounded-3xl mb-12"
      />
      <div className="max-w-[925px] mx-auto">
        <p className="mt-[50px] mb-[32px]">
          {post.description}
        </p>
        <ul className="list-none">
          <li className="mb-[5px]">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
          <li className="mb-[5px]">
            • Massa odio sit velit sed purus quis dolor.
          </li>
          <li className="mb-[5px]">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="mb-[5px]">
            • Proin sed in nunc purus. Non duis eu pretium dictumst
          </li>
        </ul>
      </div>
      <div className="justify-center flex">
        <div className="flex w-[66.66%]">
          <blockquote className="px-8 py-12 relative text-center mt-10 mb-[50px] before:absolute before:top-0 before:transform before:translate-x-[-50%] before:bg-gray-300 before:w-56 before:h-0.5 before:content-[''] after:absolute after:bottom-0 after:transform after:left-1/2 after:translate-x-[-50%] after:bg-gray-300 after:w-56 after:h-0.5 after:content-['']">
            <p className="italic text-[21px] leading-7 mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              semper purus, at venenatis scelerisque nibh. Nisl sit convallis
              accumsan integer lorem. Nibh nunc in nulla quis pulvinar dictum.
              Eget nisi, praesent proin viverra.
            </p>
            <span className="text-[21px] leading-7 italic text-center text-[#a3a3a3]">
              BY Momen de tomas
            </span>
            <Image
              src="/quote1.jpg"
              alt="Icon"
              width={84}
              height={60}
              className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-[-1]"
            />
          </blockquote>
        </div>
      </div>
      <div className="justify-center">
        <div className="max-w-[925px] mx-auto">
          <p className="mb-[50px]">
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
            width={970}
            height={340}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="pb-0 pt-[115px]">
        <a
          href="#"
          className="block rounded-[10px] overflow-hidden relative z-[1]"
        >
          <Image
            src="https://via.placeholder.com/1170x200"
            alt="Image"
            width={1170}
            height={200}
            className="rounded-[10px] transition duration-500 w-[100%] hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}

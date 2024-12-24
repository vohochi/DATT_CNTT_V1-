import { fetchAllPost } from '@/_lib/post';
import { Post } from '@/types/PostBlog';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogMain = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchAllPost();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    getPosts();
  }, []);

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
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {posts.splice(0,3).map((post) => (
          <Link key={post.id} href={`/blogdetail/${post.id}`}>
            <div className="flex flex-col items-start w-[370px]">
              <div className="relative overflow-hidden">
                <Image
                  className="card-img-top rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={post.thumbnail ? "" : '/default-image.jpg'}
                  alt="Card cap"
                  width={370}
                  height={320}
                />
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="absolute w-full h-full bg-gradient-to-tr from-white to-transparent opacity-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out hover:opacity-100" />
                  <div className="absolute w-full h-full bg-gradient-to-br from-white to-transparent opacity-50 transform translate-x-1/2 translate-y-1/2 transition-opacity duration-300 ease-in-out hover:opacity-100" />
                </div>
              </div>
              <div className="card-body w-full">
                <div
                  style={{
                    // backgroundColor: post.bgColor,
                    backgroundColor: '#ff9c9c',
                  }}
                  className={`px-[31px] py-[7px] mt-6 mb-6 rounded-[50px] justify-start items-start inline-flex cursor-pointer bg-opacity-80 hover:bg-opacity-0 transition-all duration-200`}
                >
                  <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
                    {post.tags}
                  </div>
                </div>

                <div className="text-[#231942] text-[28px] mb-2 font-medium font-['Inter'] hover:text-[#de6565] overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full">
                  {post.title}
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="flex text-slate-500">BY: {post.author}</div>
                  <div className="flex justify-end">
                    <p className="text-slate-500">{post.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default BlogMain;

import { Image } from "@nextui-org/react";

const BlogMain = () => {
  const blogPosts = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/370x320',
      category: 'beauty',
      title: 'Facial Scrub is natural treatment for face.',
      author: 'NAM ĐẸP TRAI',
      date: 'March 2, 2004',
      bgColor: '#ff9c9c',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/370x320',
      category: 'beauty',
      title: 'Facial Scrub is natural treatment for face.',
      author: 'NAM ĐẸP TRAI',
      date: 'March 2, 2004',
      bgColor: '#a49cff',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/370x320',
      category: 'beauty',
      title: 'Facial Scrub is natural treatment for face.',
      author: 'NAM ĐẸP TRAI',
      date: 'March 2, 2004',
      bgColor: '#9cdbff',
    }
  ];

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
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col items-start w-[370px]">
            <div className="relative overflow-hidden">
              <Image
                className="card-img-top rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={post.imageSrc}
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
                  backgroundColor: post.bgColor,
                }}
                className={`px-[31px] py-[7px] mt-6 mb-6 rounded-[50px] justify-start items-start inline-flex cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
              >
                <div className="text-white text-[13px] font-medium font-['Inter'] uppercase leading-snug">
                  {post.category}
                </div>
              </div>

              <div className="text-[#231942] text-[28px] mb-2 font-medium font-['Inter']">
                {post.title}
              </div>
              <div className="grid grid-cols-2 items-center">
                <div className="flex text-slate-500">BY: {post.author}</div>
                <div className="flex justify-end">
                  <p className="text-slate-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogMain;

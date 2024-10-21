import Link from "next/link";

const BlogBanner: React.FC = () => {
  return (
    <div className="bg-[#fff9e6] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-black-300">/</span>
                  <span className="text-sm text-black-200">Blog</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Blog
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;

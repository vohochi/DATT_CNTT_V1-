import Link from "next/link";

const ShopBanner = () => {
  return (
    <div className="bg-[#fff9e6] py-8">
      <div className="container mx-auto px-4 w-[77%]">
        <div className="flex flex-col items-start">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm text-gray-500">Products</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            All Products
          </h1>
          <p className="text-sm text-gray-600">Showing 09 Results</p>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;

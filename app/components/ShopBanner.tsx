import Link from "next/link";

const ShopBanner = () => {
  return (
    <div className="bg-[#fff9e6] py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <nav className="flex mb-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-sm md:text-base text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm md:text-base text-gray-500">
                    Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            All Products
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Showing 09 Results
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;

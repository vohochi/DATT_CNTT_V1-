import { FaRegCircle, FaSearch } from "react-icons/fa";

const Sidebar = () => {
  // Array for Categories
  const categories = [
    { name: "Accesasories", count: 5 },
    { name: "Computer", count: 4 },
    { name: "Covid-19", count: 2 },
    { name: "Electronics", count: 6 },
    { name: "Frame Sunglasses", count: 12 },
    { name: "Furniture", count: 7 },
    { name: "Genuine Leather", count: 9 },
  ];

  // Array for Popular Tags
  const tags = [
    "Beauty",
    "MakeupArtist",
    "Makeup",
    "Hair",
    "Nails",
    "Hairstyle",
    "Skincare",
  ];

  return (

    <>
      <div className="bg-white p-6 rounded-lg">
        {/* Search widget */}
        <div className="mb-6 bg-[#f7f7f7c2]">
          <form action="#">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="search"
                placeholder="Search Here"
                className="w-full p-3 outline-none bg-[#f7f7f7c2]"
              />
              <button type="submit" className="p-4 border-l text-[#919191]">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>

        {/* Price Filter */}
        <div className="mb-6 bg-[#f7f7f7c2] p-4 rounded border">
          <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <FaRegCircle className="text-sm text-[#de6565]" /> Price Filter
          </h4>
          <div>
            <div className="mb-2" id="slider-range">
              <input
                type="range"
                className="w-full h-[2px] accent-[#457b9d] bg-gray-300 rounded-lg appearance-none cursor-pointer"
                id="customRange"
              />
            </div>
            <div className="flex justify-between">
              <span id="slider-range-value1" className="text-gray-600">$10</span>
              <span>—</span>
              <span id="slider-range-value2" className="text-gray-600">$500</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6 bg-[#f7f7f7c2] p-4 rounded border">
          <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <FaRegCircle className="text-sm text-[#de6565]" /> Categories
          </h4>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="product.html"
                  className="flex justify-between items-center text-gray-700 hover:text-red-500"
                >
                  <span>{category.name}</span>
                  <span className="text-gray-500">({category.count})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Tags */}
        <div className="mb-6 bg-[#f7f7f7c2] p-4 rounded border">
          <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <FaRegCircle className="text-sm text-[#de6565]" /> Popular Tags
          </h4>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={index}>
                <a
                  href="blog.html"
                  className="px-3 py-1 rounded-[5px] border border-[#d9d9d9] text-sm text-gray-700 hover:bg-red-500 hover:text-white transition"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

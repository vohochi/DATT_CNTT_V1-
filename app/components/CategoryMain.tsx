import { fetchAllCategory } from '@/_lib/category';
import Image from 'next/image';
const CategorySection = () => {
  const arr = [
    { id: 1, name: 'Hare care', img: '/10005.jpg', bg: '#dcffd2', flag: 'new' },
    { id: 2, name: 'Skin care', img: '/10006.jpg', bg: '#ffedb4' },
    { id: 3, name: 'Lip stick', img: '/10007.jpg', bg: '#dfe4ff' },
    {
      id: 4,
      name: 'Face skin',
      img: '/10008.jpg',
      bg: '#ffeacc',
      flag: 'sale',
    },
    { id: 5, name: 'Blusher', img: '/10009.jpg', bg: '#ffdae0' },
    { id: 6, name: 'Natural', img: '/10010.jpg', bg: '#fff3da' },
  ];
  const fetchCategory = async () => {
    const data = await fetchAllCategory();
    console.log(data);
  }


  return (
    <section className="my-[100px]">
      <div className="container mx-auto w-[80%]">
        <div className="flex flex-wrap">
          {arr.map((category) => (
            <div key={category.id} className="xl:w-1/6 md:w-1/3 w-1/2 p-3">
              <a
                href="#"
                style={{ backgroundColor: category.bg }}
                className="block product-category-item p-4 items-center rounded-lg shadow hover:shadow-lg transition duration-200 relative"
              >
                {category.flag && (
                  <span
                    className={`flag-new absolute -top-4 right-2 transform rotate-90 text-white text-xs font-medium rounded px-4 py-1 rounded-[50px] ${category.flag === 'sale' ? 'bg-[#835BF4]' : 'bg-[#FF6565]'
                      }`}
                  >
                    {category.flag}
                  </span>
                )}
                <div className="icon mx-auto mt-4">
                  <Image
                    className="transition-transform duration-300 mx-auto max-h-[80px]"
                    src={category.img}
                    width={80}
                    height={80}
                    alt={`Image-${category.name}`}
                  />
                </div>

                <hr className="w-10 mx-auto border-t border-[#ff6565] mt-8" />
                <h3 className="title text-center text-lg font-semibold mt-4">
                  {category.name}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

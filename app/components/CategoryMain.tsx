'use client';

import { fetchAllCategory } from '@/app/api/category.api';
import { Category } from '@/types/Category';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const CategorySection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await fetchAllCategory();
        const activeCategory = data.filter(
          (category: Category) => category.is_active
        );
        console.log('cate', activeCategory);
        setCategories(activeCategory);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    getCategories();
  }, []);

  return (
    <section className="my-[100px]">
      <div className="container mx-auto w-[80%]">
        <div className="flex flex-wrap">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="xl:w-1/6 md:w-1/3 w-1/2 p-3">
              <a
                href="#"
                style={{ backgroundColor: '' }}
                className="block product-category-item p-4 items-center rounded-lg shadow hover:shadow-lg transition duration-200 relative"
              >
                {/* {category.flag && (
                  <span
                    className={`flag-new absolute -top-4 right-2 transform rotate-90 text-white text-xs font-medium rounded px-4 py-1 rounded-[50px] ${category.flag === 'sale' ? 'bg-[#835BF4]' : 'bg-[#FF6565]'
                      }`}
                  >
                    {category.flag}
                  </span>
                )} */}
                <div className="icon mx-auto mt-4">
                  <Image
                    className="transition-transform duration-300 mx-auto max-h-[80px]"
                    // src={category.file ? `https://api-core.dsp.one/${category.file.path}` : '/default-image.jpg'}
                    src={category.file ? `` : '/default-image.jpg'}
                    width={80}
                    height={80}
                    alt={
                      category.file?.filename
                        ? `/${category.file.filename}`
                        : 'null'
                    }
                  />
                </div>

                <hr className="w-10 mx-auto border-t border-[#ff6565] mt-8" />
                <h3 className="title text-center text-lg font-semibold mt-4 overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full">
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

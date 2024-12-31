'use client';

import { useEffect, useState, useMemo } from 'react';
import { Image } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartThin } from '@fortawesome/free-solid-svg-icons';
import { Product } from '@/types/Product';
import { getProductById } from '@/_lib/product';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';

const Detail = () => {
  const { id } = useParams();

  const numericId = useMemo(() => {
    return Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
  }, [id]);

  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState('Specification');
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(numericId);
        setProduct(data);
        // console.log(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [numericId]);

  const addToCart = async () => {
    if (!product) return;

    const userId = Cookies.get('user_id');
    if (!userId) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/cart/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            allowed_secrets:
              'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
          },
          body: JSON.stringify({
            customer_id: parseInt(userId),
            address: 'Địa chỉ mặc định', // Thêm địa chỉ
            shipping_unit: 'Đơn vị vận chuyển mặc định', // Thêm đơn vị vận chuyển
            details: [
              {
                product_id: product.id,
                quantity: quantity,
                price: product.price,
                total_price_detail: quantity * product.price,
              },
            ],
          }),
        }
      );

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (response.ok) {
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (e) {
          console.error('Error parsing JSON:', e);
          throw new Error('Invalid JSON response');
        }
        alert('Sản phẩm đã được thêm vào giỏ hàng');
        console.log('Cart updated:', result);
      } else {
        throw new Error(
          `Failed to add to cart: ${response.status} ${responseText}`
        );
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      // alert(`Có lỗi xảy ra khi thêm vào giỏ hàng: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Header breadcrumb */}
      <section className="bg-[#FFF3DA] py-4 h-[166px] items-center">
        <div className="mx-auto px-4 flex justify-between items-center h-[150px] max-w-[1200px]">
          <div>
            <span className="text-gray-500">Home / Product Detail</span>
            <h1 className="text-3xl text-[#231942]">Product Detail</h1>
          </div>
          <span className="text-gray-500">Showing Single Product</span>
        </div>
      </section>

      {/* Detail section */}
      <section className="page-header-area pt-10 pb-9 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-5">
              <div
                className="relative bg-gray-300 mt-10 flex rounded-lg items-center justify-center"
                style={{ height: '693px', width: '100%' }}
              >
                <Image
                  src={product.name || 'https://via.placeholder.com/570x693'}
                  alt={product.name}
                  width={1169}
                  height={745}
                  className="object-cover"
                />
                <span className="absolute top-7 right-7 bg-[#ff6565] text-white font-normal text-base py-1 px-6 rounded-full">
                  new
                </span>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-1/2 p-5">
              <p className="mb-5 text-base md:text-lg">
                {product.category?.name || 'Premium collection'}
              </p>
              <h1 className="text-3xl md:text-6xl mb-4 text-[#231942]">
                {product.name}
              </h1>

              <div className="flex mb-5">
                <div className="stars mr-10">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`star ${
                        index < Math.floor(product.width)
                          ? 'text-yellow-500'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <hr />

              <div className="flex justify-between items-center border-2 border-[#e63946] rounded-full p-1 w-[150px] mt-5 md:mt-10 mb-5 md:mb-10">
                <button
                  className="border font-bold rounded-full px-3 py-1"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <span className="mx-3 font-bold">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  className="border font-bold rounded-full px-3 py-1"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <hr />

              <div className="mt-10 md:mt-14">
                <div>
                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="mr-2"
                    />
                    Shipping from USA, Shipping Fees $4.22
                  </label>
                </div>
              </div>

              <div className="flex mt-10 md:mt-14 justify-between items-center">
                <div className="text-3xl md:text-6xl text-[#231942]">
                  ${product.price}
                </div>

                <button className="bg-transparent border-2 border-[#ff6565] py-2 px-4 rounded-full flex items-center justify-center w-[50px] h-[50px]">
                  <FontAwesomeIcon
                    icon={faHeartThin}
                    className="text-[#231942]"
                  />
                </button>

                <button
                  className="bg-[#ff6565] text-white py-2 px-4 rounded-full w-[150px] md:w-[200px] h-[50px] hover:bg-[#364958] hover:text-white transition-colors duration-300"
                  onClick={addToCart}
                  disabled={isLoading}
                >
                  {isLoading ? 'Đang thêm...' : 'THÊM VÀO GIỎ HÀNG'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs for Specification, Review, and Leave a reply */}
      <section className="pt-10">
        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row">
          {/* Left Column - Tabs */}
          <div className="w-full lg:w-1/2 pr-5 lg:ml-5">
            <div className="flex mb-10 justify-between lg:justify-start">
              <button
                className={`text-xl md:text-2xl lg:text-3xl mr-6 lg:mr-14 underline ${
                  activeTab === 'Specification' ? 'text-[#231942]' : ''
                }`}
                style={{
                  color: activeTab === 'Specification' ? 'black' : '#898989',
                }}
                onClick={() => setActiveTab('Specification')}
              >
                Specification
              </button>
              <button
                className={`text-xl md:text-2xl lg:text-3xl underline ${
                  activeTab === 'Review' ? 'text-[#231942]' : ''
                }`}
                style={{ color: activeTab === 'Review' ? 'black' : '#898989' }}
                onClick={() => setActiveTab('Review')}
              >
                Review
              </button>
            </div>

            <div>
              {activeTab === 'Specification' && (
                <div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Weight: {product.width}
                  </div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Dimensions: {product.length}
                  </div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Materials: {product.thumbnail}
                  </div>
                </div>
              )}

              {activeTab === 'Review' && (
                <div>
                  {/* Render reviews here */}
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                        <span>-</span>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-sm md:text-lg text-[#231942]">
                          Tomas Doe
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Developer
                        </p>
                      </div>
                    </div>
                    <p className="mb-2 text-sm md:text-base text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed viverra amet.
                    </p>
                    <div className="flex items-center">
                      <span className="text-red-500">★★★★☆</span>
                      <span className="ml-4 text-xs md:text-sm text-gray-500">
                        5/5
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Leave a Reply */}
          <div className="w-full lg:w-1/2 pl-5 mt-10 lg:mt-0">
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl mb-4 underline text-[#231942]">
                Leave a Reply
              </h2>
              <form>
                <label className="block mb-2">
                  Enter your feedback:
                  <textarea className="w-full border rounded p-2" />
                </label>
                <label className="block mb-2">
                  Full Name:
                  <input type="text" className="w-full border rounded p-2" />
                </label>
                <label className="block mb-10">
                  Email Address:
                  <input type="email" className="w-full border rounded p-2" />
                </label>
              </form>
              <div>
                <div className="flex mb-5">
                  <p className="mr-5 text-sm md:text-base">
                    Provide Your Ratings
                  </p>
                  <span className="text-red-500">★★★★☆</span>
                </div>
                <label className="block mb-5">
                  <input
                    type="radio"
                    name="size"
                    value="Provide rating anonymously"
                    className="mr-2"
                    defaultChecked
                  />
                  Provide rating anonymously
                </label>
              </div>
              <button className="bg-[#ff6565] text-white py-2 px-4 rounded-full w-full md:w-[200px] h-[50px] hover:bg-[#364958] hover:text-white transition-colors duration-300">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;

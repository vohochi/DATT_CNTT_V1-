"use client";
import { Image } from "@nextui-org/react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartThin } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const rating = 4.5; // Giả sử đánh giá là 4.5 sao
  const [activeTab, setActiveTab] = useState("Specification");
  const [quantity, setQuantity] = useState<number>(1);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const relatedProducts = [
    {
      id: 1,
      name: "Related content DX22 àhdfhsdfhs",
      image: "/10013.jpg",
      price: 210,
      oldprice: 300,
      review: "150 reviews",
    },
    {
      id: 2,
      name: "Related content DX22",
      image: "/10013.jpg",
      price: 210,
      oldprice: 300,
      review: "150 reviews",
    },
    {
      id: 3,
      name: "Related content DX22",
      image: "/10013.jpg",
      price: 210,
      oldprice: 300,
      review: "150 reviews",
    },
  ];

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
                style={{ height: "693px", width: "100%" }} // Sử dụng 100% cho responsive
              >
                <Image
                  src="https://via.placeholder.com/570x693"
                  alt="Banner"
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
              <p className="mb-5 text-base md:text-lg">Premioum collection</p>
              <h1 className="text-3xl md:text-6xl mb-4 text-[#231942]">
                Offline Instant Age Rewind Eraser.
              </h1>

              <div className="flex mb-5">
                <div className="stars mr-10">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`star ${
                        index < Math.floor(rating)
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm md:text-gray-600 mb-2">150 reviews</p>
              </div>

              <hr />

              <div className="mt-5 md:mt-10 mb-5 md:mb-10">
                <div>
                  <label className="block mb-3">
                    <input
                      type="radio"
                      name="size"
                      value="15ml"
                      className="mr-2"
                      defaultChecked
                    />
                    15 ml bottle <strong>$250.00</strong>
                  </label>
                  <label className="block">
                    <input
                      type="radio"
                      name="size"
                      value="25ml"
                      className="mr-2"
                    />
                    25 ml bottle <strong>$350.00</strong>{" "}
                  </label>
                  <span className="text-sm text-gray-400 ml-6">extra 25%</span>
                </div>
              </div>

              <hr />

              <div className="flex justify-between items-center border-2 border-[#e63946] rounded-full p-1 w-[150px] mt-5 md:mt-10 mb-5 md:mb-10">
                <button
                  className="border font-bold rounded-full px-3 py-1 "
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="mx-3 font-bold">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button
                  className="border font-bold rounded-full px-3 py-1"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              <hr />

              <div className="mt-10 md:mt-14">
                <label className="block cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheck}
                    className="mr-2"
                  />
                  Shipping from USA, Shipping Fees $4.22
                </label>
              </div>

              <div className="flex mt-10 md:mt-14 justify-between items-center">
                <div className="text-3xl md:text-6xl text-[#231942]">
                  $254.22
                </div>

                <button className="bg-transparent border-2 border-[#ff6565] py-2 px-4 rounded-full flex items-center justify-center w-[50px] h-[50px]">
                  <FontAwesomeIcon
                    icon={faHeartThin}
                    className="text-[#231942]"
                  />
                </button>

                <button className="bg-[#ff6565] text-white py-2 px-4 rounded-full w-[150px] md:w-[200px] h-[50px] hover:bg-[#364958] hover:text-white transition-colors duration-300">
                  ADD TO CART
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
                  activeTab === "Specification" ? "text-[#231942]" : ""
                }`}
                style={{
                  color: activeTab === "Specification" ? "black" : "#898989",
                }}
                onClick={() => setActiveTab("Specification")}
              >
                Specification
              </button>
              <button
                className={`text-xl md:text-2xl lg:text-3xl underline ${
                  activeTab === "Review" ? "text-[#231942]" : ""
                }`}
                style={{ color: activeTab === "Review" ? "black" : "#898989" }}
                onClick={() => setActiveTab("Review")}
              >
                Review
              </button>
            </div>

            <div>
              {activeTab === "Specification" && (
                <div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Weight: 250 g
                  </div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Dimensions: 10 × 10 × 15 cm
                  </div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Materials: 60% cotton, 40% polyester
                  </div>
                  <div className="mb-4 text-sm md:text-base lg:text-lg text-gray-500">
                    Other Info: American heirloom jean shorts pug seitan
                    letterpress
                  </div>

                  <hr />

                  <div className="mt-6 text-sm md:text-base lg:text-lg text-gray-500">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eius velit corporis quo voluptate culpa soluta.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "Review" && (
                <div>
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
              <button className="bg-[#ff6565] text-white px-4 py-2 rounded-full mt-2 h-[50px] w-[200px] hover:bg-[#364958] transition-colors duration-300">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="mt-14">
        <div className="mx-auto max-w-[1170px] text-center">
          <div className="relative flex items-center justify-center h-64 md:h-96 lg:h-[400px]">
            <Image src="/10017.jpg" alt="Banner Image" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-14 mb-14">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#231942]">
            Related Products
          </h2>
          <div className="mb-10">
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="text-base sm:text-lg text-gray-500">
              ut aliquam, purus sit amet luctus venenatis
            </p>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg group relative overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative mx-auto w-full h-0 pb-[120%] transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded-t-lg w-full h-full object-cover w-[370] h-[450px]"
                  />
                  <span className="absolute top-5 right-5 bg-[#ff6565] text-white font-normal text-base py-1 px-6 rounded-full">
                    new
                  </span>
                </div>

                {/* Product Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-3 transition-transform duration-500 ease-in-out group-hover:translate-y-0 translate-y-full">
                  <div className="flex justify-between">
                    <span className="text-red-500]">★★★★☆</span>
                    <p className="text-gray-500 text-sm md:text-base">
                      {product.review}
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-[#231942] mt-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-2">
                    <p className="text-[#231942] text-xl sm:text-2xl mr-5">
                      ${product.price}
                    </p>
                    <p className="text-gray-500 line-through text-sm sm:text-lg">
                      ${product.oldprice}
                    </p>
                  </div>

                  {/* Action Buttons in a Row */}
                  <div className="flex items-center space-x-4 sm:space-x-6 mt-4 ">
                    {/* Add to Cart Button */}
                    <button className="border-2 border-[#e63946] text-[#231942] py-1 px-4 rounded-full w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-transparent text-sm sm:text-base ">
                      Add to Cart
                    </button>

                    {/* Zoom Image Button */}
                    <button className="border-2 border-[#e63946] text-[#231942] py-1 px-4 rounded-full flex items-center justify-center w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] text-lg sm:text-xl">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>

                    {/* Add to Wishlist Button */}
                    <button className="border-2 border-[#e63946] text-[#231942] py-1 px-4 rounded-full flex items-center justify-center w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]">
                      <FontAwesomeIcon icon={faHeartThin} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
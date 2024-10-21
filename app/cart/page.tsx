import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <main className="flex flex-col items-center mb-20">
      {/* Start Page Header Area Wrapper */}
      <nav aria-label="breadcrumb" className="py-4">
        <div className="container mx-auto">
          <ol className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-500">Cart</li>
          </ol>
        </div>
      </nav>
      {/* End Page Header Area Wrapper */}

      {/* Start Product Area Wrapper */}
      <section className="py-12 w-4/5">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <form action="#" method="post">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center border-b border-gray-300"></th>
                    <th className="py-3 px-5 text-center border-b border-gray-300"></th>
                    <th className="py-3 px-6 text-center border-b border-gray-300">
                      Product
                    </th>
                    <th className="py-3 px-6 text-center border-b border-gray-300">
                      Price
                    </th>
                    <th className="py-3 px-6 text-center border-b border-gray-300">
                      Quantity
                    </th>
                    <th className="py-3 px-6 text-center border-b border-gray-300">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {/** Sample Products */}
                  {[
                    {
                      id: 1,
                      name: "Condimentum posuere consectetur urna",
                      price: 115.0,
                      image: "https://via.placeholder.com/68x84",
                    },
                    {
                      id: 2,
                      name: "Kaoreet lobortis sagittis laoreet",
                      price: 95.0,
                      image: "https://via.placeholder.com/68x84",
                    },
                    {
                      id: 3,
                      name: "Nostrum exercitationem itae ipsum",
                      price: 79.0,
                      image: "https://via.placeholder.com/68x84",
                    },
                  ].map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap text-center items-center border">
                        <button
                          className="text-[#323232] text-[40px] font-semibold text-center"
                          type="button"
                        >
                          ×
                        </button>
                      </td>
                      <td className="py-3 text-center px-6 border">
                        <Link href="#">
                          <Image
                            width={100}
                            height={84}
                            src={product.image}
                            alt={product.name}
                            className="justify-center ml-8 w-16 h-20"
                          />
                        </Link>
                      </td>
                      <td className="py-3 px-6 text-[#323232] text-center font-semibold text-[16px] border">
                        <Link href="#" className=" text-center hover:underline">
                          {product.name}
                        </Link>
                      </td>
                      <td className="py-3 px-6 text-[#323232] text-center font-semibold text-[16px] border">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-3 px-6 text-left border-[#eee]">
                        <div className="flex justify-between items-center border-2 border-[#eee] rounded-full h-[50px] items-center">
                          <button
                            type="button"
                            className="dec qty-btn font-bold rounded-full text-gray-700 px-2 ml-3 text-[30px]"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="quantity w-12 font-bold rounded-full text-gray-700 text-[20px] text-center mx-2"
                            value="1"
                            readOnly
                          />
                          <button
                            type="button"
                            className="inc qty-btn font-bold rounded-full text-gray-700 px-2 mr-3 text-[30px]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-[#323232] text-center font-semibold text-[16px] border">
                        ${product.price.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={6} className="py-3 px-6 text-right">
                      <button
                        type="submit"
                        className="border-2 border-[#d9d9d9] hover:bg-gray-200 transition-colors duration-300 text-[#545454] h-[60px] w-[180px] py-2 px-4 rounded font-semibold text-[20px] disabled:opacity-50"
                        disabled
                      >
                        Update Cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          <div className="flex flex-wrap -mx-4 mt-8">
            {/* Coupon Section */}
            <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
              <div className="bg-white p-6 rounded shadow">
                <h4 className="text-lg font-semibold mb-4">COUPON</h4>
                <p className="text-gray-600 mb-4">
                  Enter your coupon code if you have one.
                </p>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  placeholder="Coupon code"
                />
                <button
                  type="submit"
                  className="border-2 border-[#e5e5e5] h-[50px] w-[200px] py-2 px-4 rounded font-semibold text-[20px] transition-colors duration-300 hover:bg-[#ff6565] hover:text-white"
                  disabled
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-[#f9f9f9] p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-t">
                      <th className="py-3 text-left">SUBTOTAL</th>
                      <td className="py-3 text-right text-2xl">$499.00</td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">SHIPPING</th>
                      <td className="py-3 text-right">
                        <ul>
                          <li className="mb-2">
                            <input
                              type="radio"
                              name="shipping"
                              id="radio1"
                              checked
                              className="mr-2"
                            />
                            <label htmlFor="radio1" className="flex-1">
                              Flat rate: <span>$3.00</span>
                            </label>
                          </li>
                          <li className="mb-2">
                            <input
                              type="radio"
                              name="shipping"
                              id="radio2"
                              className="mr-2"
                            />
                            <label htmlFor="radio2" className="flex-1">
                              Free shipping
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              id="radio3"
                              className="mr-2"
                            />
                            <label htmlFor="radio3" className="flex-1">
                              Local pickup
                            </label>
                          </li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                          Shipping to <strong>USA</strong>.
                        </p>
                        <Link href="#" className="hover:underline">
                          Change address
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">TOTAL</th>
                      <td className="py-3 text-right text-3xl">$504.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-right mt-4 border-t py-4">
                  <button
                    type="submit"
                    className="justify-end text-white bg-[#ff6565] border-1 border-[#ff6565] h-[60px] w-[250px] py-2 px-4 rounded font-semibold text-[20px] hover:bg-black transition-colors duration-300"
                    disabled
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Product Area Wrapper */}
    </main>
  );
}

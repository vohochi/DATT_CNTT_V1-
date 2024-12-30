'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CartResponse, CartDetail } from '@/types/Cart';
import { getCart, updateCartDetail, removeFromCart } from '@/_lib/cart';
import Cookies from 'js-cookie';

export default function Cart() {
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cart data when component mounts
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartId = Cookies.get('cart_id');
        if (!cartId) {
          setError('No cart found');
          setLoading(false);
          return;
        }
        const cartData = await getCart(parseInt(cartId));
        setCart(cartData);
      } catch (err) {
        setError('Failed to load cart');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  // Handle quantity updates
  const handleQuantityChange = async (
    cartId: number,
    productId: number,
    quantity: number,
    currentPrice: number
  ) => {
    try {
      const response = await updateCartDetail(cartId, productId, {
        quantity,
        price: currentPrice,
      });
      setCart(response);
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  // Handle product removal
  const handleRemoveProduct = async (cartId: number, productId: number) => {
    try {
      const response = await removeFromCart(cartId, productId);
      setCart(response);
    } catch (err) {
      console.error('Failed to remove product:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cart) return <div>No items in cart</div>;

  return (
    <main className="flex flex-col items-center mb-20">
      {/* <!--== Start Page Header Area Wrapper ==--> */}
      <nav aria-label="breadcrumb" className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <ol className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li className="text-gray-500">Cart</li>
          </ol>
        </div>
      </nav>
      {/* <!--== End Page Header Area Wrapper ==--> */}

      {/* <!--== Start Product Area Wrapper ==--> */}
      <section className="py-12 w-4/5">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <form action="#" method="post">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full  text-gray-600 uppercase text-sm leading-normal border border-zinc-300 dark:border-zinc-500 border-r-4">
                    <th className="py-3 px-6 text-left "></th>
                    <th className="py-3 px-5 text-left"></th>
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-left">Quantity</th>
                    <th className="py-3 px-6 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {cart.cart_details.map((item: CartDetail) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap border">
                        <button
                          onClick={() => handleRemoveProduct(cart.data.id, item.product_id)}
                          className="text-red-500 text-xl"
                        >
                          ×
                        </button>
                      </td>
                      <td className="py-3 px-6 text-left border">
                        <Image
                          src="https://via.placeholder.com/68x84"
                          alt="Product Image"
                          width={68}
                          height={84}
                          className="w-16 h-20"
                        />
                      </td>
                      <td className="py-3 px-6 text-left border">
                        <span className="text-blue-600">Product Name</span>
                      </td>
                      <td className="py-3 px-6 text-left border">${item.price}</td>
                      <td className="py-3 px-6 text-left border">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => 
                              handleQuantityChange(
                                cart.data.id,
                                item.product_id,
                                item.quantity - 1,
                                item.price
                              )
                            }
                            className="dec qty-btn bg-gray-300 text-gray-700 px-2"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="quantity w-12 text-center mx-2 border border-gray-300"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => 
                              handleQuantityChange(
                                cart.data.id,
                                item.product_id,
                                item.quantity + 1,
                                item.price
                              )
                            }
                            className="inc qty-btn bg-gray-300 text-gray-700 px-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left border">
                        ${item.total_price_detail}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={6} className="py-3 px-6 text-right">
                      <button
                        type="submit"
                        className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
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
            <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
              <div className="bg-white p-6 rounded shadow">
                <h4 className="text-lg font-semibold mb-4">Coupon</h4>
                <p className="text-gray-600 mb-4">
                  Enter your coupon code if you have one.
                </p>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  placeholder="Coupon code"
                />
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-gray-100 p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-t">
                      <th className="py-3 text-left">Subtotal</th>
                      <td className="py-3 text-right text-2xl">
                        ${cart.data.total_price}
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">Shipping</th>
                      <td className="py-3 text-right">
                        <ul>
                          <li className=" mb-2">
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
                          <li className=" mb-2">
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
                          <li className="">
                            <input
                              type="radio"
                              name="shipping"
                              id="radio3"
                              className="ml   -2"
                            />
                            <label htmlFor="radio3" className="flex-1">
                              Local pickup
                            </label>
                          </li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                          Shipping to <strong>USA</strong>.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">
                          {' '}
                          Change address
                        </a>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">Total</th>
                      <td className="py-3 text-right text-3xl">
                        ${cart.data.total_price}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-right mt-4 border-t py-4">
                  <a
                    href="/checkout"
                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== End Product Area Wrapper ==--> */}
    </main>
  );
}

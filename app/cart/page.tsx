'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Type definitions
type CartItem = {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
  total_price_detail: number;
  address: string;
  shipping_unit: string;
};

type Cart = CartItem[];

const ShoppingCart = () => {
  const [cart, setCart] = useState<Cart>([]);
  const [loading, setLoading] = useState(true);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, loading]);

  // Calculate total price
  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((sum, item) => sum + item.total_price_detail, 0);
  };

  // Handle quantity updates
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map(item =>
      item.product_id === productId
        ? {
          ...item,
          quantity: newQuantity,
          total_price_detail: item.price * newQuantity
        }
        : item
    );

    setCart(updatedCart);
  };

  // Handle product removal
  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cart.filter(item => item.product_id !== productId);
    setCart(updatedCart);
  };

  if (loading) return <div>Loading...</div>;
  if (!cart || cart.length === 0) return <div>No items in cart</div>;

  const cartTotal = calculateTotal(cart);

  return (
    <main className="flex flex-col items-center mb-20">
      <nav aria-label="breadcrumb" className="bg-[#FFFAEF] w-full py-10 my-2">
        <div className="container mx-auto">
          <ol className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-[#101010] hover:text-[red]">
                Home {' '}
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-700">Cart</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 w-4/5">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <form action="#" method="post">
              <table className="min-w-full bg-white text-center">
                <thead>
                  <tr className="w-full text-gray-600 uppercase text-sm leading-normal border border-zinc-300 dark:border-zinc-500 border-r-4">
                    <th className="py-3 px-6 font-bold text-left border-r border-zinc-300 dark:border-zinc-500"></th>
                    <th className="py-3 px-5 font-bold text-left border-r border-zinc-300 dark:border-zinc-500"></th>
                    <th className="py-3 px-6 font-bold text-left border-r border-zinc-300 dark:border-zinc-500 text-center align-middle">Product</th>
                    <th className="py-3 px-6 font-bold text-left border-r border-zinc-300 dark:border-zinc-500 text-center align-middle">Price</th>
                    <th className="py-3 px-6 font-bold text-left border-r border-zinc-300 dark:border-zinc-500 text-center align-middle">Quantity</th>
                    <th className="py-3 px-6 font-bold text-left text-center align-middle">Total</th>
                  </tr>

                </thead>
                <tbody className="text-gray-600 text-sm font-light align-items-center">
                  {cart.map((item) => (
                    <tr key={item.product_id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap border text-center align-middle">
                        <button
                          onClick={() => handleRemoveProduct(item.product_id)}
                          className="text-red-500 text-xl font-bold"
                        >
                          ×
                        </button>
                      </td>
                      <td className="py-3 px-6 text-left border text-center align-middle">
                        <div className="flex justify-center items-center">
                          <Image
                            src="https://via.placeholder.com/68x84"
                            alt="Product Image"
                            width={68}
                            height={84}
                            className="w-16 h-20"
                          />
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left border text-center align-middle">
                        <span className=" font-bold text-[15px]">{item.name}</span>
                      </td>
                      <td className="py-3 px-6 text-left border text-center align-middle font-bold text-[15px]">${item.price}</td>
                      <td className="py-3 px-6 text-left border text-center align-middle">
                        <div className="flex justify-center items-center text-center align-middle flex justify-between border-2 shadow rounded-full p-1 w-[150px] mt-5 md:mt-10 mb-5 md:mb-10 mx-auto">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.product_id, item.quantity - 1)}
                            className="font-bold px-3 py-1 text-[20px]"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="quantity w-12 text-center mx-2 border-t-0 border-b-0 border-l border-r border-gray-300 bg-tranparent tfont-bold text-[15px]"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)}
                            className="font-bold px-3 py-1 text-[20px]"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left border text-center align-middle font-bold text-[15px]">
                        ${item.total_price_detail.toFixed(2)}
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
              <div className="bg-white">
                <h4 className="text-lg font-semibold mb-4 rounded border-b p-4">Coupon</h4>
                <p className="text-gray-600 mb-4 p-2">
                  Enter your coupon code if you have one.
                </p>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-4 p-4"
                  placeholder="Coupon code"
                />
                <button className="bg-transparent py-4 px-8 rounded border ">
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
                        ${cartTotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">Shipping</th>
                      <td className="py-3 text-right">
                        <ul>
                          <li className="mb-2">
                            <input
                              type="radio"
                              name="shipping"
                              id="radio1"
                              defaultChecked
                              className="mr-2"
                            />
                            <label htmlFor="radio1">
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
                            <label htmlFor="radio2">
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
                            <label htmlFor="radio3">
                              Local pickup
                            </label>
                          </li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                          Shipping to <strong>USA</strong>.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">
                          Change address
                        </a>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th className="py-3 text-left">Total</th>
                      <td className="py-3 text-right text-3xl">
                        ${(cartTotal + 3).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-right mt-4 border-t py-4">
                  <a
                    href="/checkout"
                    className="bg-[#FF6565] hover:bg-[#343A40] text-white py-4 px-8 rounded"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;
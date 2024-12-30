'use client';
import { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { CartResponse } from '@/types/Cart';
import { getCart, removeFromCart } from '@/_lib/cart';
import Cookies from 'js-cookie';

interface CartSideBarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSideBarModal({
  isOpen,
  onClose,
}: CartSideBarModalProps) {
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartId = Cookies.get('cart_id');
        if (cartId) {
          const cartData = await getCart(parseInt(cartId));
          setCart(cartData);
        }
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchCart();
    }
  }, [isOpen]);

  const handleRemoveItem = async (productId: number) => {
    try {
      if (cart) {
        const response = await removeFromCart(cart.data.id, productId);
        setCart(response);
      }
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-screen overflow-y-auto overflow-x-hidden sm:w-[400px] lg:max-w-[400px] md:max-w-[90%] bg-white z-40 ease-in-out transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full hidden'
        }`}
      >
        <div>
          <h2
            className="flex items-center justify-between text-xl font-semibold px-8 py-4 bg-[#ff6565] hover:bg-gray-800 text-white cursor-pointer"
            onClick={onClose}
          >
            Shopping Cart
            <MdOutlineArrowBackIos className="cursor-pointer" />
          </h2>

          <div className="p-10 text-black bg-white overflow-y-auto h-full">
            {loading ? (
              <div>Loading...</div>
            ) : !cart || cart.cart_details.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              <>
                <ul className="aside-cart-product-list">
                  {cart.cart_details.map((item) => (
                    <li key={item.id} className="aside-product-list-item flex justify-between items-start mb-6">
                      <div className="flex items-start">
                        <Link
                          href={`/product/${item.product_id}`}
                          className="border border-gray-300 p-1 rounded-[4px]"
                        >
                          <Image
                            src="https://via.placeholder.com/68x84"
                            width={68}
                            height={84}
                            alt="Product"
                            className="inline-block rounded-[4px]"
                          />
                        </Link>
                        <div className="flex flex-col ml-4">
                          <Link href={`/product/${item.product_id}`}>
                            <span className="product-title hover:text-[#ff6565] pb-2">
                              Product Name {/* Replace with actual product name */}
                            </span>
                          </Link>
                          <span className="product-price text-gray-600">
                            {item.quantity} × ${item.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product_id)}
                        className="text-[21px] remove hover:text-red-800 transition duration-200 ease-in-out"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>

                <p className="cart-total mt-4 flex justify-between text-lg">
                  <span>Subtotal:</span>
                  <span className="amount font-semibold">
                    ${cart.data.total_price}
                  </span>
                </p>

                <Link
                  className="btn-total block bg-gray-800 text-white text-center py-4 mt-4 hover:bg-[#ff6565]"
                  href="/cart"
                  onClick={onClose}
                >
                  View cart
                </Link>
                <Link
                  className="btn-total block bg-gray-800 text-white text-center py-4 mt-4 hover:bg-[#ff6565]"
                  href="/checkout"
                  onClick={onClose}
                >
                  Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

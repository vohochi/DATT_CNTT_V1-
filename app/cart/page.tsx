"use client";

import React, { useState } from "react";

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    // Hàm xử lý tăng số lượng
    const increaseQuantity = () => {
        event.preventDefault();
        setQuantity(prevQuantity => prevQuantity + 1); // Tăng số lượng
    };
     // Kiểm tra để số lượng không giảm dưới 1
    const decreaseQuantity = () => {
        event.preventDefault();
        if (quantity > 1) 
            setQuantity(prevQuantity => prevQuantity - 1);
        
    };

    const handleInputChange = (event) => {
        const value = Math.max(1, Number(event.target.value)); // Đảm bảo số lượng không nhỏ hơn 1
        setQuantity(value);
    };

    return (
        <main className="flex flex-col mb-20">
            {/* <!--== Start Page Header Area Wrapper ==--> */}
            <nav aria-label="breadcrumb" className="bg-yellow-50 py-4">
                <div className="container mx-auto">
                    <ol className="flex justify-center space-x-4">
                        <li><a href="#" className="hover:text-red-600">Home</a></li>
                        <li>/</li>
                        <li className="text-gray-500">Cart</li>
                    </ol>
                </div>
            </nav>
            {/* <!--== End Page Header Area Wrapper ==--> */}

            {/* <!--== Start Product Area Wrapper ==--> */}
            <section className="py-20 w-full md:w-4/5 items-center ml-36">
                <div className="container h-96 mx-auto">
                    <div className="overflow-x-auto">
                        <form action="#" method="post">
                            <table className="min-w-full text-center bg-white">
                                <thead>
                                    <tr className="w-full text-gray-600 uppercase text-sm leading-normal border-2 border-zinc-300 dark:border-zinc-500 border-r-4">
                                        <th className="py-3 px-5 border-2"></th>
                                        <th className="py-3 px-5 border-2"></th>
                                        <th className="py-3 px-6 border-2">Product</th>
                                        <th className="py-3 px-6 border-2">Price</th>
                                        <th className="py-3 px-6 border-2">Quantity</th>
                                        <th className="py-3 px-6 border-2">Total</th>
                                    </tr>
                                </thead>
                                <tbody className=" w-text-sm font-semibold border-2">
                                    <tr className=" text-gray-600 border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 w-5 text-left whitespace-nowrap border">
                                            <a href="#" className="text-red-500 ">×</a>
                                        </td>
                                        <td className="py-3 px-6 border-2">
                                            <a href="#">
                                                <img src="/assets/images/shop/cart1.webp" alt="Product Image" className="w-16 h-20" />
                                            </a>
                                        </td>
                                        <td className="py-3 px-6 border">
                                            <a href="#" className="hover:text-red-600">Condimentum posuere consectetur urna</a>
                                        </td>
                                        <td className="py-3 px-6 border text-gray-950">$115.00</td>
                                        <td className="py-3 px-6 border">
                                            <div className="items-center">
                                                <button onClick={decreaseQuantity} className="dec qty-btn bg-gray-300 text-gray-700 px-2">-</button>
                                                <input type="text" className="quantity w-12 text-center mx-2 border border-gray-300" onChange={handleInputChange} value={quantity} readOnly />
                                                <button onClick={increaseQuantity} className="inc qty-btn bg-gray-300 text-gray-700 px-2">+</button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 border">$115.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-100 text-gray-950">
                                        <td className="py-3 px-6 border whitespace-nowrap">
                                            <a href="#" className="text-red-500 text-xl">×</a>
                                        </td>
                                        <td className="py-3 px-6 border">
                                            <a href="#">
                                                <img src="https://via.placeholder.com/68x84" alt="Product Image" className="w-16 h-20" />
                                            </a>
                                        </td>
                                        <td className="py-3 px-6 border">
                                            <a href="#" className="hover:text-red-600">Kaoreet lobortis sagittis laoreet</a>
                                        </td>
                                        <td className="py-3 px-6 border">$95.00</td>
                                        <td className="py-3 px-6 border">
                                            <div className="items-center">
                                                <button onClick={decreaseQuantity} className="dec qty-btn bg-gray-300 text-gray-700 px-2">-</button>
                                                <input type="text" className="quantity w-12 text-center mx-2 border border-gray-300" value="1" readOnly />
                                                <button onClick={increaseQuantity} className="inc qty-btn bg-gray-300 text-gray-700 px-2">+</button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 border">$95.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 border whitespace-nowrap">
                                            <a href="#" className="text-red-500">×</a>
                                        </td>
                                        <td className="py-3 px-6 border">
                                            <a href="#">
                                                <img src="https://via.placeholder.com/68x84" alt="Product Image" className="w-16 h-20" />
                                            </a>
                                        </td>
                                        <td className="py-3 px-6 border">
                                            <a href="#" className=" hover:text-red-600 ">Nostrum exercitationem itae ipsum</a>
                                        </td>
                                        <td className="py-3 px-6 border">$79.00</td>
                                        <td className="py-3 px-6 border">
                                            <div className="items-center">
                                                <button onClick={decreaseQuantity} className="dec qty-btn bg-gray-300 text-gray-700 px-2">-</button>
                                                <input type="text" className="quantity w-12 text-center mx-2 border border-gray-300" value="1" readOnly />
                                                <button onClick={increaseQuantity} className="inc qty-btn bg-gray-300 text-gray-700 px-2">+</button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 border">$79.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="6" className="py-3 px-6 text-right">
                                            <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50" disabled>Update Cart</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className="flex flex-wrap -mx-4 mt-8">
                        <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                            <div className="bg-white p-6 rounded">
                                <h4 className="text-lg font-semibold mb-4">Coupon</h4>
                                <p className="text-gray-600 mb-4">Enter your coupon code if you have one.</p>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Coupon code" />
                                <button className="bg-white text-black py-2 px-4 rounded hover:bg-red-600 hover:text-white shadow">Apply Coupon</button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-gray-100 p-6 rounded shadow">
                                <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                                <table className="w-full">
                                    <tbody>
                                        <tr className="border-t">
                                            <th className="py-3 text-left">Subtotal</th>
                                            <td className="py-3 text-right text-2xl">$499.00</td>
                                        </tr>
                                        <tr className="border-t">
                                            <th className="py-3 pb-32 text-left">Shipping</th>
                                            <td className="py-3 text-right">
                                                <ul>
                                                    <li className=" mb-2">
                                                        <input type="radio" id="bank" name="payment" className=" mr-2 text-blue-600 border-gray-300 rounded" />
                                                        <label htmlFor="radio1" className="flex-1">Flat rate: <span>$3.00</span></label>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <input type="radio" id="bank" name="payment" className=" mr-2 text-blue-600 border-gray-300 rounded" />
                                                        <label htmlFor="radio2" className="flex-1">Free shipping</label>
                                                    </li>
                                                    <li className="">
                                                        <input type="radio" id="bank" name="payment" className=" mr-2 text-blue-600 border-gray-300 rounded" />
                                                        <label htmlFor="radio3" className="flex-1">Local pickup</label>
                                                    </li>
                                                </ul>
                                                <p className="text-gray-600 mt-2">Shipping to <strong>USA</strong>.</p>
                                                <a href="#" className="text-blue-500 hover:underline"> Change address</a>
                                            </td>
                                        </tr>
                                        <tr className="border-t">
                                            <th className="py-3 text-left">Total</th>
                                            <td className="py-3 text-right text-3xl">$504.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-right mt-4 border-t py-4">
                                    <a href="#" className="bg-red-600 hover:bg-black text-white py-2 px-4 rounded ">Proceed to Checkout</a>
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
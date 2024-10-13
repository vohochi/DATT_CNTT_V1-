import React from "react";

export default function Widget() {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-primary dark:text-primary-foreground">Giỏ hàng</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            className="border border-zinc-300 dark:border-zinc-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-zinc-200 dark:bg-zinc-800"
          />
          <button className="bg-primary text-white p-2 rounded ml-2 hover:bg-primary/80 dark:hover:bg-primary/70">
            Tìm
          </button>
          <div className="ml-4">
            <img
              src="https://openui.fly.dev/openui/user.svg?text=👤"
              alt="User Icon"
              className="w-8 h-8"
            />
          </div>
        </div>
      </header>

      <table className="min-w-full border border-zinc-300 dark:border-zinc-500 mb-6">
        <thead>
          <tr className="bg-zinc-100 dark:bg-zinc-800">
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Tên sản phẩm</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Hình ảnh</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Kích thước</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Màu sắc</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Giá</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Số lượng</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Thành tiền</th>
            <th className="border border-zinc-300 dark:border-zinc-500 p-3 text-left">Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">Áo khoác K1</td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">
              <img src="https://placehold.co/100x100" alt="Áo khoác K1" className="w-full h-auto rounded" />
            </td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">Size L</td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">Màu xanh</td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">550.000đ</td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">
              <div className="flex items-center">
                <button className="bg-secondary text-secondary-foreground p-1 rounded">-</button>
                <span className="mx-2">1</span>
                <button className="bg-secondary text-secondary-foreground p-1 rounded">+</button>
              </div>
            </td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">550.000đ</td>
            <td className="border border-zinc-300 dark:border-zinc-500 p-3">
              <button className="bg-destructive text-destructive-foreground p-1 rounded">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">COUPON</h2>
          <p className="text-muted dark:text-zinc-300">Enter your coupon code if you have one.</p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-zinc-300 dark:border-zinc-500 rounded p-2 mr-2"
            />
            <button className="bg-secondary text-secondary-foreground p-2 rounded hover:bg-secondary/80 dark:hover:bg-secondary/70">
              Áp dụng mã
            </button>
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">CART TOTALS</h2>
          <div className="flex justify-between mt-2">
            <span>Subtotal</span>
            <span className="font-bold">$499.00</span>
          </div>

          <div className="mt-2">
            <span>Shipping</span>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <label className="mr-2">Flat rate:</label>
                <span>$3.00</span>
                <input type="radio" name="shipping" value="flat-rate" className="ml-2" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <label>Free shipping</label>
                <input type="radio" name="shipping" value="free-shipping" className="ml-2" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <label>Local pickup</label>
                <input type="radio" name="shipping" value="local-pickup" className="ml-2" />
              </div>
            </div>
            <p className="mt-2">Shipping to <strong>USA</strong>.</p>
            <button className="text-primary underline hover:text-primary/80 mt-2">Change address</button>
          </div>

          <div className="flex justify-between mt-2 border-t border-zinc-300 dark:border-zinc-500 pt-2">
            <span className="font-semibold">Total</span>
            <span className="font-bold">$504.00</span>
          </div>

          <button className="bg-primary text-white p-2 rounded mt-4 hover:bg-primary/80 dark:hover:bg-primary/70 w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

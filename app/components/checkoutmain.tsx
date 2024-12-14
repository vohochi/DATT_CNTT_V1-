'use client';

import { useState } from 'react';
import { createOrder } from '@/_lib/order';
import { Order } from '@/types/Order';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Checkout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    district: '',
    postcode: '',
    phone: '',
    email: '',
    orderNotes: '',
    shippingDifferent: false,
    paymentMethod: '',
    agreeToTerms: false,
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle order submission
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      setError('Please agree to terms and conditions');
      return;
    }

    if (!formData.paymentMethod) {
      setError('Please select a payment method');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userId = Cookies.get('user_id');
      if (!userId) {
        throw new Error('Please login to place order');
      }

      const orderData: Order = {
        code: `ORD${Date.now()}`,
        user_id: parseInt(userId),
        name: `${formData.firstName} ${formData.lastName}`,
        phone_number: formData.phone,
        shipping_address: `${formData.streetAddress}, ${formData.townCity}, ${formData.country}`,
        payment_method: getPaymentMethodId(formData.paymentMethod),
        shipping_unit: 1,
        shipping_costs: 2.0,
        total_order: 89.99, // Từ giỏ hàng
        total: 91.99, // total_order + shipping_costs
        status: 'pending',
      } as Order;

      const response = await createOrder(orderData);

      if (response.status === 'success') {
        router.push('/order-success');
      } else {
        setError(response.message || 'Failed to create order');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create order');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="bg-yellow-50 py-4">
        <div className="container">
          <ol className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-blue-600  hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-500">checkout</li>
          </ol>
        </div>
      </nav>
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto bg-white p-8 shadow-md">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="bg-gray-100 p-4 text-gray-700 text-sm flex border-t-2 border-blue-500 ">
              <i className="fas fa-tag mr-2"></i>
              <div className="mr-2">Have a Coupon?</div>
              <a href="#/" className="text-blue-500">
                {' '}
                Click here to enter your code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* //billing// */}

            <div>
              <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
              <form className="space-y-4" onSubmit={handleSubmitOrder}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Bangladesh</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Armenia</option>
                    <option>India</option>
                    <option>Pakistan </option>
                    <option>England</option>
                    <option>London</option>
                    <option>London</option>
                    <option>China</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Street address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    District <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Afghanistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Postcode / ZIP (optional)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Ship to a different address?
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Order notes (optional)
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  {[
                    { id: 'bank', label: 'DIRECT BANK TRANSFER' },
                    { id: 'check', label: 'CHECK PAYMENTS' },
                    { id: 'cod', label: 'CASH ON DELIVERY' },
                    { id: 'paypal', label: 'PAYPAL' },
                  ].map((method) => (
                    <div key={method.id}>
                      <input
                        type="radio"
                        id={method.id}
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={method.id}
                        className="ml-2 text-sm text-gray-700 font-medium"
                      >
                        {method.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    I have read and agree to the website terms and conditions{' '}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-md text-sm font-medium disabled:bg-gray-400"
                >
                  {isLoading ? 'Processing...' : 'PLACE ORDER'}
                </button>
              </form>
            </div>

            {/* // order // */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
              <div className="border border-gray-300 p-4 rounded-md">
                <table className="w-full mb-4">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-medium text-gray-700">
                        Product
                      </th>
                      <th className="text-right text-sm font-medium text-gray-700">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-sm text-gray-700">Satin gown × 1</td>
                      <td className="text-right text-sm text-gray-700">
                        £69.99
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm text-gray-700">
                        Printed cotton t-shirt × 1
                      </td>
                      <td className="text-right text-sm text-gray-700">
                        £20.00
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm text-gray-700 font-medium">
                        Subtotal
                      </td>
                      <td className="text-right text-sm text-gray-700">
                        £89.99
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm text-gray-700 font-medium">
                        Shipping
                      </td>
                      <td className="text-right text-sm text-gray-700">
                        Flat rate: £2.00
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm text-gray-700 font-medium">
                        Total
                      </td>
                      <td className="text-right text-sm text-gray-700">
                        £91.99
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="space-y-4">
                  <div>
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="bank"
                      className="ml-2 text-sm text-gray-700 font-medium"
                    >
                      DIRECT BANK TRANSFER
                    </label>
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="check"
                      name="payment"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="check"
                      className="ml-2 text-sm text-gray-700 font-medium"
                    >
                      CHECK PAYMENTS
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="cod"
                      className="ml-2 text-sm text-gray-700 font-medium"
                    >
                      CASH ON DELIVERY
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-2 text-sm text-gray-700 font-medium"
                    >
                      PAYPAL
                    </label>
                    <p className="text-sm text-gray-500 mt-1">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    I have read and agree to the website terms and conditions{' '}
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                {/* đặt hàng */}
                <button
                  type="submit"
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-md text-sm font-medium"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getPaymentMethodId(method: string): number {
  switch (method) {
    case 'bank':
      return 1;
    case 'check':
      return 2;
    case 'cod':
      return 3;
    case 'paypal':
      return 4;
    default:
      return 1;
  }
}

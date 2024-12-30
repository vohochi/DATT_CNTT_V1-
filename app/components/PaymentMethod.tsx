'use client';

import { useState, useEffect } from 'react';
import { getAllPaymentMethods } from '@/_lib/payment';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        setLoading(true);
        await getAllPaymentMethods();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load payment methods');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  const paymentMethods = [
    {
      id: 'bank',
      label: 'DIRECT BANK TRANSFER',
      description:
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
    },
    {
      id: 'check',
      label: 'CHECK PAYMENTS',
      description: 'Please send a check to our store address.',
    },
    {
      id: 'cod',
      label: 'CASH ON DELIVERY',
      description: 'Pay with cash upon delivery.',
    },
    {
      id: 'paypal',
      label: 'PAYPAL',
      description:
        'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.',
    },
  ];

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  if (loading) return <div>Loading payment methods...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-6">Payment Method</h3>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? 'border-blue-500'
                : 'hover:border-gray-400'
            }`}
            onClick={() => handleMethodChange(method.id)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id={method.id}
                name="payment"
                checked={selectedMethod === method.id}
                onChange={() => handleMethodChange(method.id)}
                className="h-4 w-4 text-blue-600 border-gray-300"
              />
              <label
                htmlFor={method.id}
                className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                {method.label}
              </label>
            </div>
            {method.description && (
              <p className="mt-1 ml-6 text-sm text-gray-500">
                {method.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Hiển thị thông tin chi tiết của phương thức thanh toán đã chọn nếu cần */}
      {selectedMethod && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">
            Payment Instructions
          </h4>
          <p className="text-sm text-gray-600">
            {paymentMethods.find((m) => m.id === selectedMethod)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;

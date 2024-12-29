'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAllPaymentMethods } from '@/_lib/payment';
import { PaymentMethod as IPaymentMethod } from '@/types/Payment';

// Interface cho UI hiển thị
interface PaymentMethodDisplay {
  id: string;
  label: string;
  description: string;
  status: number;
}

// Mapping giữa API data và UI display
const PAYMENT_METHOD_MAPPING: Record<string, Partial<PaymentMethodDisplay>> = {
  bank_transfer: {
    label: 'DIRECT BANK TRANSFER',
    description:
      'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
  },
  check: {
    label: 'CHECK PAYMENTS',
    description: 'Please send a check to our store address.',
  },
  cod: {
    label: 'CASH ON DELIVERY',
    description: 'Pay with cash upon delivery.',
  },
  paypal: {
    label: 'PAYPAL',
    description:
      'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.',
  },
};

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodDisplay[]>(
    []
  );

  const mapAPItoDisplayMethod = useCallback(
    (apiMethod: IPaymentMethod): PaymentMethodDisplay => {
      const displayInfo = PAYMENT_METHOD_MAPPING[apiMethod.name] || {
        label: apiMethod.name.toUpperCase(),
        description: apiMethod.description || 'No description available',
      };

      return {
        id: apiMethod.id,
        label: displayInfo.label || apiMethod.name.toUpperCase(),
        description: displayInfo.description || apiMethod.description,
        status: apiMethod.status,
      };
    },
    []
  );

  const fetchPaymentMethods = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getAllPaymentMethods();

      if (response.message === 'success' && Array.isArray(response.data)) {
        // Filter active methods (assuming status 1 is active)
        const activeMethods = response.data
          .filter((method: IPaymentMethod) => method.status === 1)
          .map(mapAPItoDisplayMethod);

        setPaymentMethods(activeMethods);
      } else {
        throw new Error(response.message || 'Failed to fetch payment methods');
      }
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [mapAPItoDisplayMethod]);

  useEffect(() => {
    fetchPaymentMethods();
  }, [fetchPaymentMethods]);

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  if (loading)
    return <div className="p-4 text-center">Loading payment methods...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (paymentMethods.length === 0)
    return <div className="p-4 text-center">No payment methods available.</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-6">Payment Method</h3>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50'
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
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
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

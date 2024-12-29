'use client';

import { useState, useEffect, useCallback } from 'react';
import { getOrderDetail, getOrderHistory } from '@/_lib/order';
import { Order } from '@/types/Order';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import React from 'react';

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const handleError = useCallback(
    (err: Error) => {
      const errorMessage = err.message;
      setError(errorMessage);
      if (errorMessage.includes('not authorized')) {
        Cookies.remove('token');
        router.push('/auth/login');
      }
    },
    [router]
  );

  const fetchOrders = useCallback(async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        // router.push('/auth/login');
        return;
      }

      const response = await getOrderHistory();
      if (response.status === 'success') {
        setOrders(response.data);
      } else {
        setError(response.message || 'Failed to fetch orders');
      }
    } catch (err) {
      handleError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const handleViewDetail = useCallback(
    async (code: string) => {
      try {
        setLoadingDetail(true);
        if (selectedOrder?.code === code) {
          setSelectedOrder(null);
          return;
        }

        const response = await getOrderDetail(code);
        if (response.status === 'success' && response.data.length > 0) {
          setSelectedOrder(response.data[0]);
        } else {
          setError(response.message || 'Failed to fetch order details');
        }
      } catch (err) {
        handleError(err as Error);
      } finally {
        setLoadingDetail(false);
      }
    },
    [selectedOrder, handleError]
  );

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Order Code</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.code}>
                <tr className="border-b">
                  <td className="px-6 py-4">{order.code}</td>
                  <td className="px-6 py-4">
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        order.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">${order.total}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewDetail(order.code)}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {selectedOrder?.code === order.code ? 'Hide' : 'View'}
                    </button>
                  </td>
                </tr>
                {selectedOrder?.code === order.code && (
                  <tr>
                    <td colSpan={5} className="px-6 py-4">
                      {loadingDetail ? (
                        <div className="text-center py-4">
                          Loading details...
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-gray-600">Customer Name</p>
                              <p className="font-semibold">
                                {selectedOrder.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-600">Phone Number</p>
                              <p className="font-semibold">
                                {selectedOrder.phone_number}
                              </p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-gray-600">Shipping Address</p>
                              <p className="font-semibold">
                                {selectedOrder.shipping_address}
                              </p>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-semibold">
                                  ${selectedOrder.total_order.toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Shipping Cost
                                </span>
                                <span className="font-semibold">
                                  ${selectedOrder.shipping_costs.toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between pt-2 border-t">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">
                                  ${selectedOrder.total.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

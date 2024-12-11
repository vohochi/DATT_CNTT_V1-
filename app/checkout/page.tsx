"use client";

// pages/checkout.js
import { fetchDictrict, fetchProvince, fetchWard } from "@/_lib/address";
import React, { useEffect, useState } from "react";

interface AddressData {
  id: string; // Or number, depending on your data
  name: string;
}

export default function Checkout() {
  const [districts, setDistricts] = useState<AddressData[]>([]);
  const [provinces, setProvinces] = useState<AddressData[]>([]);
  const [wards, setWards] = useState<AddressData[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    district: "",
    ward: "",
    phone: "",
    email: "",
    orderNotes: "",
    name: '',
    id: '',
  });

  useEffect(() => {
    const getAddress = async () => {
      try {
        const [districtData, provinceData, wardData] = await Promise.all([
          fetchDictrict(),
          fetchProvince(),
          fetchWard(),
        ]);
        setDistricts(districtData || []);
        setProvinces(provinceData || []);
        setWards(wardData || []);
        console.log(provinceData, districtData, wardData)

      } catch (error) {
        console.error("Failed to fetch address data:", error);
      }
    };

    getAddress();
  }, []);

  useEffect(() => {
    if (formData.district) {
      const fetchWardData = async () => {
        try {
          const wardData = await fetchWard(formData.district); // Fetch wards based on selected district
          setWards(wardData || []);
        } catch (error) {
          console.error("Failed to fetch ward data:", error);
        }
      };

      fetchWardData();
    }
  }, [formData.district]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <div className="border-b border-gray-300 pb-4 mb-4 ">
            <div className="bg-gray-100 p-4 text-gray-700 text-sm flex border-t-2 border-blue-500 ">
              <i className="fas fa-tag mr-2"></i>
              <div className="mr-2">Have a Coupon?</div>
              <a href="#/" className="text-blue-500">
                {" "}
                Click here to enter your code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* //billing// */}

            <div>
              <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                {/* Dynamic Country Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option value="">Select a country</option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.name}>
                        {province.name}
                      </option>
                    ))}
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

                {/* Dynamic District Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    District <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option value="">Select a district</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.name}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic Ward Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ward <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option value="">Select a ward</option>
                    {wards.map((ward) => (
                      <option key={ward.id} value={ward.name}>
                        {ward.name}
                      </option>
                    ))}
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
                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Order Notes (optional)
                  </label>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
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
                    I have read and agree to the website terms and conditions{" "}
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
